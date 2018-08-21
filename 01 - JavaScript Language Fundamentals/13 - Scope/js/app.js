// Global Scope || Let and const have a block level scope and var has function scope
var a = 1;
let b = 2;
const c =3;

// Function Scope
function fnScope() {
    var a = 4;
    let b = 5;
    const c = 6;
    console.log('Local Scope:', a,b,c)
}

fnScope();

// Block Scope
if(true) {
    var a = 4;
    let b = 5;
    const c = 6;
    console.log('Block Scope:', a, b, c)
} // Avoid Using Var || It works very weird and it changes by local scope

console.log('Global Scope:', a, b, c)