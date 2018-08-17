const person = {
    firstName: 'Al Amin',
    lastName: 'Khan',
    age: 22,
    profession: 'Front End Developer',
    skills: [
        'html' , 'css' , 'javascript' , 'UI Design'
    ],
    address: {
        city: 'Chittagong',
        Country: 'Bangladesh'
    },
    birthYear: function() {
        return 2018 - this.age;
    }
 
}

let val;

val = person;

// Get specific value
val = person.birthYear();

console.log(val);

// Looping though array and object
const bio = [
    {
        name: 'Al Amin',
        age: 22,
    },
    {
        name: 'Mike D',
        age: 28,
    },
    {
        name: 'Phillip Moore',
        age: 30,
    },
];

// Running for loop to extract value
for( let i = 0; i < bio.length; i++ ) {
    console.log( bio[i].age );
}