function foo(a, b) {
  if (a === b) {
    return true;
  } else if (a > b) {
    return false;
  } else {
    return foo(a + 1, b);
  }
}

console.log(foo(1, 5)); //Correctly prints false
console.log(foo(5, 1)); //Correctly prints false
console.log(foo(5, 5)); // Correctly prints true
console.log(foo(10, 5)); //Correctly prints false

function bar(a,b){
  if(a === b) return true;
  if(a > b) return false;
  return bar(a+1,b); //The missing return statement
}

console.log(bar(1,5)); //Prints false correctly
console.log(bar(5,1)); //Prints false correctly
console.log(bar(5,5)); //Prints true correctly