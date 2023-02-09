/**
 Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.
 */


 // My solution
 function boolToWord( bool ){
  if (bool) return 'Yes'
  return 'No'
}

// others solution that I liked
function boolToWord( bool ){
  return bool ? 'Yes':'No';
}