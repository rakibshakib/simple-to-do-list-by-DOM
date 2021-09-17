const taskField = document.getElementById('input-box');
const addTaskBtn = document.getElementById('task-add-btn');
const incompleteItem = document.getElementById('incomplete-items');
const completeItem = document.getElementById('complete-items');
const removeTask = document.getElementById('delete');

console.log('%c This is To-Do App, developed by its.Rakib!!', 'font-weight: bold; font-size: 20px;color: red')
console.log('%c project idea from youtube', 'font-size: 20px; color: red')
taskField.addEventListener('keyup', (e) => {
    if (e.key == 'Enter') {
        addTaskBtn.click();
    }
})
const createTask = (task) => {
    const taskList = document.createElement('li')
    const checkBox = document.createElement('input');
    const label = document.createElement('label');
    taskList.classList.add('py-2');
    label.innerText = ' ' + task;
    label.classList.add('ml-2')
    checkBox.type = 'checkbox';
    taskList.appendChild(checkBox);
    taskList.appendChild(label);
    return taskList;
}

function deleteCompleteTask() {
    const listItem = this.parentNode;
    let ul = listItem.parentNode;
    ul.removeChild(listItem);
}

const bindInCompleteTask = (task, checkBoxClicked) => {
    const checkBox = task.querySelector('input[type="checkbox"]');
    checkBox.onchange = checkBoxClicked;
}
const bindCompleteTask = (taskItem, buttonClicked) => {
    let deleteButton = taskItem.querySelector('.delete');
    deleteButton.onclick = buttonClicked;
}

const addTask = () => {
    task = taskField.value;
    if (task == '') {
        alert("please add a valid task")
    } else {
        const newTask = createTask(task);
        incompleteItem.appendChild(newTask);
        bindInCompleteTask(newTask, completeTask)
        taskField.value = ''
    }
}

function completeTask() {
    const listItem = this.parentNode;
    let checkBox = listItem.querySelector('input[type="checkbox"]');
    checkBox.remove();
    let deleteBtn = document.createElement('button');
    deleteBtn.innerText = 'Delete';
    deleteBtn.classList.add("border", "ml-3", "py-1", "px-2", "dlt-btn", "rounded-lg", 'delete')
    listItem.appendChild(deleteBtn);
    completeItem.appendChild(listItem);
    bindCompleteTask(listItem, deleteCompleteTask);
}