const form = document.querySelector('form');
const taskInput = document.querySelector('#task');
const heading = document.querySelector('h5');
const select = document.querySelector('select');

// Clear input
taskInput.value = '';

// form.addEventListener('submit', runEvent);

// Keydown
// taskInput.addEventListener('keydown', runEvent);
// keyup
// taskInput.addEventListener('keyup', runEvent);
// keypress
// taskInput.addEventListener('keypress', runEvent);
// focus
// taskInput.addEventListener('focus', runEvent);
// blur
// taskInput.addEventListener('blur', runEvent);
// cut
// taskInput.addEventListener('cut', runEvent);
// paste
// taskInput.addEventListener('paste', runEvent);
// Input
taskInput.addEventListener('input', runEvent);



function runEvent(e) {
  console.log(`Event Type: ${e.type}`);

  console.log(`${e.target.value}`);

  heading.innerHTML = e.target.value;

  // Get input value
  console.log(taskInput.value);

  e.preventDefault();
}