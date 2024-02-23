// app.js

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');

    if (taskInput.value.trim() !== '') {
        const taskItem = document.createElement('li');
        taskItem.innerHTML = `
            <span>${taskInput.value}</span>
            <button onclick="removeTask(this)">Remove</button>
        `;
        taskList.appendChild(taskItem);
        taskInput.value = '';
    }
}

function removeTask(button) {
    const taskList = document.getElementById('taskList');
    const taskItem = button.parentNode;
    taskList.removeChild(taskItem);
}
