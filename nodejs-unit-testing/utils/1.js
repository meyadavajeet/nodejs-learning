function greet(name) {
  return `Hello, ${name}!`;
}

test("greet returns a greeting message", (name) => {
  const actual = greet(name);
  const expected = `Hello, ${name}!`;
  assert.strictEqual(actual, expected, `Expected "${actual}" to equal "${expected}"`);
});
