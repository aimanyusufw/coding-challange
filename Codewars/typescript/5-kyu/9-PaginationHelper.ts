// Codewars 9
// Title :  PaginationHelper
// Question :   You will complete the PaginationHelper class, which is a utility class helpful for querying paging information related to an array.
// Challange Url :  https://www.codewars.com/kata/515bb423de843ea99400000a/train/typescript
// Level : 5kyu

// Method : 1
export class PaginationHelper {
  private collection: number[];
  private itemsPage: number;

  constructor(collection: number[], itemsPage: number) {
    this.collection = collection;
    this.itemsPage = itemsPage;
  }

  itemCount() {
    return this.collection.length;
  }

  pageCount() {
    return Math.ceil(this.collection.length / this.itemsPage);
  }

  pageItemCount(pageIndex: number) {
    if (pageIndex < 0 || pageIndex >= this.pageCount()) return -1;

    if (pageIndex === this.pageCount() - 1) {
      return this.collection.length % this.itemsPage || this.itemsPage;
    }

    return this.itemsPage;
  }

  pageIndex(itemIndex: number) {
    if (itemIndex < 0 || itemIndex >= this.collection.length) return -1;
    return Math.floor(itemIndex / this.itemsPage);
  }
}

// Method : 2

// Other Users Method
// export class PaginationHelper {
//   constructor(private collection: any[], private itemsPerPage: number) {}

//   itemCount(): number {
//     return this.collection.length;
//   }

//   pageCount(): number {
//     return Math.ceil(this.collection.length / this.itemsPerPage);
//   }

//   pageItemCount(pageIndex: number): number {
//     return pageIndex >= 0 && pageIndex < this.pageCount()
//       ? this.collection.slice(
//           pageIndex * this.itemsPerPage,
//           (pageIndex + 1) * this.itemsPerPage
//         ).length
//       : -1;
//   }

//   pageIndex(itemIndex: number): number {
//     return itemIndex >= 0 && itemIndex < this.itemCount()
//       ? Math.floor(itemIndex / this.itemsPerPage)
//       : -1;
//   }
// }
