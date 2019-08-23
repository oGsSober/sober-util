import sum from "./../../lib/Math/sum";
import assert from "assert";

describe("sum() test", () => {
	it("  sum() no arguments", () => {
		assert.strictEqual(sum(), undefined);
	});

	it("  sum() several arguments", () => {
		assert.strictEqual(sum([1]), 1);
		assert.strictEqual(sum([1, 2, 3]), 6);
		assert.strictEqual(sum([-5, -2, 0, 99, 0, 2, -55]), 39);
	});
	it("  sum() non-array arguments", () => {
		assert.strictEqual(sum("a"), undefined);
		assert.strictEqual(sum(undefined), undefined);
		assert.strictEqual(sum(null), undefined);
		assert.strictEqual(sum({}), undefined);
		assert.strictEqual(sum([]), undefined);
	});
});
