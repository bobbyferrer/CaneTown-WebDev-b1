// Set local storage item

// localStorage.setItem('name', 'John');
// localStorage.setItem('age', '30');

// // set session storage item
// sessionStorage.setItem('name', 'Beth');

// // Remove from storage
// // localStorage.removeItem('tasks');

// Get from local storage
// const name = localStorage.getItem('name');
// const age = localStorage.getItem('age');

// console.log(name, age);


// // clear local storage
// localStorage.clear();

document.querySelector('form').addEventListener('submit', function(e){
 const task = document.getElementById('task').value;
 console.log(task);

 let tasks;

 if(localStorage.getItem('tasks') === null) {
   tasks = [];
 } else{
   tasks = JSON.parse(localStorage.getItem('tasks'));
 }

 tasks.push(task);

 localStorage.setItem('tasks', JSON.stringify(tasks));

 alert('Task saved');
 tasks.forEach(function(task) {
  console.log(task);
 });

  e.preventDefault();
});