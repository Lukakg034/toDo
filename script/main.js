//TODO Triggering event listener on Input field by Enter
//TODO Implement date to the task creating
//TODO Implement "enter" eventListener to the input
//TODO Fix the height of the delete button on longer text tasks
//TODO Remove white corners from the top and bottom left side of the page
//TODO Add local storage
//TODO Add profile option for storring different users
//? Optional:
//TODO Create animation on list item delete
//TODO Create option to edit existing list item

const inputField = document.querySelector("#userInput");
const addTaskBtn = document.querySelector(".btn-add");
const taskList = document.querySelector(".task_list");
const taskItem = document.querySelector(".task_item");

//Adding animation
const firstPage = document.querySelector("#page_1");
const book = document.querySelector(".book");
const btnOpen = document.querySelector(".btn_open");
const turnCoverPage = document.querySelector(".cover_front");
const pageBack = document.querySelector("page_back");

// Turning front cover page on button click (cover button)
btnOpen.addEventListener("click", () => {
  turnCoverPage.classList.add("turn_page");
  //Turning FIRST page on mouse click
  firstPage.classList.add("turn_page");
  book.classList.add("open");
  if (turnCoverPage.classList.contains("turn_page")) {
    btnOpen.style.backfaceVisibility = "hidden";
    // pageBack.style.backfaceVisibility = "hidden";
  }
});

//Input field related event listener
addTaskBtn.addEventListener("click", () => {
  const inputText = inputField.value;
  if (!inputText == "") {
    taskList.appendChild(createItem(inputText));
  } else {
    alert("Your input task is empty.");
  }
});

function createItem(taskText) {
  // Creating list item with content
  const taskItem = document.createElement("li");
  taskItem.textContent = taskText;
  inputField.value = "";
  // Creating delete button
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "\u2014";
  deleteButton.classList.add("delBtn");

  taskItem.appendChild(deleteButton);

  // Removing list item from the list
  deleteButton.addEventListener("click", () => {
    taskList.removeChild(taskItem);
  });
  return taskItem;
}
