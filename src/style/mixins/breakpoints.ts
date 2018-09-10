import { is } from 'utils';

const toNum = (strOrNum: string | number): number => parseFloat(strOrNum as string);

type MediaQuery = string;

const isBreakpoint = (
  start: string | Nullable<number>,
  end?: string | Nullable<number>,
): any => !!(start || end);

const isMediaQuery = (mediaQuery: MediaQuery): any => /^@media/.test(mediaQuery);

export class Breakpoint {
  start: Nullable<number>;
  end: Nullable<number>;
  constructor(start: Nullable<number>, end: Nullable<number>) {
    isBreakpoint(start, end);
    this.start = start;
    this.end = end;
  }
}

const min = (bp: number): MediaQuery => `@media screen and (min-width: ${bp}px)`;
const max = (bp: number): MediaQuery => `@media screen and (max-width: ${bp}px)`;
const btw = (lower: number, upper: number): MediaQuery =>
  `@media screen and (min-width: ${lower}px) and (max-width: ${upper}px)`;

// Inverts a media query @media --> @media not or
// @media not --> @media
function invert(mediaQuery: MediaQuery = ''): MediaQuery {
  isMediaQuery(mediaQuery);
  if (!/^@media not/.test(mediaQuery)) {
    return mediaQuery.replace('@media', '@media not');
  }
  return mediaQuery.replace('@media not', '@media');
}

// Given two breakpoints (null, 715) and (716, 1024) this will
// return a new merged breakpoint of (null, 1024)
function mergeBps(bps: Breakpoint[]): Breakpoint {
  const starts: any[] = [];
  const ends: any[] = [];

  bps.forEach((bp) => {
    starts.push(bp.start);
    ends.push(bp.end);
  });

  starts.sort((a, b) => a - b);
  ends.sort((a, b) => a - b);
  const merged = new Breakpoint(starts[0], ends[ends.length - 1]);

  if (starts.includes(null)) merged.start = null;
  if (ends.includes(null)) merged.end = null;
  return new Breakpoint(merged.start, merged.end);
}

/*
import { mobile } from 'style/variables/breakpoints';
import { above } from 'style/mixins'
import styled from 'utils/styled';

const Widget = styled.div`
  ${above(mobile)} { // effectively tablet and above
    width: 100%;
  }
`;

const OtherWidget = styled.div`
  ${above(414)} { // applies >= 415px
    transform: rotate(1000deg);
  }
`
*/
// Returns a media query above the specified breakpoint
// By defauly inclusive is false
function above(
  bp: Breakpoint | string | number,
  inclusive: boolean = false,
): MediaQuery {
  let bound: number;
  if (is.instanceOf(bp, Breakpoint)) {
    bound = (bp as Breakpoint).end! + 1;
  } else {
    const breakpoint = toNum(bp as string | number);
    bound = inclusive ? breakpoint : breakpoint + 1;
  }

  return min(bound);
}

// Returns a media query above the specified breakpoint
// By default inclusive is false
function below(
  bp: Breakpoint | string | number,
  inclusive: boolean = false,
): MediaQuery {
  let bound;
  if (is.instanceOf(bp, Breakpoint)) {
    bound = (bp as Breakpoint).start! - 1;
  } else {
    const breakpoint = toNum(bp as string | number);
    bound = inclusive ? breakpoint : breakpoint - 1;
  }

  return max(bound);
}

// Returns a media query between specified values
// By default, inclusive is true
function between(
  lower: Breakpoint | string | number,
  upper: Breakpoint | string | number,
  inclusive: boolean = true,
): MediaQuery {
  let bounds;
  if (is.instanceOf(lower, Breakpoint) && is.instanceOf(upper, Breakpoint)) {
    bounds = [(lower as Breakpoint).start, (upper as Breakpoint).end];
  } else {
    bounds = [lower, upper];
  }

  if (!inclusive) {
    bounds[0] += bounds[0];
    bounds[1] -= bounds[1];
  }

  return btw(bounds[0], bounds[1]);
}

/*
import { mobile } from 'style/variables/breakpoints';
import { at } from 'style/mixins'
import styled from 'utils/styled';

const Widget = styled.div`
  ${at(mobile)} {
    width: 100%;
  }
`;
*/
function at(...bps: Breakpoint[]): MediaQuery {
  let bp;

  bps.forEach(bp => isBreakpoint(bp.start, bp.end));
  if (bps.length > 1) {
    bp = mergeBps(bps);
  } else {
    bp = bps[0];
  }

  if (!bp.start && bp.end) return below(bp.end, true);
  if (bp.start && !bp.end) return above(bp.start, true);
  return between(bp.start, bp.end);
}

/*
import { tablet, desktop } from 'style/variables/breakpoints';
import { not } from 'style/mixins'
import styled from 'utils/styled';

// This will apply the css to all widths except desktop
const Widget = styled.div`
  ${not(desktop)} {
    width: 100%;
  }
`;

const OtherWidget = styled.div`
  ${not(above(tablet))} { // effectively < tablet or mobile
    width: 100%;
  }
`;
*/
// Can either pass in a breakpoint or a media query to invert it
function not(
  bp: Breakpoint | string | number,
) {
  if (is.instanceOf(bp, Breakpoint)) {
    return invert(at(bp as Breakpoint));
  }

  isMediaQuery(bp as string);
  return invert(bp as string);
}

export {
  above,
  below,
  between,
  at,
  not,
};
