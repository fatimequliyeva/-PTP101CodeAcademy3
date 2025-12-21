const input = document.querySelector(".add-area input");
const addBtn = document.querySelector(".add");
const todoList = document.querySelector(".todo-list");
const infoSpan = document.querySelector(".info span");

const filterAll = document.querySelector(".blue");
const filterCompleted = document.querySelector(".green");
const filterPending = document.querySelector(".yellow");
const clearAllBtn = document.querySelector(".red");

let todos = JSON.parse(localStorage.getItem("todos")) || [];


function getDateTime() {
  return new Date().toLocaleString();
}


function saveTodos() {
  localStorage.setItem("todos", JSON.stringify(todos));
}


function renderTodos(filter = "all") {
  todoList.innerHTML = "";

  let filteredTodos = todos;

  if (filter === "completed") {
    filteredTodos = todos.filter(t => t.completed);
  } else if (filter === "pending") {
    filteredTodos = todos.filter(t => !t.completed);
  }

  filteredTodos.forEach((todo, index) => {
    const div = document.createElement("div");
    div.className = "todo-item";

    div.innerHTML = `
      <div class="left">
        <input type="checkbox" class="check" ${todo.completed ? "checked" : ""}>
        <span style="text-decoration:${todo.completed ? "line-through" : "none"}">
          ${todo.text}, ${todo.date}
        </span>
      </div>

      <div class="actions">
        <button class="icon edit"><i class='bx  bx-note-book'></i> Notu edit ele</button>
        <button class="icon delete"><i class='bx  bx-trash'></i> notu sil</button>
      </div>
    `;

    div.dataset.index = index;
    todoList.appendChild(div);
  });

  updateCount();
}


addBtn.addEventListener("click", () => {
  const text = input.value.trim();
  if (text === "") return alert("Todo yaz");

  todos.push({
    text: text,
    date: getDateTime(),
    completed: false
  });

  input.value = "";
  saveTodos();
  renderTodos();
});


todoList.addEventListener("click", (e) => {
  const item = e.target.closest(".todo-item");
  if (!item) return;

  const index = item.dataset.index;


  if (e.target.classList.contains("delete")) {
    todos.splice(index, 1);
  }


  if (e.target.classList.contains("edit")) {
    const newText = prompt("Edit todo:", todos[index].text);
    if (newText && newText.trim() !== "") {
      todos[index].text = newText;
      todos[index].date = getDateTime();
    }
  }

  saveTodos();
  renderTodos();
});


todoList.addEventListener("change", (e) => {
  if (e.target.classList.contains("check")) {
    const index = e.target.closest(".todo-item").dataset.index;
    todos[index].completed = e.target.checked;
    saveTodos();
    renderTodos();
  }
});


filterAll.addEventListener("click", () => renderTodos("all"));
filterCompleted.addEventListener("click", () => renderTodos("completed"));
filterPending.addEventListener("click", () => renderTodos("pending"));

clearAllBtn.addEventListener("click", () => {
  if (confirm("Hamısını silmək istəyirsən?")) {
    todos = [];
    saveTodos();
    renderTodos();
  }
});


function updateCount() {
  infoSpan.textContent = todos.filter(t => !t.completed).length;
}


renderTodos();
