import {
  swapHeight,
  timeoutPromise,
  scaleBarBy,
  barHeightInt,
  changeBarColor,
  wobbleNewArrayButton,
} from "../helper";
import { TIME } from "../config";

export const quickSort = async function () {
  const arrayBarList = document.querySelectorAll(".array-bar");
  await callQuickSort(arrayBarList, 0, arrayBarList.length - 1);
  arrayBarList.forEach((bar) => changeBarColor(bar, "turquoise"));
  wobbleNewArrayButton();
};

async function callQuickSort(arrayBarList, low, high) {
  scaleBarBy(arrayBarList, 1.3);
  if (low < high) {
    const pivotLocation = await partition(arrayBarList, low, high);
    await callQuickSort(arrayBarList, low, pivotLocation - 1);
    await callQuickSort(arrayBarList, pivotLocation + 1, high);
  } else if (
    low < arrayBarList.length &&
    high < arrayBarList.length &&
    low >= 0 &&
    high >= 0
  ) {
    changeBarColor(arrayBarList[low], "green");
    changeBarColor(arrayBarList[high], "green");
  }
}

async function partition(arrayBarList, low, high) {
  const pivot = arrayBarList[high];
  let leftwall = low - 1;

  changeBarColor(pivot, "red");
  for (let i = low; i <= high - 1; i++) {
    changeBarColor(arrayBarList[i], "blue");
    await timeoutPromise(TIME);
    if (barHeightInt(arrayBarList[i]) < barHeightInt(pivot)) {
      leftwall++;
      swapHeight(arrayBarList[i], arrayBarList[leftwall]);
      changeBarColor(arrayBarList[leftwall], "orange");
      if (leftwall != i) {
        changeBarColor(arrayBarList[i], "orange");
      }
      await timeoutPromise(TIME);
    } else {
      changeBarColor(arrayBarList[i], "purple");
    }
  }
  await timeoutPromise(TIME);
  swapHeight(pivot, arrayBarList[leftwall + 1]);
  changeBarColor(arrayBarList[leftwall + 1], "green");
  changeBarColor(pivot, "purple");

  await timeoutPromise(TIME);
  arrayBarList.forEach((arrayBar) => {
    if (arrayBar.style.background !== "green") {
      changeBarColor(arrayBar, "black");
    }
  });

  return leftwall + 1;
}

//sometines the last element is not turned greeen
