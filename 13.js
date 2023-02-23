/**
  Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

Example(Input => Output):
35231 => [1,3,2,5,3]
0 => [0]
 */

// my solution
function digitize(n) {
  const nArr = String(n).split('')
  nArr.reverse()
  const res = nArr.map(num => Number(num))
  return res
}

//others solutions that I liked:
function digitize(n) {
  return String(n).split('').map(Number).reverse()
}

function digitize(n) {
  return Array.from(String(n), Number).reverse();
}
