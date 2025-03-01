// Select the necessary DOM elements
const taskInput = document.querySelector('.taskInput');
const addTaskBtn = document.getElementById('addTaskBtn'); 
const taskList = document.getElementById('taskList');

// Function to add a new task
function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === '') {
        alert('Please enter a task.');
        return;
    }

    // Create a new task list item
    const li = document.createElement('li');
    li.textContent = taskText; 

    // Create the Complete button
    const completeBtn = document.createElement('button');
    completeBtn.textContent = 'Complete';
    completeBtn.className = 'completeBtn';
    completeBtn.addEventListener('click', () => {
        li.classList.toggle('completed');
    });

    // Create the Delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.className = 'deleteBtn'; 
    deleteBtn.addEventListener('click', () => {
        taskList.removeChild(li); 
    });

    // Append buttons to the task item
    li.appendChild(completeBtn);
    li.appendChild(deleteBtn);

    // Add the task item to the task list
    taskList.appendChild(li);

    // Clear the input field for the next task
    taskInput.value = '';
}

// Attach the addTask function to the button click event
addTaskBtn.addEventListener('click', addTask);

// (Optional) Allow adding tasks by pressing "Enter"
taskInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        addTask();
    }
});
