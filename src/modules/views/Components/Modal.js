import { Component } from "./Component";
import { Button } from "./Button";
import { UIController } from "../UIController";
import { Project } from "../../models/Project";
import { ProjectController } from "../../controllers/ProjectController";
import { Navbar } from "./Navbar";

export class Modal extends Component {
  constructor(projectCallback) {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.ProjectController = new ProjectController();
    this.projectCallback = projectCallback;
  }

  renderComponent(projectId) {
    const projectModal = document.createElement("div");
    projectModal.innerHTML = `
      <div class="modal-content">
        <form id="editProjectForm">
          <label for="projectName">Project Name:</label>
          <div class="project__input-div">
            <input type="text" id="projectName" name="projectName" required>
            <input type="hidden" id="projectId" name="projectId" ${
              projectId ? `data-id="${projectId}"` : ""
            }>
            <button type="submit" class="project__add--btn">${
              projectId ? "Save changes" : "Add"
            }</button>
          </div>
        </form>
      </div>
      `;

    projectModal.classList.add("project-form-container");
    projectModal.classList.add("modal-hidden");
    const closeButton = new Button("x", (e) =>
      this.handleCloseButtonClick(e)
    ).renderComponent();
    closeButton.classList.add("project__modal--close-btn");
    projectModal.querySelector(".modal-content").appendChild(closeButton);

    let navElement = document.querySelector(".nav");

    navElement.appendChild(projectModal);

    document
      .querySelector("#editProjectForm")
      .addEventListener("submit", (e) => this.handleSubmit(e)); // FIXME:
  }

  defaultProjectHandler(projectId, projectName) {
    if (projectId === "") {
      const newProject = new Project(projectName);
      this.ProjectController.addProject(newProject);
    } else {
      this.ProjectController.editProject(projectId, projectName);
    }
    // Re-render navbar to reflect changes
    const newProjectsArr = this.ProjectController.getProjects();
    new Navbar().renderComponent(newProjectsArr);
    this.closeModal();
  }

  handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const projectName = formData.get("projectName");
    const projectId = formData.get("projectId");

    if (typeof this.projectCallback === "function") {
      this.projectCallback(projectId, projectName); //
      this.closeModal();
    } else {
      this.defaultProjectHandler(projectId, projectName);
    }
  }

  handleCloseButtonClick(e) {
    // close modal
    this.closeModal();
  }

  closeModal() {
    const projectModal = document.querySelector(".project-form-container");
    const modalInput = document.querySelector("#projectName");
    if (modalInput) {
      modalInput.value = "";
    }
    const modalHiddenProjectId = document.querySelector("#projectId");
    if (modalHiddenProjectId) {
      modalHiddenProjectId.value = "";
    }
    if (projectModal) {
      projectModal.classList.add("modal-hidden");
    }

    UIController.isProjectModalOpen = false;
  }

  showModal() {
    let projectModal = document.querySelector(".project-form-container");

    if (!projectModal) {
      this.renderComponent();
      projectModal = document.querySelector(".project-form-container");
    }
    projectModal.classList.add("modal-overlay");
    projectModal.classList.remove("modal-hidden");

    UIController.isProjectModalOpen = true;

    // focus input
    const inputEl = document.querySelector("#projectName");
    inputEl.focus;
  }
}
