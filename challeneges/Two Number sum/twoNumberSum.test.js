const { twoNumberSum } = require('./twoNumberSum');

test('Test Case #1', (expect) => {
  const expected = [-1, 11];
  const actual = twoNumberSum([3, 5, -4, 8, 11, 1, -1, 6], 10);
  expect.deepEqual(actual, expected);
});
