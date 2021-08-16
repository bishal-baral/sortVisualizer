import { randomIntFromInterval, swapHeight } from "./helper";
import { bubbleSort } from "./algorithms/bubbleSort";
import { insertionSort } from "./algorithms/insertionSort";
import { selectionSort } from "./algorithms/selectionSort";
import { quickSort } from "./algorithms/quickSort";
import { mergeSort } from "./algorithms/mergeSort";
import { async } from "regenerator-runtime";

const arrayBars = document.querySelector("#array-bars");

const newArrayButton = document.querySelector(".btn-new-array");
const bubbleSortButton = document.querySelector(".btn-bubble-sort");
const insertionSortButton = document.querySelector(".btn-insertion-sort");
const selectionSortButton = document.querySelector(".btn-selection-sort");
const quickSortButton = document.querySelector(".btn-quick-sort");
const mergeSortButton = document.querySelector(".btn-merge-sort");
const buttonList = document.querySelectorAll(".btn-sort");

//create a random array to perform sort on and display
function createRandomArray(arrayLength = 50) {
  resetArray();
  const array = [];
  for (let index = 0; index < arrayLength; index++) {
    array.push(randomIntFromInterval(30, 200));
  }

  let maxHeight = 0;
  for (let index = 0; index < arrayLength; index++) {
    const arrayBar = document.createElement("div");
    arrayBar.classList.add("array-bar");
    arrayBar.style.height = `${array[index] * 2.5}px`;
    maxHeight = array[index] * 2.5 > maxHeight ? array[index] * 2.5 : maxHeight;
    arrayBars.appendChild(arrayBar);
  }
  arrayBars.style.height = `${maxHeight + 10}px`;
}

function resetArray() {
  arrayBars.innerHTML = "";
  newArrayButton.classList.remove("wobble");
}

function buttonsDisable() {
  buttonList.forEach((button) => {
    button.classList.add("disabled");
  });
}
function buttonsEnable() {
  buttonList.forEach((button) => {
    button.classList.remove("disabled");
  });
}
function buttonSelected(button) {
  button.classList.add("selected");
  buttonsDisable();
}
function buttonUnselected() {
  buttonList.forEach((button) => {
    button.classList.remove("selected");
  });
}

//Event Listeners
function eventHandlers() {
  newArrayButton.addEventListener("click", function () {
    createRandomArray();
    buttonsEnable();
    buttonUnselected();
  });

  buttonList.forEach((button) => {
    button.addEventListener("click", () => {
      buttonSelected(button);
    });
  });

  bubbleSortButton.addEventListener("click", async function () {
    await bubbleSort();
  });

  insertionSortButton.addEventListener("click", async function () {
    await insertionSort();
  });

  selectionSortButton.addEventListener("click", async function () {
    await selectionSort();
  });

  quickSortButton.addEventListener("click", async function () {
    await quickSort();
  });

  mergeSortButton.addEventListener("click", async function () {
    await mergeSort();
  });
}

function init() {
  createRandomArray();
  eventHandlers();
  // console.log(buttonList);
}

init();

//helper methods
