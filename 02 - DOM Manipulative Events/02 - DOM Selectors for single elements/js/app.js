// getElementByID
const val = document.getElementById('task-title')

// Get things from elements
val.id
val.className

// Change Styling
val.style.background = '#ff5959';
val.style.color = '#fff';
val.style.padding = '10px';

// Change Content
val.textContent = 'Task list'
val.innerHTML = '<span color="#000000">Other text</span>'
val.innerText = 'Task list'

// querySelector
console.log(document.querySelector('#task-title'))
console.log(document.querySelector('.card-title'))
console.log(document.querySelector('h5'))
document.querySelector('li').style.color = 'red'
document.querySelector('ul li').style.color = 'red'
document.querySelector('li:last-child').style.color = 'red'
document.querySelector('li:nth-child(4)').textContent = 'Hello Worlds'
document.querySelector('li:nth-child(even)').style.background = '#ddd'