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
// console.log(isPresent)





//Implemented a recursive linear search, never use this in production it is atleast 1/2 to 2/3's slower the 
//only reason why im implementing it this way is to better understand recursion with an algorithm i //already understand. You can interate over a 10_000 item int array without getting a stack trace error. 
//with a 100_000 item int array you get a stack trace error. Did not investigate further to pinpoint //exactly the break point is. I find recursion to be quite beautiful and simple. I like how you start with //the null case first and work your way up. In imperative solutions you work from assuming you have a 
//valid array and work your way down to null. Both approaches are valid depending on the language. //If youre going to use recursion to iterate the language needs to be TCO. TS is not TCO. I find that //taking a solution and inverting it and solving it the opposite way of what is optimal gives you better 
//understanding of the problem. Going foward I will try to do this with every algorithm.




function recursiveLinearSearch(arr: number[], key: number, index: number = 0): number {
  if (index >= arr.length) {
    return -1;
  }

  if (arr[index] === key) {
    return index;
  }
  return recursiveLinearSearch(arr, key, index + 1);
}


