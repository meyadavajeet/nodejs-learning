import {describe, it} from 'node:test'
import { userData } from '../app.js';

describe("Test user features", () => {
  it("fetches the data from the server", (t) => {
    const data = userData(1);
    t.assert.snapshot(data);
  });
});
