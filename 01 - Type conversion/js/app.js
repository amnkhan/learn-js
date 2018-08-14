let val;

// Number to string
val = String(6);
val = String(5+5);

// Boolean to string
val = false;
val = String(false);

// Date to string
val = new Date();
val = String(new Date());

// Array to string
val = String([1,2,false]);

// toString() method

val = (5).toString();
val = (false).toString();


// String to Number
val = '5';
val = Number('5');
val = Number(true);
val = Number(false);
val = Number(null);
val = Number([1,2,3]);

// parseInt() method
val = parseInt('5.5');
val = parseFloat('5.80');

// Output
console.log(val);
console.log(typeof val);
// console.log(val.length);
console.log(val.toFixed());