import add from "./../../lib/Math/add";
import assert from "assert";

describe("add() test", () => {
	it("  add() no arguments", () => {
		assert.strictEqual(add(), 0);
	});
	it("  add() one arguments", () => {
		assert.strictEqual(add(1), 1);
		assert.strictEqual(add(0), 0);
		assert.strictEqual(add(-1), -1);
	});
	it("  add() two arguments", () => {
		assert.strictEqual(add(1, 2), 3);
		assert.strictEqual(add(1, -1), 0);
	});
	it("  add() several arguments", () => {
		assert.strictEqual(add(1, 2, 3), 6);
		assert.strictEqual(add(1, -2, 0), -1);
		assert.strictEqual(add(1, 2, 3, 4, 5), 15);
	});
	it("  add() non-numeric arguments", () => {
		assert.strictEqual(add(1, "a"), NaN);
		assert.strictEqual(add(1, null), 1);
		assert.strictEqual(add(1, {}), NaN);
		assert.strictEqual(add(1, []), 1);
	});
});
