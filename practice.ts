// This file will be used for timed practice to see how fast I can implement the algorithms
// and problems that I know. It takes me a couple of days to learn an new algorithm. There
// should be multiple timed trials with the same amount of algorithms and problems used.
// The time will be recorded with a stop watch and in the git commit message to track progress.
//
// 3/28/24 will implement the 3 algorithms I current know and the two crystall ball problem. Will be timed.
// 9 mins and 56 seconds... No warm up cold start... Next step is how to implement a queue make a single and
// doubly linked list from scratch. The concept is fairly simple the implementation is a bit confusing at this 09:27
// 3/30/24 time was 10 min 36 seconds made a few mistakes just woke up . Made the mistakes due to also implementing// These algorithms in lua. My "muscle memory" was messed up. overall happy. All apart of the growing process.




function linearSearch(arr: number[], target: number): number {
  for (let i = 0; i < arr.length; ++i) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
}

function bubbleSort(arr: number[],): number[] {
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
      break
    }
  }
  return arr;
}

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


function twoCrystalBalls(arr: boolean[]): number {
  const jumpAmount = Math.floor(Math.sqrt(arr.length));

  let i = jumpAmount;
  for (; i < arr.length; ++i) {
    if (arr[i]) {
      break;
    }
  }


  i -= jumpAmount

  for (let j = 0; j <= jumpAmount && i < arr.length; ++j, ++i) {
    if (arr[i]) {
      return i;
    }
  }
  return -1;
}
