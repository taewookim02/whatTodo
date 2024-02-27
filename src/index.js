import { Projects } from "./classes/Projects";
import { Project } from "./classes/Project";
import { Todo } from "./classes/Todo";
import { DOMController } from "./classes/DOMController";
import uniqid from "uniqid";

const projects = new Projects();
const project1 = new Project(uniqid(), "Project 1");
console.log(project1);
const todo1 = new Todo(
  uniqid(),
  "Todo 1",
  "Description 1",
  Date.now(), // date to something more readable
  10,
  "Notes... 1",
  false
);
DOMController.renderPage();
projects.addProject(project1);
project1.addTodo(todo1);
