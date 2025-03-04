import { PaginationHelper } from "../../5-kyu/9-PaginationHelper";

describe("Tests suite", () => {
  it("sample test : 24 items with 10 per page", () => {
    const collection = [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
      22, 23, 24,
    ];
    const helper = new PaginationHelper(collection, 10);

    expect(helper.pageCount()).toStrictEqual(3);
    expect(helper.itemCount()).toStrictEqual(24);

    expect(helper.pageItemCount(1)).toStrictEqual(10);
    expect(helper.pageItemCount(2)).toStrictEqual(4);
    expect(helper.pageItemCount(3)).toStrictEqual(-1);

    expect(helper.pageIndex(40)).toStrictEqual(-1);
    expect(helper.pageIndex(22)).toStrictEqual(2);
    expect(helper.pageIndex(3)).toStrictEqual(0);
    expect(helper.pageIndex(0)).toStrictEqual(0);
    expect(helper.pageIndex(-1)).toStrictEqual(-1);
    expect(helper.pageIndex(-23)).toStrictEqual(-1);
    expect(helper.pageIndex(-15)).toStrictEqual(-1);
  });

  it("empty collection", () => {
    const helper = new PaginationHelper([], 10);

    expect(helper.pageCount()).toStrictEqual(0);
    expect(helper.itemCount()).toStrictEqual(0);
    expect(helper.pageIndex(0)).toStrictEqual(-1);
    expect(helper.pageItemCount(0)).toStrictEqual(-1);
  });
});
