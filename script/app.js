const test = document.getElementById('test');
test.addEventListener('click', ()=>{
    test.style.color = 'red';
})

const incompleteArea = document.getElementById('incomplete-area');
const completeArea = document.getElementById('complete-area'); 
let taskAddBtn = document.getElementById('task-add-btn');

let form = document.querySelector('form');
let inputBox = document.getElementById('input-box');
let inCompleteItem = document.querySelector('#incomplete-items');
let completeItem = document.querySelector('#complete-items')

// first step make incomplete task function 
let createTask = (task)=> {
    let listItem = document.createElement('li');
    let checkBox = document.createElement('input')
    let label = document.createElement('label');

    checkBox.type = 'checkbox';
    label.innerText = task;
    listItem.appendChild(checkBox);
    listItem.appendChild(label);
    return listItem;
}

// add task from input form function 
let addTask = (event) =>{
    event.preventDefault();
}