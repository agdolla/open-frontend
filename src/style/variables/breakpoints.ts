import { Breakpoint } from 'style/mixins/breakpoints';

// Application breakpoints
const xs = new Breakpoint(null, 414);
const mobile = new Breakpoint(null, 767);
const tablet = new Breakpoint(768, 1060);
const desktop = new Breakpoint(1060, null);
const xl = new Breakpoint(1500, null);

export {
  xs,
  mobile,
  tablet,
  desktop,
  xl,
};
