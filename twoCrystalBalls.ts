// The crystal ball problem is unique due to the constraint that you are given. You only have two attempts,
// to see what the lowest floor the ball will break from or put another way one index below  the highest,
// floor you're able to safely drop the ball without breaking. linear search would be viable here, but we are
// able to do better with jumping buy the square root and then back tracking when the first ball breaks and linear
// searching the previous square root jump.

function twoCrystalBalls(arr: boolean[]): number {
  const jumpAmount = Math.floor(Math.sqrt(arr.length));

  let i = jumpAmount;
  for (; i < arr.length; i += jumpAmount) {
    if (arr[i]) {
      break;
    }
  }

  i -= jumpAmount;

  for (let j = 0; j <= jumpAmount && i < arr.length; ++j, ++i) {
    if (arr[i]) {
      return i;
    }
  }
  return -1;
}
