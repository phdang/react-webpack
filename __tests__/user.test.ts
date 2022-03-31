jest.mock('../src/http/request');

import * as user from '../src/http/user';

// The assertion for a promise must be returned.
it('works with promises', () => {
  expect.assertions(1);
  return expect(user.getUserName(4)).resolves.toEqual('Mark')
});

