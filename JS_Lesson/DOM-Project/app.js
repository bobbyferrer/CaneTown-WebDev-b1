// Define UI Vars
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

// Load all event listeners
loadEventListeners();

function loadEventListeners() {
  // Add task event
  form.addEventListener('submit', addTask);
  // Remove Task event
  taskList.addEventListener('click', removeTask);
  // Clear task event
  clearBtn.addEventListener('click', clearTasks);
  // Filter tasks event
  filter.addEventListener('keyup', filterTasks);
}

// Add Task
function addTask(e) {
  // console.log('add task');
  if(taskInput.value === '') {
    alert('Add a Task');
  } else {
    // Create li element
    const li = document.createElement('li');
    // add class
    li.className = 'collection-item';
    // Create text node and append to li
    li.appendChild(document.createTextNode(taskInput.value));
   
    // Create new link element
    const link = document.createElement('a');
    // add class
    link.className = 'delete-item secondary-content';
    // Add icon html
    link.innerHTML = '<i class="fa fa-remove"></i>';
    // append the link to li
    li.appendChild(link);

    // Append li to ul
    taskList.appendChild(li);

    // Clear input
    taskInput.value = '';
    // console.log(li);
  }

  e.preventDefault();
  
}

// Remove Task
function removeTask(e) {
 console.log(e.target);
 if(e.target.parentElement.classList.contains('delete-item')) {
   if(confirm('Are you sure?')) {
    e.target.parentElement.parentElement.remove();
   }
   
 }
} 

// Clear Tasks
function clearTasks() {
  if(confirm('Are you sure?')) {
    taskList.innerHTML = '';
  }
  
}

// Filter Tasks
function filterTasks(e) {
  // console.log(e.target);
  const text = e.target.value.toLowerCase();
  console.log(text);

  document.querySelectorAll('.collection-item').forEach(function(task) {
   const item = task.firstChild.textContent;
   if(item.toLowerCase().indexOf(text) != -1) {
    task.style.display = 'block';
   } else {
     task.style.display = 'none';
   }
  });
}