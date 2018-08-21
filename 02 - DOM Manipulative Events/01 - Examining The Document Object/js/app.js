let val;

val = document;
val = document.all;
val = document.all[5];
val = document.all.length;
val = document.head;
val = document.body;
val = document.doctype;
val = document.URL;
val = document.domain;
val = document.characterSet;
val = document.scripts;

val = document.forms;
val = document.forms[0];
val = document.forms[0].id;
val = document.forms[0].method;

val = document.links;
val = document.links[2];
val = document.links[2].href;
val = document.links[2].innerHTML;
val = document.links[2].target;
val = document.links[2].className;
val = document.links[2].classList;

val = document.scripts[2].getAttribute('src');

// Looping through HTML collection
let scripts = document.scripts;

let scriptArray = Array.from(scripts);

scriptArray.forEach(function(script){
    console.log(script.getAttribute('src'));
})

console.log(val);