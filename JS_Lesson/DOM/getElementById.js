// document.getElementById();
// console.log(document.getElementById('task-title'));

// Get thing from the elememt
// console.log(document.getElementById('task-title').id);
// console.log(document.getElementById('task-title').className);

const taskTitle = document.getElementById('task-title');

// Change styling
taskTitle.style.background = 'cyan';
taskTitle.style.color = 'grey';
taskTitle.style.padding = '5px';

// Change content
taskTitle.textContent = 'Task List';
taskTitle.innerText = 'My Tasks';
taskTitle.innerHTML = '<span style="color: red">Task List</span>';

// document.querySelector();
console.log(document.querySelector('#task-title'));
console.log(document.querySelector('.card-title'));
console.log(document.querySelector('h5'));

document.querySelector('li').style.color = 'red';
document.querySelector('ul li').style.color = 'blue';

document.querySelector('li:last-child').style.color = 'red';
document.querySelector('li:nth-child(3)').style.color = 'green';
document.querySelector('li:nth-child(4)').textContent = 'Hello world';
document.querySelector('li:nth-child(odd)').style.background = 'lime';
document.querySelector('li:nth-child(even)').style.background = 'yellow';
