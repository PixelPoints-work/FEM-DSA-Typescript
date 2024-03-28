// Binary search is a O(log n) algorithm that is efficient at finding an item in an ordered dataset.

function binarySearch(arr: number[], target: number): number {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high) {
    const mid = Math.floor(low + (high - low) / 2);

    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return -1;
}

const myArray = [1, 3, 5, 7, 8, 9, 10, 15, 20];
const myNumber = 15;
const isPresent = binarySearch(myArray, myNumber);

if (isPresent !== -1) {
  console.log("The number that you are looking for is at index: " + isPresent);
} else {
  console.log("Number not found");
}
