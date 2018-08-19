const color = 'blue';

// Switches
switch(color) {
    case 'red':
        console.log('color is red');
        break;
    case 'green':
        console.log('Color is green');
        break;
    default:
        console.log('Color is not red or green');
        break;
}

// Finding out day using date object and switches

let day;

switch( new Date().getDay() ) {
    case 0:
        day = 'Sunday';
        break;
    case 1:
        day = 'Monday';
        break;
    case 3:
        day = 'Tuesday';
        break;
    case 4:
        day = 'Wednesday';
        break;
    case 5:
        day = 'Thursday';
        break;
    case 6:
        day = 'Friday';
        break;
    case 7:
        day = 'Saturday';
        break;
}

console.log(day);