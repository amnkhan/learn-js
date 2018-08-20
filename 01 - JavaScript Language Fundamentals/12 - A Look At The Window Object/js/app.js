// WINDOW METHODS / OBJECTS / PROPERTIES

// Alert
alert('Hello');

// Prompt
const input = prompt();
alert(input)

// Confirms
if( confirm('Are you sure' ) ) {
    console.log('YES');
} else {
    console.log('NO');
}

let val;

val = window.outerHeight; // Outer Height
val = window.outerWidth; // Outer Width
val = window.innerHeight; // Inner Height
val = window.innerWidth; // Inner Width
val = window.scrollY; // Vertical scroll point
val = window.scrollX; // Horizontal scroll point

// Locatio Object
val = window.location;
val = window.location.hostname;
val = window.location.port;
val = window.location.href;

// History Object
// window.history.go(-3);
val = window.history.length;

// Navigator Object
val = window.navigator;
val = window.navigator.appName;
val = window.navigator.appVersion;
val = window.navigator.platform;


console.log(val);