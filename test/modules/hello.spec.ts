import { assert } from "chai";
import { hello } from "../../src/modules/hello";

describe("Hello Tests", () => {
    it("should add Hello in front of string", () => {
        const input = 'Bob';
        const expectedOutput = 'Hello Bob';
        assert.equal(expectedOutput, hello(input));
    })
})