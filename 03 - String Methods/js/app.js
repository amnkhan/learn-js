const firstName = 'Al Amin';
const lastName = 'Khan';
const age = 22;
const greeting = 'Hello there, i am Al Amin';
const tag = 'Web Design, Data Science, Font End Development, Graphic Design';

let val;

val = firstName + lastName;

// Concatenation
val = firstName + ' ' + lastName;

// Append Variable
val = 'Al Amin ';
val += 'Khan';

val = 'My name is ' + firstName + ' and i am ' + age;

// Escaping
val = 'That\'s awesome, i can\'t wait';

// Length
val = firstName.length;

// concat
val = firstName.concat(' ' , lastName);

// Change Case
val = firstName.toUpperCase();
val = firstName.toLowerCase();

// String as an array
val = firstName[1];

// indexOf()
val = firstName.indexOf('m');
val = firstName.lastIndexOf('n');

// chatAt()
val = lastName.charAt('0');

// last char
val = firstName.charAt(firstName.length - 1);

// substring
val = firstName.substring(0 , 7);

// Slice()
val = firstName.slice(-4);

// split()
val = greeting.split(' ');
val = tag.split(',');

// replace
val = greeting.replace('Al Amin' , 'Khan');

// includes()
val = greeting.includes('Al Amin');

console.log(val);