import { Component } from "./Component";
import { Button } from "./Button";
import { Modal } from "./Modal";
import { TodoModal } from "./TodoModal";
import { TodoController } from "../../controllers/TodoController";
import { TodoDetailModal } from "./TodoDetailModal";
export class TodoComponent extends Component {
  constructor() {
    super();
    this.Modal = new Modal();
    this.TodoModal = new TodoModal();
    this.TodoController = new TodoController();
    this.TodoDetailModal = new TodoDetailModal();
    this.ProjectModal = new Modal();
  }

  renderComponent(todosArr) {
    const content = document.querySelector("#content");
    // content.innerHTML = "";

    let todosContainer = document.querySelector("#todos-container");

    if (!todosContainer) {
      todosContainer = document.createElement("div");
      todosContainer.id = "todos-container";
      todosContainer.classList.add("todos-container");
      content.insertBefore(todosContainer, content.firstChild);
    } else {
      todosContainer.innerHTML = "";
    }

    // todosContainer.classList.add("todos-container");

    todosArr.forEach((todo) => {
      const todoContainer = document.createElement("div");
      todoContainer.classList.add("todo-container");
      todoContainer.setAttribute("data-id", todo.id);
      todoContainer.setAttribute("data-projectId", todo.projectId);

      const todoName = document.createElement("p");
      todoName.textContent = todo.name;

      const todoEditButton = new Button(
        "edit",
        (e) => this.handleTodoEditClick(e),
        todo.id
      ).renderComponent();

      // button close
      const todoCloseButton = new Button(
        "x",
        () => this.handleTodoCloseClick(todo.id),
        todo.id
      ).renderComponent();

      const todoButtonsDiv = document.createElement("div");
      todoButtonsDiv.appendChild(todoEditButton);
      todoButtonsDiv.appendChild(todoCloseButton);

      todoContainer.appendChild(todoName);
      todoContainer.appendChild(todoButtonsDiv);
      todosContainer.appendChild(todoContainer);

      todoContainer.addEventListener("click", (e) => {
        this.handleTodoElementClick(e);
      });
    });

    if (!document.querySelector("#add-todo-btn")) {
      const addTodoButton = new Button("New Todo +", (e) =>
        this.handleTodoAddClick(e)
      ).renderComponent();
      addTodoButton.id = "add-todo-btn";
      // content.appendChild(addTodoButton);
      let todoContainerElement = document.querySelector(".todo-form-container");
      content.insertBefore(addTodoButton, todoContainerElement);
    }
  }

  handleTodoElementClick(e) {
    const todoId = e.target.getAttribute("data-id");

    const todoFromStorage = this.TodoController.getSingleTodo(todoId);

    // Populate the input fields for TodoDetailModal
    const nameInput = document.querySelector("#todoDetailName");
    nameInput.value = todoFromStorage.name;
    const idInput = document.querySelector("#todoDetailId");
    idInput.value = todoFromStorage.id;

    const projId = document.querySelector("#todoDetailProjId");
    projId.value = todoFromStorage.projectId;

    const dueDateInput = document.querySelector("#todoDetailDueDate");
    dueDateInput.value = todoFromStorage.dueDate;

    const descriptionInput = document.querySelector("#todoDetailDesc");
    descriptionInput.value = todoFromStorage.description ?? "";

    const prioInputNodes = document.querySelectorAll(
      'input[name="todoDetailPrio"]'
    );
    this.setCheckedPriority(prioInputNodes, todoFromStorage.priority);

    const isFinishedInput = document.querySelector("#todoDetailIsFinished");
    isFinishedInput.checked = todoFromStorage.isFinished;

    this.TodoDetailModal.showModal();
    this.TodoModal.closeModal();
    this.ProjectModal.closeModal();
  }

  setCheckedPriority(prioNodes, storedPriority) {
    prioNodes.forEach((node) => {
      node.checked = node.value === storedPriority;
    });
  }

  handleTodoAddClick(e) {
    this.TodoModal.showModal();
  }

  handleTodoEditClick(e) {
    const todoId = e.target.getAttribute("data-id");

    const hiddenInput = document.querySelector("#todoId"); //
    const formInput = document.querySelector("#todoName");
    hiddenInput.value = todoId;
    const selectedTodoName = this.TodoController.getSingleTodo(todoId).name;

    formInput.value = selectedTodoName;
    this.TodoModal.showModal();
    formInput.focus();
  }

  handleTodoCloseClick(todoId) {
    try {
      this.TodoController.removeTodoById(todoId);
      document.querySelector(`[data-id="${todoId}"]`).remove();
    } catch (error) {
      console.log(error);
    }
  }
}
