// linear search is a basic search algorithm that is O(n) in time complexity. It's a decent algorithm for searching,
// small collections. Large data sets there are better candidates. Overall since im relatively new to programming implementing this algorithm gave me the confidence to try to,
// implement more.

function linearSearch(arr: number[], target: number): number {
  for (let i = 0; i < arr.length; ++i) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
}

function linearSearchBool(arr: number[], target: number): boolean {
  for (let i = 0; i < arr.length; ++i) {
    if (arr[i] === target) {
      return true;
    }
  }
  return false;
}

// Uncomment to test linearSearch

// const myArray = [2, 5, 3, 564, 78, 9, 25];
// const myNumber = 78;
// const isPresent = linearSearch(myArray, myNumber);
// console.log(isPresent);
