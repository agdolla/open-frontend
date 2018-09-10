import { isArray, isObject, mapValues } from 'lodash';

type func = () => any;

export const is = {
  undef: (v: any): v is undefined => v === null || v === undefined,
  notUndef: (v: any) => v !== null && v !== undefined,
  func: (f: any): f is func => typeof f === 'function',
  number: (n: any): n is number => typeof n === 'number',
  string: (s: any): s is string => typeof s === 'string',
  array: Array.isArray,
  object: (obj: any): obj is object => obj && !is.array(obj) && typeof obj === 'object',
  promise: (p: any): p is Promise<any> => p && is.func(p.then),
  instanceOf: (c: any, p: any) => c && p && c instanceof p,
};

export const once = (() => (
  (cb) => {
    let count = 0;
    return (...args) => {
      if (count === 0) {
        count += 1;
        return cb(...args);
      }
    };
  }
))();

/*
 * Clones any object and recursively replaces null with undefined
 */
export const mapNullToUndefined = (o: any) => {
  if (!isObject(o)) {
    return o === null ? undefined : o;
  }

  return mapValues(o, (v) => {
    if (isArray(v)) {
      return (v as any[]).map(av => mapNullToUndefined(av));
    } else if (isObject(v)) {
      return mapNullToUndefined(v);
    }
    return v === null ? undefined : v;
  });
};

export const noop = (..._: any[]): void => {};
