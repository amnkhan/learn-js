// Creating arrays
const numbers = [22 , 45, 832, 384, 100];
const numbers2 = new Array(31, 10, 17, 92, 63);
const language = ['python' , 'php' , 'javascript' , 'html' , 'css'];
const mixed = ['mixed' , 22 , true , null , undefined , {name: 'al amin' , age: 22} , new Date()];

let val;

// Get array length
val = numbers.length;

// Check if its an array
val = Array.isArray(numbers);

// Getting single value
val = numbers[3];

// Insert item into an array
numbers[3] = 420;

// Find index of value
val = numbers.indexOf(420);

// Mutating arrays
val = numbers.push(22); // add to the end
val = numbers.pop(); // remove from the end
val = numbers.unshift(07); // add to the front
val = numbers.shift(); // remove from the front

// Slicing arrays
// val = numbers.splice(1 , 5);

// Revesing array
val = numbers.reverse();

// Concatenating arrays
val = numbers.concat(numbers2
);

// Sorting array
val = language.sort();

// Sorting arrays with numbers
val = numbers.sort(function(x , y) {
    return x - y;
});

val = numbers.sort(function(x , y) {
    return y - x;
}); // sort the revesed way

// Find method
function under50( num ) {
    return num < 50;
};

val = numbers.find( under50 ); 


console.log(numbers);
console.log(val);