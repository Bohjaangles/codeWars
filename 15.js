/**
Your task is to construct a building which will be a pile of n cubes. The cube at the bottom will have a volume of 
n - pow3,  the cube above will have volume of (n - 1) - pow3 and so on until the top which will have a volume of 
1 - pow3

You are given the total volume m of the building. Being given m can you find the number n of cubes you will have to build?

Examples:
findNb(1071225) --> 45

findNb(91716553919377) --> -1

 */

// my solution:
function findNb(m) {
  let total = 0;
  let count = 0;

  while (total < m) {
    count += 1;
    total += count ** 3;
  }

  return total === m ? count : -1;
}

//others solutions that I liked:
// this is based on the formula that the sum of the first n cubes equals (n * (n + 1) / 2) ^ 2
// also, the sum of the first n cubes is always a square
function findNb(m) {
  m = Math.sqrt(m) * 2;
  if (m != parseInt(m)){
    return -1;
  }
  var result = parseInt(Math.sqrt(m));
  return (result * (result + 1) == m) ? result : -1;
}