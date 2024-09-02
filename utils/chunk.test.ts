import { chunk } from "./chunk";

describe("chunk", () => {
  it("should split an array into chunks of the given size", () => {
    expect(chunk(["a", "b", "c", "d"], 2)).toEqual([
      ["a", "b"],
      ["c", "d"],
    ]);
    expect(chunk(["a", "b", "c", "d"], 3)).toEqual([["a", "b", "c"], ["d"]]);
    expect(chunk(["a", "b", "c", "d", "e"], 2)).toEqual([
      ["a", "b"],
      ["c", "d"],
      ["e"],
    ]);
  });

  it("should handle cases where array length is not divisible by chunk size", () => {
    expect(chunk(["a", "b", "c"], 2)).toEqual([["a", "b"], ["c"]]);
    expect(chunk([1, 2, 3, 4, 5], 2)).toEqual([[1, 2], [3, 4], [5]]);
  });

  it("should return the original array if size is 1", () => {
    expect(chunk(["a", "b", "c"], 1)).toEqual([["a"], ["b"], ["c"]]);
  });

  it("should return an empty array if input array is empty", () => {
    expect(chunk([], 2)).toEqual([]);
  });

  it("should return an empty array if size is less than 1", () => {
    expect(chunk(["a", "b", "c"], 0)).toEqual([]);
    expect(chunk(["a", "b", "c"], -1)).toEqual([]);
  });

  it("should handle cases where size is larger than the array length", () => {
    expect(chunk(["a", "b"], 3)).toEqual([["a", "b"]]);
    expect(chunk([1, 2], 5)).toEqual([[1, 2]]);
  });

  it("should handle null or undefined array inputs gracefully", () => {
    expect(chunk(null, 2)).toEqual([]);
    expect(chunk(undefined, 2)).toEqual([]);
  });
});
