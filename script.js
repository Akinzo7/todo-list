// Load the todo list from localStorage when the page loads
const savedTodoList = localStorage.getItem('todoList');
const todoList = savedTodoList ? JSON.parse(savedTodoList) : [{
  name:'Learn HTML',
  dueDate:'2025-08-01'
}, {
  name:'Learn CSS',
  dueDate:'2025-08-02'
}];

renderTodoList();

function renderTodoList() {

    let todoListHtml = '';
  todoList.forEach((todoObject, index) => {
    const name = todoObject.name;
    const dueDate = todoObject.dueDate;
    const html = `
    <div>${name}</div>
     <div>${dueDate}</div>
    <button onclick="
    todoList.splice(${index}, 1);
    saveTodoList();
    renderTodoList();
    "
    class="delete-todo-button" >Delete</button>
    `;
    todoListHtml += html;
  });

  document.querySelector('.js-todo-list').innerHTML = todoListHtml;
}
function addTodo() {
  const inputElement =  document.querySelector('.js-name-input');
  const name = inputElement.value;

  const dueDateInputElement = document.querySelector('.js-due-date-input');
  const dueDate = dueDateInputElement.value;

  todoList.push({
    name,
    dueDate
  });

  saveTodoList();
  inputElement.value ='';

  renderTodoList();
}

 const currentYear = document.getElementById('currentYear').textContent = new Date().getFullYear();

 

function saveTodoList() {
  localStorage.setItem('todoList', JSON.stringify(todoList));
}