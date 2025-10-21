//class Todo {
//    constructor(data, selector, handleCheck, handleDelete, handleTodo) {
//        this._data = data;
//        this._templateElement = document.querySelector(selector);
//        if (!this._templateElement) {
//            throw new Error(`No element found with Selector: ${selector}`);
//        }
//        this._handleCheck = handleCheck;
//        this._handleDelete = handleDelete;
//        this._handleTodo = handleTodo;
//    }
//
//    _setEventListeners() {
//        this._todoDeleteBtn = this._todoElement.querySelector(".todo__delete-btn");
//        
//        // ✅ Handle checkbox change
//        this._todoCheckboxEl.addEventListener("change", () => {
//            this._data.completed = this._todoCheckboxEl.checked;
//            this._handleCheck(this._data.completed);
//
//            // 🔄 Save updated state immediately
//            this._updateLocalStorage();
//        });
//
//        // ✅ Handle delete click
//        this._todoDeleteBtn.addEventListener("click", () => {
//            this._todoElement.remove();
//            this._handleDelete(this._data.completed);
//
//            // 🧹 Update or clear localStorage after deletion
//            this._updateLocalStorage();
//        });
//    }
//
//    _setDateEl() {
//        this._todoDate = this._todoElement.querySelector(".todo__date");
//        this._dueDate = new Date(this._data.date);
//        if (!isNaN(this._dueDate)) {
//            this._todoDate.textContent = `Due: ${this._dueDate.toLocaleString("en-US", {
//                year: "numeric",
//                month: "short",
//                day: "numeric",
//            })}`;
//        }
//    }
//
//    _generateCheckboxEl() {
//        this._todoCheckboxEl = this._todoElement.querySelector(".todo__completed");
//        this._todoLabel = this._todoElement.querySelector(".todo__label");
//        this._todoCheckboxEl.checked = this._data.completed; // ✅ small fix: should match “completed” key
//        this._todoCheckboxEl.id = `todo-${this._data.id}`;
//        this._todoLabel.setAttribute("for", `todo-${this._data.id}`);
//    }
//
//    // 🧠 Helper function to keep localStorage in sync
//    _updateLocalStorage() {
//        const todosList = document.querySelectorAll(".todo");
//        const todos = Array.from(todosList).map(todoEl => ({
//            name: todoEl.querySelector(".todo__name").textContent,
//            date: todoEl.querySelector(".todo__date").textContent,
//            completed: todoEl.querySelector(".todo__completed").checked
//        }));
//
//        if (todos.length === 0) {
//            localStorage.removeItem("todos");
//        } else {
//            localStorage.setItem("todos", JSON.stringify(todos));
//        }
//    }
//
//    getView() {
//        this._todoElement = this._templateElement.content
//            .querySelector(".todo")
//            .cloneNode(true);
//
//        this._todoNameEl = this._todoElement.querySelector(".todo__name");
//        this._todoNameEl.textContent = this._data.name;
//        
//        this._generateCheckboxEl();
//        this._setDateEl();
//        this._setEventListeners();
//
//        return this._todoElement;
//    }
//}
//
//export default Todo;
