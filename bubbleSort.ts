// This algorithm is trash... It is taught becuase it is easy to learn. This algorithm
// should never be used in production. The time complexity of this algorithm is O(n^2).

function bubbleSort(arr: number[]): number[] {
  for (let i = 0; i < arr.length - 1; ++i) {
    let swapped = false;
    for (let j = 0; j < arr.length - 1 - i; ++j) {
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        swapped = true;
      }
    }
    if (!swapped) {
      break;
    }
  }
  return arr;
}

const myArray = [7, 2, 5, 8, 3, 10, 1];
let result: number[] = bubbleSort(myArray);
console.log("This is your sorted array: " + result);
