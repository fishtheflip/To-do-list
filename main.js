let addMessage = document.querySelector('.message');
let addButton = document.querySelector('.add');
let todo = document.querySelector('.todo');

let todoList = [];
addButton.addEventListener('click', function(){

    let todoArr = {
        todo: addMessage.value,
        checked: false,
        important: false
    };
    todoList.push(todoArr);
    displayMessages();
    localStorage.setItem('todo', JSON.stringify(todoList));
});

function displayMessages(){
    let message = '';
    todoList.forEach(function(item, i){
       message += `
       <li>
       <input type='checkbox' id='items_${i}' ${item.checked ? 'checked' : ''}>
       <label for='item_${i}'>${item.todo}</label>
       </li>
       `
       todo.innerHTML = message;
       

    });
}