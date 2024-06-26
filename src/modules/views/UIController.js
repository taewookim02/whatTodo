import { Navbar } from "./Components/Navbar";
import { Modal } from "./Components/Modal";
import { ProjectController } from "../controllers/ProjectController";
import { Project } from "../models/Project";
import { TodoController } from "../controllers/TodoController";
import { Todo } from "../models/Todo";
import { TodoModal } from "./Components/TodoModal";
import { TodoComponent } from "./Components/Todo";
import { TodoDetailModal } from "./Components/TodoDetailModal";
import { Helper } from "../utils/Helper";
import { DeleteConfirmModal } from "./Components/DeleteConfirmModal";

export class UIController {
  static isTodoModalOpen = false;
  static isProjectModalOpen = false;
  static CURRENT_PROJECT_ID = "";
  static GENERAL_LIST = ["today", "scheduled", "all", "priority"];
  static IS_COMPLETED_OPEN = false;
  static CURRENT_DELETE_PROJECT_ID = "";
  static IS_MOBILE_AND_TODO_OPEN = false; // .header, .container grid-tem-col = 1fr;
  static MEDIAQUERY_BREAKPOINT = 667;
  static IS_TODO_OPEN;

  constructor() {
    this.Navbar = new Navbar();
    this.ProjectController = new ProjectController();
    this.TodoController = new TodoController();
    this.Todo = new Todo();
    this.TodoModal = new TodoModal();
    this.TodoDetailModal = new TodoDetailModal();
    this.TodoComponent = new TodoComponent();
    this.Modal = new Modal();
  }

  init(projectsArr) {
    this.Navbar.renderComponent(projectsArr);
    this.initProjectModal();
    this.initTodoModal();
    this.initTodoDetailModal();
    this.initHamburgerMenu();
    this.initFirstDivClick();
    document.addEventListener("DOMContentLoaded", (e) => {
      this.initContentClickBehavior();
      this.initHeaderClickBehavior();
      DeleteConfirmModal.renderComponent();
      this.initOverlayClickBehavior();
      this.initScrollBehavior();
      this.listenForDocumentSubmit();
      UIController.IS_COMPLETED_OPEN = false;
      this.listenForViewportResize();
    });
  }

  // initNavBarAndTodo = (projectsArr) => {
  //   this.Navbar.renderComponent(projectsArr);
  // };

  // TODO: add logo for mobile like initHamburgerMenu

  listenForViewportResize = () => {
    window.addEventListener("resize", () => {
      if (window.innerWidth <= UIController.MEDIAQUERY_BREAKPOINT) {
        // mobile view
        this.displayResponsiveButtons("mobile");
      } else {
        // desktop view
        this.displayResponsiveButtons("desktop");
      }
    });
  };

  displayResponsiveButtons = (device) => {
    const prjBtn = document.querySelector(".add-project-btn");
    const logo = document.querySelector(".nav__logo-div--absolute");
    const todoBtnAbsolute = document.querySelector(".add-todo-btn__absolute");
    const headerEl = document.querySelector(".header");
    const isProjectWindow = headerEl.classList.contains("active");
    switch (device) {
      case "mobile":
        // header has active == project window
        headerEl.classList.add("active");
        if (isProjectWindow) {
          // current window == project
          // show project btn
          // hide todo btn
          logo.classList.remove("logo-active");
          prjBtn.classList.remove("hidden");
          todoBtnAbsolute.classList.add("hidden");
        } else {
          // current window == todo
          logo.classList.add("logo-active");
          prjBtn.classList.add("hidden");
          todoBtnAbsolute.classList.remove("hidden");
        }
        break;
      case "desktop":
        todoBtnAbsolute.classList.add("hidden");
        prjBtn.classList.remove("hidden");
        break;
    }
  };

  initHamburgerMenu = () => {
    // Hamburger button in body
    const bodyElem = document.querySelector("body");

    const hamburgerBtn = document.createElement("button");
    hamburgerBtn.classList.add("hamburger-menu-btn");
    hamburgerBtn.textContent = "\u2630";
    bodyElem.appendChild(hamburgerBtn);

    // LOGO
    const logoDiv = document.createElement("div");
    logoDiv.classList.add("nav__logo-div--absolute");
    logoDiv.classList.add("logo-active");
    // const logoSvg = require("svg-inline-loader?classPrefix!../../../assets/whatTodo.svg");
    const logoSvg = require("!svg-inline-loader?classPrefix!../../assets/whatTodoQuestion.svg");
    logoDiv.innerHTML = logoSvg;
    bodyElem.appendChild(logoDiv);

    const hamburgerElem = document.querySelector(".hamburger-menu-btn");
    // add event listender
    hamburgerElem.addEventListener("click", (e) =>
      UIController.handleHamburgerMenuClick(e)
    );

    // TODO NEW TODO BTN
  };

  /* Todo.handleTodoAddClick(e)
  handleTodoAddClick(e) {
    this.TodoModal.showModal();
    const todoNameElement = document.querySelector("#todoName");
    todoNameElement.scrollIntoView();
    todoNameElement.focus();
    this.ProjectModal.closeModal();
  }
  */

  listenForDocumentSubmit = (e) => {
    const bodyElement = document.querySelector("body");

    bodyElement.addEventListener("submit", (e) => {
      // e.preventDefault();
      // rerender navbar on document submit
      let projectsArr = this.ProjectController.getProjects();
      this.Navbar.renderComponent(projectsArr);
      if (this.checkMobileAndProjectView()) {
        this.toggleAbsButton();
      } else if (this.checkIfWidthIsDesktop()) {
        this.toggleAbsButton();
      }
    });
  };

  checkIfWidthIsDesktop = () => {
    return window.innerWidth > UIController.MEDIAQUERY_BREAKPOINT;
  };

  checkMobileAndProjectView = () => {
    return (
      window.innerWidth <= UIController.MEDIAQUERY_BREAKPOINT &&
      document.querySelector(".active") !== null
    );
  };

  toggleAbsButton = () => {
    const prj = document.querySelector(".add-project-btn");
    const todo = document.querySelector(".add-todo-btn__absolute");
    prj.classList.toggle("hidden");
    todo.classList.toggle("hidden");
  };

  initScrollBehavior() {
    // this is for showing completed todos
    let isAtTop = true;
    let throttleTimeout = null;

    document.addEventListener("scroll", (e) => {
      if (throttleTimeout) {
        return;
      }

      throttleTimeout = setTimeout(() => {
        throttleTimeout = null; // reset timeout
        if (window.scrollY === 0) {
          isAtTop = true;
        } else {
          isAtTop = false;
        }
      }, 100); // throttle period: 100 ms
    });

    document.addEventListener("wheel", (e) => {
      if (throttleTimeout) return;

      throttleTimeout = setTimeout(() => {
        throttleTimeout = null; // reset timeout
        if (isAtTop && e.deltaY < 0) {
          if (
            UIController.GENERAL_LIST.includes(UIController.CURRENT_PROJECT_ID)
          ) {
            return; // if in general menu, return.
          }

          const completedContainer = document.querySelector(
            ".completed-container"
          );
          completedContainer.classList.remove("hidden");
          UIController.IS_COMPLETED_OPEN = true;
        }
      }, 100); // throttle period: 100 ms
    });
  }

  initTodoDetailModal() {
    const todoDetailModal = new TodoDetailModal(
      this.todoDetailCallback.bind(this)
    );
    todoDetailModal.renderComponent();
  }

  initProjectModal() {
    // render modal
    const modalComponent = new Modal(this.projectModalCallback.bind(this));
    modalComponent.renderComponent();
  }

  initOverlayClickBehavior() {
    const overlay = document.querySelector(".overlay");
    const detailModalContent = document.querySelector(".detail-todo-content");
    const closeBtn = document.querySelector(".close");
    overlay.addEventListener("click", (e) => {
      if (
        !detailModalContent.contains(e.target) ||
        closeBtn.contains(e.target)
      ) {
        this.closeTodoDetailModal();
      }
    });

    const confirmModal = document.querySelector(".delete-confirm-modal");
    const confirmModalContent = document.querySelector(
      ".delete-confirm-modal-content"
    );
    const confirmCloseBtn = document.querySelector(".confirm-close");
    confirmModal.addEventListener("click", (e) => {
      if (
        !confirmModalContent.contains(e.target) ||
        confirmCloseBtn.contains(e.target)
      ) {
        this.closeConfirmModal();
      }
    });
  }

  closeConfirmModal() {
    DeleteConfirmModal.closeModal();
  }

  closeTodoDetailModal() {
    this.TodoDetailModal.closeModal();
  }

  initHeaderClickBehavior() {
    const headerElement = document.querySelector(".header");
    // const navContainer = document.querySelector(".nav");
    const navItemElements = document.querySelectorAll(".nav__project");

    const projectFormContainer = document.querySelector(
      ".project-form-container"
    );

    // modal
    headerElement.addEventListener("click", (e) => {
      let isClickInsideNavItem = Array.from(navItemElements).some((element) =>
        element.contains(e.target)
      );
      let targetElement = e.target;
      let targetMenuClassName = "";
      let navMainItem = targetElement.closest(".nav__main--item");

      // filter for 4 main menu items
      if (navMainItem) {
        isClickInsideNavItem = !isClickInsideNavItem;
        targetMenuClassName = navMainItem.classList[1];
        // render corresponding todos for general menu
        let matchingArr = [];
        if (targetMenuClassName) {
          this.closeTodoModal();
          this.closeProjectModal();

          switch (targetMenuClassName) {
            case "item-today":
              // render item-today todos
              UIController.CURRENT_PROJECT_ID = "today";
              matchingArr = this.TodoController.getTodayTodoItems();
              this.TodoComponent.renderAfterWhere(matchingArr);
              break;
            case "item-scheduled":
              // render item-scheduled todos
              UIController.CURRENT_PROJECT_ID = "scheduled";
              matchingArr = this.TodoController.getScheduledTodoItems();
              this.TodoComponent.renderAfterWhere(matchingArr);
              break;
            case "item-all":
              // render item-all todos
              UIController.CURRENT_PROJECT_ID = "all";
              matchingArr = this.TodoController.getAllTodoItems();
              this.TodoComponent.renderAfterWhere(matchingArr);
              break;
            case "item-priority":
              // render item-priority todos
              UIController.CURRENT_PROJECT_ID = "priority";
              matchingArr = this.TodoController.getUrgentTodoItems();
              this.TodoComponent.renderAfterWhere(matchingArr);
              break;
            default:
              break;
          }
        }
        // FIXME: is this necessary?
        UIController.handleHamburgerMenuClick();
      }

      let isClickInsideProjectForm = e.target.closest(
        ".project-form-container"
      );

      let isClickInsideLogo = e.target.closest(".nav__logo-div");

      let isClickInsideGeneralNav = e.target.closest(".item-container");

      const isInsideNav =
        e.target.classList.contains("nav__project") ||
        e.target.classList.contains("nav__project--text");

      if (
        // dont' open
        !isClickInsideNavItem &&
        !isClickInsideProjectForm &&
        !isInsideNav &&
        !isClickInsideLogo &&
        !isClickInsideGeneralNav
      ) {
        if (!UIController.isProjectModalOpen) {
          this.showProjectModal();
          const projectNameElement = document.querySelector("#projectName");
          projectNameElement.focus();
        } else {
          this.closeProjectModal();
        }
      }
    });
  }

  initContentClickBehavior() {
    const contentElement = document.querySelector("#content");
    const todosContainer = document.querySelector(".todos-container");
    const todoFormContainer = document.querySelector(".todo-form-container");
    const generalProjectId = ["scheduled", "today", "all", "priority"];
    contentElement.addEventListener("click", (e) => {
      if (
        !todosContainer.contains(e.target) &&
        !todoFormContainer.contains(e.target)
      ) {
        if (!UIController.isTodoModalOpen) {
          this.showTodoModal();
          const todoNameElement = document.querySelector("#todoName");
          todoNameElement.focus();
        } else {
          this.closeTodoModal();
        }
      }
    });
  }

  static handleHamburgerMenuClick = (e) => {
    // get header
    const headerElem = document.querySelector(".header");
    headerElem.classList.toggle("active");
    const headerLogo = document.querySelector(".nav__logo-div--absolute");
    headerLogo.classList.toggle("logo-active");

    UIController.IS_MOBILE_AND_TODO_OPEN =
      !headerElem.classList.contains("active");

    // manipulate bottom button

    const addPrjBtn = document.querySelector(".add-project-btn");
    const addTodoBtn = document.querySelector(".add-todo-btn__absolute");

    addPrjBtn.classList.toggle("hidden");
    addTodoBtn.classList.toggle("hidden");
  };

  closeTodoModal() {
    this.TodoModal.closeModal();
  }
  closeProjectModal() {
    this.Modal.closeModal();
  }

  showTodoModal() {
    this.TodoModal.showModal();
    this.Modal.closeModal();
  }

  showProjectModal() {
    this.Modal.showModal();
    this.TodoModal.closeModal();
  }
  initTodoModal() {
    // render todoModal
    const todoModal = new TodoModal(this.todoModalCallback.bind(this));

    todoModal.renderComponent();
  }

  initFirstDivClick() {
    document.addEventListener("DOMContentLoaded", (e) => {
      const myFirstNavDiv = document.querySelector(".nav__project");
      if (myFirstNavDiv) {
        myFirstNavDiv.click();
      }
    });
  }

  todoDetailCallback(
    todoId,
    todoName,
    projId,
    description,
    dueDate,
    prio,
    isFinished
  ) {
    // TODO: add checks for UIController.CURRENT_PROJECT_ID
    if (UIController.GENERAL_LIST.includes(UIController.CURRENT_PROJECT_ID)) {
      // if general menu
      let generalTodosArr;

      // Edit the todo value first
      this.TodoController.editTodoWithValues(
        todoId,
        todoName,
        projId,
        description,
        new Date(dueDate),
        prio,
        isFinished
      );
      // switch to render diff todo items
      switch (UIController.CURRENT_PROJECT_ID) {
        case "today":
          generalTodosArr = this.TodoController.getTodayTodoItems();

          break;
        case "scheduled":
          generalTodosArr = this.TodoController.getScheduledTodoItems();

          break;
        case "all":
          generalTodosArr = this.TodoController.getAllTodoItems();

          break;
        case "priority":
          generalTodosArr = this.TodoController.getUrgentTodoItems();

          break;
      }
      this.TodoComponent.renderAfterWhere(generalTodosArr);

      return;
    }

    // IF IT IS JUST NORMAL PROJECT WITH PROJECT ID
    // update localStorage
    this.TodoController.editTodoWithValues(
      todoId,
      todoName,
      projId,
      description,
      // new Date(dueDate),
      Helper.formatDateDashToCommasReturnNewDate(dueDate),
      prio,
      isFinished
    );

    const newTodoArr =
      this.TodoController.getUncompletedTodosWithProjectId(projId);

    this.TodoComponent.renderComponent(newTodoArr);
    // }
  }

  projectModalCallback(projectId, projectName) {
    if (projectId === "") {
      const newProject = new Project(projectName);
      this.ProjectController.addProject(newProject);

      // rerender navbar
      const newProjectsArr = this.ProjectController.getProjects();

      this.Navbar.renderComponent(newProjectsArr);
    } else {
      this.ProjectController.editProject(projectId, projectName);

      // rerender navbar
      const newProjectsArr = this.ProjectController.getProjects();
      this.Navbar.renderComponent(newProjectsArr);
    }
  }

  todoModalCallback(todoId, todoName) {
    if (UIController.GENERAL_LIST.includes(UIController.CURRENT_PROJECT_ID)) {
      const projectId = document.querySelector("#todo-select-projectId").value;
      const newTodo = new Todo(todoName, projectId);

      let generalTodosArr;

      switch (UIController.CURRENT_PROJECT_ID) {
        case "all":
          this.TodoController.addTodo(newTodo);
          generalTodosArr = this.TodoController.getAllTodoItems();
          break;
        case "priority":
          const selectedPriorityVal = document.querySelector(
            "#todo-select-priority"
          ).value;
          newTodo.setPriority(selectedPriorityVal);
          this.TodoController.addTodo(newTodo);
          generalTodosArr = this.TodoController.getUrgentTodoItems();
          break;
        case "today":
          newTodo.setDueDate(new Date());
          this.TodoController.addTodo(newTodo);

          generalTodosArr = this.TodoController.getTodayTodoItems();
          break;
        case "scheduled":
          // newTodo.setDueDate()
          const generalDateVal =
            document.querySelector("#todo-general-date").value;
          const formattedDate =
            Helper.formatDateDashToCommasReturnNewDate(generalDateVal);

          newTodo.setDueDate(formattedDate);
          this.TodoController.addTodo(newTodo);

          generalTodosArr = this.TodoController.getScheduledTodoItems();
          break;
      }
      this.TodoComponent.renderAfterWhere(generalTodosArr);

      // return and not proceed with the code below
      return;
    }

    const projectId = document.querySelector("#todo-projectId").value;
    if (todoId === "") {
      // create new todo
      const newTodo = new Todo(todoName, projectId);
      this.TodoController.addTodo(newTodo);

      // rerender todos
      const newTodoArr =
        this.TodoController.getUncompletedTodosWithProjectId(projectId);
      // TODO: here?

      this.TodoComponent.renderComponent(newTodoArr);
    } else {
      // FIXME: this is legacy code, todoname edit is a removed feature
      // edit existing todo name only
      this.TodoController.editTodoName(todoId, todoName);

      // rerender todos
      const newTodoArr =
        this.TodoController.getUncompletedTodosWithProjectId(projectId);
      // TODO: here?

      this.TodoComponent.renderComponent(newTodoArr);
    }
  }
}
