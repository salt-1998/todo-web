"use strict";

const add = document.getElementsByClassName("js-add")[0];
const list = document.getElementsByClassName("js-list")[0];
const input = document.getElementsByClassName("js-input")[0];

const removeTask = (removeButton) => {
  const targetTask = removeButton.closest("li");
  list.removeChild(targetTask);
};

const addTask = (task) => {
  const listItem = document.createElement("li");
  const removeButton = document.createElement("button");

  removeButton.innerText = "削除";
  removeButton.addEventListener("click", () => removeTask(removeButton));

  listItem.innerText = task;

  listItem.appendChild(removeButton);
  list.appendChild(listItem);
};

add.addEventListener("click", (event) => {
  const task = input.value;
  addTask(task);
  input.value = "";
});

// 7~10
// removeButtonから最も近い親要素のliをtargetTaskに代入
// listからtargetTask(removeButtonから最も近い親要素のli)を削除

// 12~
// listItemにli要素を作成
// removeButtonにbutton要素を作成

// removeButtonのbutton要素に削除と表示
// removeButtonをクリックした場合removeTaskを実行←(removeButtonの意味は？)

//listItemにtaskを表示させる

// listItemにremoveButtonを追加
// listにlistItemを追加

// addをクリックした場合、以下を実行
// taskにはinputを初期値として代入
// 関数addTskにtaskを渡す
// inputの初期値はなし
