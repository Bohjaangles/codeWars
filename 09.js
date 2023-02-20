/**
 Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

Examples
"This is an example!" ==> "sihT si na !elpmaxe"
"double  spaces"      ==> "elbuod  secaps"
 */

// my solution:
function reverseWords(str) {
  const strArr = str.split(' ')
  const reverso = strArr.map(word => {
   return word.split('').reverse().join('')
  })
  return reverso.join(' ')
}

// others solutions that I liked:
function reverseWords(str) {
  return str.split(' ').map(function(word){
    return word.split('').reverse().join('');
  }).join(' ');
}
// is same but clever syntax