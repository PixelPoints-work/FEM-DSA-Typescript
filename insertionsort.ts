// Insertion sort is a decent algorithm for small datasets and almost sorted datasets.
// In place sorting algorithm for relying on mutation.
// Prefer inssertion sort over bubble sort.
// 1 half part of timsort.

function insertionSort(arr: number[]): number[] {
  for (let i = 1; i < arr.length; i++) {
    let key = arr[i];
    let j = i - 1;

    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = key;
  }
  return arr;
}
