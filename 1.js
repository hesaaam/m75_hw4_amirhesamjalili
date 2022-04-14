let zero = new Number(0); 
alert(typeof zero) // "object"

if (zero) { // zero is true, because it's an object
  alert( "zero is truthy!?!" );
}