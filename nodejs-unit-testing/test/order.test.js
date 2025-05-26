import { describe, test, mock } from "node:test";
import assert from "node:assert";
import { processOrder } from "../app.js";
describe("Order features testing", () => {
  test("that process the order correctly", () => {
    const mockedProcessPayment = mock.fn((amount) => {
      // don't call any api or No side-effect
      console.log("I am a mocked function");
      return { id: 123, status: "success", amount: amount };
    });

    const expected = { id: 123, status: "success", amount: 100 };

    assert.strictEqual(mockedProcessPayment.mock.callCount(), 0);
    const result = processOrder(
      { amount: 100 },
      { processPayment: mockedProcessPayment }
    );
    assert.deepStrictEqual(result, expected);
    assert.strictEqual(mockedProcessPayment.mock.callCount(), 1);

    const call = mockedProcessPayment.mock.calls[0];
    assert.deepStrictEqual(call.arguments, [100]);
  });
});
