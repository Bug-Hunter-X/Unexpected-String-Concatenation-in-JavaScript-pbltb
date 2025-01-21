function foo(a,b){
  // Type checking before operation
  if(typeof a === 'number' && typeof b === 'number'){
    return a + b; 
  } else {
    return "Error: Operands must be numbers";
  }
}
console.log(foo(2,3)); // Output 5
console.log(foo(2,"3")); // Output Error: Operands must be numbers
console.log(foo("2",3)); //Output Error: Operands must be numbers
console.log(foo("2","3")); // Output Error: Operands must be numbers