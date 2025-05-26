import { farewell, greet, greetInItalian } from "../app.js";
import { describe, test } from "node:test";
import assert from "node:assert";

test("greet returns a greeting message", () => {
  /**
   *  works on AAA
   * Arrange
   * Act
   * Assert
   */
  const actual = greet("World");
  const expected = `Hello, World!`;
  assert.strictEqual(actual, expected);
});

// suite can be used in place of describe - this means grouping tests
describe("greeting functions", () => {
  test("greet should return a greeting message", () => {
    const actual = greet("Alice");
    const expected = `Hello, Alice!`;
    assert.strictEqual(actual, expected);
  });

  test("farewell should return a farewell message", () => {
    const actual = farewell("Bob");
    const expected = `Goodbye, Bob!`;
    assert.strictEqual(actual, expected);
  });

  test("greet in italian", () => {
    const actual = greetInItalian("min");
    const expected = `Ciao, min!`;
    assert.strictEqual(actual, expected);
  });
});
