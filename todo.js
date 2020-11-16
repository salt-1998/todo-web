"use strict";

const removeBoxButton = document.getElementsByClassName("removeBoxButton_js");
const removeBox = document.getElementsByClassName("main-box");
const add = document.getElementsByClassName("js-add-button");

const list = document.getElementsByClassName("js-list");
const input = document.getElementsByClassName("js-input");

const removeTask = (removeButton) => {
  const targetTask = removeButton.closest("li");

  targetTask.remove();
};

const completeTask = (completeButton) => {
  const targetTask = completeButton.closest("li");
  targetTask.classList.add("isComplete_js");
};

for (let i = 0; i < removeBoxButton.length; i++) {
  removeBoxButton[i].addEventListener("click", () => {
    removeBox[0].remove();
  });
}

const addTask = (task, addArgument) => {
  const listItem = document.createElement("li");
  const removeButton = document.createElement("button");
  const completeButton = document.createElement("button");

  completeButton.classList.add("completeButton_js");
  completeButton.innerText = "check";
  completeButton.addEventListener("click", () => completeTask(completeButton));

  removeButton.classList.add("removeButton_js");
  removeButton.innerText = "delete";
  removeButton.addEventListener("click", () => removeTask(removeButton));

  listItem.innerText = task;

  listItem.appendChild(completeButton);
  listItem.appendChild(removeButton);

  list[addArgument].appendChild(listItem);
};

for (let i = 0; i < add.length; i++) {

  add[i].addEventListener("click", (event) => {
    const task = input[i].value;
    const addArgument = i;
    addTask(task, addArgument);
    input[i].value = "";

  
  });
}
