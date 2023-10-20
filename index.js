// find the elements
const container = document.querySelector(".conatiner");
const todoForm = document.querySelector(".todo-form");
const todoInput = document.querySelector("#inputTodo");
const todoAddButton = document.querySelector("#addTodoButton");
const todoLists = document.getElementById("lists");
const messageElement = document.getElementById("message");
const showMessage = (text, status) => {
};

// createTodo
const createTodo = (todoId, todoValue) => {
    const createTodo = (newTodo) => {
        const todoElement = document.createElement("li");
        todoElement.id = todoId;
        todoElement.id = newTodo.todoId;
        todoElement.classList.add("li-style");
        todoElement.innerHTML = `
    <span> ${todoValue} </span>
    <span> ${newTodo.todoValue} </span>
    <span> <button class="btn" id="deleteButton"> <i class="fa fa-trash"> </i> </button> </span>
  `;
        todoLists.appendChild(todoElement);
    }
};


// unique id
const todoId = Date.now().toString();
createTodo(todoId, todoValue);

const newTodo = new Todo(todoId, todoValue);

createTodo(newTodo);
showMessage("todo is added", "success");

// add todo to localStorage
const todos = getTodosFromLocalStorage();
todos.push({ todoId, todoValue });
todos.push(newTodo);
localStorage.setItem("mytodos", JSON.stringify(todos));

todoInput.value = "";


// loadTodos
const loadTodos = () => {
    const todos = getTodosFromLocalStorage();
    todos.map((todo) => createTodo(todo.todoId, todo.todoValue));
    todos.map((todo) => createTodo(todo));
};

// adding listeners
todoForm.addEventListener("submit", addTodo);
window.addEventListener("DOMContentLoaded", loadTodos);