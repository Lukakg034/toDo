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

// Triggering event listener on Input field by Enter

// const eventType = {
//   click: 0,
//   enter: "Enter",
// };
// console.log(eventType.click);
// inputField.addEventListener(eventType.click, (event) => {
//   if (event.button === eventType.click || event.key === eventType.enter) {
//     console.log("LMB or Enter is clicked!");
//   }
// });

//? Valid code below

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
// Generator function for date object
// const myDate = new Date();
// const dayOfTheWeek = myDate.toLocaleDateString("sr-Latn-RS", {
//   weekday: "long",
// });
// console.log(dayOfTheWeek);
// console.log(myDate.getDay());
//? This generator function is working on a Date object
// function* extractDateComponents(date) {
//   yield date.toLocaleDateString("sr-Latn-RS", { weekday: "long" });
//   yield date.getDate();
//   yield date.getMonth();
//   yield date.getFullYear();
//   yield date.getHours();
//   yield date.getMinutes();
// }
// const myDate = new Date();
// const arrayDateComponent = extractDateComponents(myDate);
// const [dayOf, day, month, year, hour, minute] = arrayDateComponent;
// console.log(dayOf, day, month, year);

// const arr = [1, 2, 3, 4, 5, 6, 67];
// console.log(arr.at(-1));

// const knight = {
//   name: "Dragon",
//   weapon: {
//     mainHand: ["Sword", "Axe", "Club"],
//     offHand: "Shield",
//   },
// };

// const paladin = structuredClone(knight);
// console.log(knight);
// console.log(paladin);

// console.log(knight.weapon.mainHand[1]);
// paladin.weapon.mainHand.push("Two-hand");
// console.log(paladin.weapon.mainHand);
// console.log(knight.weapon.mainHand);

//? Testing out generator

// const car = {
//   brand: "Ford",
//   make: "Focus",
//   yearOfProduction: "2008-2012",
//   engine: "diesel and petrol",
//   shift: "manual",
//   doors: ["3-door", "5-door"],
// };

// function* carParts(part) {
//   yield part.yearOfProduction;
//   yield part.make;
//   yield part.shift;
// }

// const fordData = [];
// for (let part of carParts(car)) {
//   fordData.push(part);
// }
// console.log(fordData);

//TODO Implement date to the task creating
//TODO Implement "enter" eventListener to the input
//TODO Fix the height of the delete button on longer text tasks
//TODO Remove white corners from the top and bottom left side of the page
//TODO Add local storage
//TODO Add profile option for storring different users
//? Optional:
//TODO Create animation on list item delete
//TODO Create option to edit existing list item
// const dateObj = new Date();

// function* extractingGeneratorDate(date) {
//   yield date.getDate();
//   yield date.getDay();
//   yield date.getMonth();
//   yield date.getFullYear();
//   yield date.getHours();
//   yield date.getMinutes();
// }

// const generatingArray = extractingGeneratorDate(dateObj);
// const [date, day, month, year, hour, minutes] = [...generatingArray];

// console.log(date, day, month, year, hour, minutes);
