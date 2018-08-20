// FOR LOOP || Run for loop when you know how many time it's going to run
for(let i = 0; i <= 10; i++) {
    if ( i === 5 ) {
        console.log(i + ' is my fav no');
        continue;
    } // continue loop
    if ( i === 8 ) {
        console.log('Loop breaks');
        break;
    } // loop break
    console.log('Number ' + i)
};

// WHILE LOOP || Run while loop when you don't know how many times it's going to run
let i = 0;

while ( i < 10 ) {
    console.log('Number ' + i);
    i++;
}

// Do WHILE LOOP || It will run at least once no matter what
let i = 0;

do {
    console.log('Number ' + i);
    i++;
} while (i < 10);

// LOOPING THROUGH ARRAY || forEach loop is recommended for looping through an array

const skills = ['web development' , 'html' , 'css3' , 'UI Design' , 'UX Design' , 100 , 'JavaScript'];

for ( let i = 0; i < skills.length; i++ ) {
    console.log(skills[i]);
}

skills.forEach(function(skill) {
    console.log(skill)
}); // For each loop is recommender for looping through array

// MAP
const person = [
    {
        name: 'Al Amin',
        age: 22
    },
    {
        name: 'Rahat Nizam',
        age: 20
    },
    {
        name: 'John Doe',
        age: 35
    },
];

const names = person.map(function(p) {
    return p.name;
});

console.log(names);

// FOR IN LOOP

const user = {
    name: 'amnkhan',
    age: 22,
    profession: 'Web Developer',
};

for( x in user) {
    console.log(`${x} : ${user[x]}`);
}