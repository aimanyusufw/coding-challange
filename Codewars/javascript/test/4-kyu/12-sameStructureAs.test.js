import "../../4-kyu/12-sameStructureAs";

describe("Tests", () => {
  it("test", () => {
    expect([1, 1, 1].sameStructureAs([2, 2, 2])).toBeTruthy();

    expect([1, [1, 1]].sameStructureAs([2, [2, 2]])).toBeTruthy();
    expect([1, [1, 1]].sameStructureAs([[2, 2], 2])).toBeFalsy();
    expect([1, [1, 1]].sameStructureAs([2, [2]])).toBeFalsy();

    expect([[[], []]].sameStructureAs([[[], []]])).toBeTruthy();
    expect([[[], []]].sameStructureAs([[1, 1]])).toBeFalsy();

    expect([1, [[[1]]]].sameStructureAs([2, [[[2]]]])).toBeTruthy();

    expect([].sameStructureAs(1)).toBeFalsy();
    expect([].sameStructureAs({})).toBeFalsy();

    expect([1, "[", "]"].sameStructureAs(["[", "]", 1])).toBeTruthy();

    expect([1, 2].sameStructureAs([[3], 3])).toBeFalsy();
  });
});
