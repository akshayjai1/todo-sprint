import { getInitials } from './util';

test('checking getInitials return AB for Amitabh Bachchan', () => {
  expect(getInitials('Amitabh Bachchan')).toEqual('AB');
});
test('checking max return length of getInitials is 2 return CB for Charan Joshi Bachchan', () => {
  expect(getInitials('Charan Joshi Bachchan')).toEqual('CJ');
});
test('checking getInitials always return upper case for rohit patel', () => {
  expect(getInitials('rohit patel')).toEqual('RP');
});
test('checking getInitials returns empty string, when falsy value is passed', () => {
  /* At run time, null can be passed to this function, and our function should handle that case */
  let inputs = [null, undefined, 0, 3, true, false, {}, [], [{}]];
  for (let i = 0; i < inputs.length; i++) {
    // @ts-ignore
    expect(getInitials(inputs[i])).toEqual('');
  }
});
