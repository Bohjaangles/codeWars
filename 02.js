/**
 You get an array of numbers, return the sum of all of the positives ones.

Example [1,-4,7,12] => 1 + 7 + 12 = 20

Note: if there is nothing to sum, the sum is default to 0.
 */


// my solution
function positiveSum(arr) {
  let result = 0;
  arr.forEach(num => {
    if(num > 0) {
      result += num
    }
  })
  return result
}

// solutions from others I like
function positiveSum(arr) {
  return arr.reduce((a,b)=> a + (b > 0 ? b : 0),0);
}
