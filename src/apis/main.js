import { foodForm, foodFormEvent } from "./foodForm.js";

const foodFormElement = document.querySelector(".foodForm");
const formHTML = foodForm();

foodFormElement.innerHTML = formHTML;

foodFormEvent();