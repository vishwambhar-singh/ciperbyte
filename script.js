// scripts.js
document.addEventListener('DOMContentLoaded', () => {
    const addBtn = document.getElementById('add-btn');
    const todoInput = document.getElementById('todo-input');
    const completedInput = document.getElementById('completed-input');
    const todoList = document.getElementById('todo-list');

    addBtn.addEventListener('click', addTodo);

    function addTodo() {
        const taskText = todoInput.value.trim();
        const isCompleted = completedInput.checked;
        if (taskText === '') return;

        const listItem = document.createElement('li');

        const taskSpan = document.createElement('span');
        taskSpan.textContent = taskText;
        
        const timestampAdded = document.createElement('div');
        timestampAdded.classList.add('timestamp');
        const now = new Date();
        timestampAdded.textContent = `Added: ${now.toLocaleString()}`;

        const timestampCompleted = document.createElement('div');
        timestampCompleted.classList.add('timestamp');
        timestampCompleted.textContent = 'Completed: N/A';
        
        if (isCompleted) {
            listItem.classList.add('completed');
            timestampCompleted.textContent = `Completed: ${now.toLocaleString()}`;
        }

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.classList.add('delete-btn');
        deleteBtn.addEventListener('click', () => {
            listItem.remove();
        });

        listItem.appendChild(taskSpan);
        listItem.appendChild(timestampAdded);
        listItem.appendChild(timestampCompleted);
        listItem.appendChild(deleteBtn);
        
        listItem.addEventListener('click', () => {
            listItem.classList.toggle('completed');
            if (listItem.classList.contains('completed')) {
                timestampCompleted.textContent = `Completed: ${new Date().toLocaleString()}`;
            } else {
                timestampCompleted.textContent = 'Completed: N/A';
            }
        });

        todoList.appendChild(listItem);
        todoInput.value = '';
        completedInput.checked = false;
    }
});
