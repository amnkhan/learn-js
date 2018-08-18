// = means assigning
// == means comparing
// === compare and test the type

// Setting a value
const id = 100;

// EQUAL TO COMPARISON
if( id == 100 ) {
    console.log('Its true');
} else {
    console.log('It\'s false')
}

// // NOT EQUAL TO COMPARISON
if( id != 105 ) {
    console.log('Its true');
} else {
    console.log('It\'s false')
}

// // EQUAL TO TYPE COMPARISON
if( id === 100 ) {
    console.log('Its true');
} else {
    console.log('It\'s false')
}

// // NOT EQUAL TO TYPE COMPARISON
if( id !== 100 ) {
    console.log('Its true');
} else {
    console.log('It\'s false')
}

// Check if something is defined
if ( typeof id !== 'undefined' ) {
    console.log(`Id is ${id}`);
} else {
    console.log('No ID');
}

// Greater OR Less than
if (id > 200 ) {
    console.log('Correct');
} else {
    console.log('Incorrect');
}

// Else If
const color = 'yellow';

if( color === 'Black') {
    console.log('Color is Black');
} else if ( color === 'blue') {
    console.log('Color is blue');
} else {
    console.log('Color is not blue or black');
}

// Logical operators
const name = 'Al Amin',
      age = 22;

// And &&
if ( age > 0 && age < 12 ) {
    console.log(`${name} is a Child`);
} else if ( age >= 13 && age <= 19 ) {
    console.log(`${name} is a Teen`);
} else {
    console.log(`${name} is an Adult`);
}

// OR ||
if ( age <= 12 || age >= 45 ) {
    console.log(`${name} Can't Sky Dive`);
} else {
    console.log(`${name} Can Sky Dive`);
}

// Ternary Operator || Short hand way
console.log( id === 100 ? 'Correct' : 'Incorrect');

// Without Brackets || Not recommender
if ( id === 100 )
    console.log('Correct');
else
    console.log('Incorrect');