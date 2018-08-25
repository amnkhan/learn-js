// getElementsByClassName
// let items = document.getElementsByClassName('collection-item');

// console.log(items)
// console.log(items[3])
// items[0].style.color = 'red'
// items[0].textContent = "Hello World"

// const listItems = document.querySelector('ul').getElementsByClassName('collection-item')

// console.log(listItems)

// getElementsByTagName
let list = document.getElementsByTagName('li');

console.log(list)
// console.log(items[3])
list[0].style.color = 'red'
list[3].textContent = "Hello World"

// convert html collection into an array
list = Array.from(list);

list.reverse();

list.forEach((li) => {
    console.log(li);
})

// console.log(list)