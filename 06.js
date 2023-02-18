/**
 Given the triangle of consecutive odd numbers:

             1
          3     5
       7     9    11
   13    15    17    19
21    23    25    27    29
...
Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)

1 -->  1
2 --> 3 + 5 = 8
 */

// my solution: 
function rowSumOddNumbers(n) {
	let result = 0;
  let current = 1
  for (let i = 1; i <= n; i++) {
    for (let j = 0; j < i; j++) {
      if (i === n) {
        result += current
      }
      current += 2
    }
  }
  return result
}

// Solutions I liked by others:
function rowSumOddNumbers(n) {
	return n*n*n
}

// or
function rowSumOddNumbers(n) {
  return Math.pow(n, 3);
}

// That feeling of when my ten lines of code could have been 1