import { Breakpoint } from 'style/mixins/breakpoints';

// Application breakpoints
export const xs = new Breakpoint(null, 414);
export const mobile = new Breakpoint(null, 767);
export const tablet = new Breakpoint(768, 1060);
export const desktop = new Breakpoint(1060, null);
export const xl = new Breakpoint(1500, null);
