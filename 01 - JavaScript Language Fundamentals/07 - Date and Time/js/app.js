const today = new Date();
let birthday = new Date('10-30-1996 11:20:00');
birthday = new Date('october 30 1996');
birthday = new Date('10/30/1996');

let val;

val = birthday;

// Date Object Functions
val = today.getMonth(); // This method is 0 based
val = today.getDate(); // Get the date
val = today.getDay(); // It prints the day based on number
val = today.getFullYear(); // Get the year
val = today.getHours(); // Get the hour
val = today.getMinutes(); // Get the minutes
val = today.getSeconds(); // Get the seconds
val = today.getMilliseconds(); // Get the Mili seconds
val = today.getTime(); // Get the Time stamp

// Manipulating Date Object
birthday.setMonth(10);
birthday.setDate(19);
birthday.setFullYear(1998);
birthday.setHours(10);
birthday.setMinutes(17);
birthday.setSeconds(29);


console.log(birthday);