import {
  timeoutPromise,
  changeBarColor,
  wobbleNewArrayButton,
  scaleBarBy,
} from "../helper";
import { TIME } from "../config";

export const mergeSort = async function () {
  const arrayBarList = document.querySelectorAll(".array-bar");

  await callMergeSort(arrayBarList, 0, arrayBarList.length - 1);
  arrayBarList.forEach((bar) => changeBarColor(bar, "turquoise"));
  wobbleNewArrayButton();
};

async function callMergeSort(arrayBarList, left, right) {
  scaleBarBy(arrayBarList, 1.3);

  if (left < right) {
    const mid = left + parseInt((right - left) / 2);

    for (let i = left; i < mid; i++) {
      await timeoutPromise(TIME);
      changeBarColor(arrayBarList[i], "grey");
    }

    await callMergeSort(arrayBarList, left, mid);

    for (let i = mid + 1; i <= right; i++) {
      await timeoutPromise(TIME);
      changeBarColor(arrayBarList[i], "whitesmoke");
    }

    await callMergeSort(arrayBarList, mid + 1, right);

    await merge(arrayBarList, left, mid, right);
  }
}

async function merge(arrayBarList, left, mid, right) {
  const leftArrayLength = mid - left + 1;
  const rightArrayLength = right - mid;

  let leftArray = new Array(leftArrayLength);
  let rightArray = new Array(rightArrayLength);

  for (let i = 0; i < leftArrayLength; i++) {
    await timeoutPromise(TIME);
    leftArray[i] = arrayBarList[left + i].style.height;

    changeBarColor(arrayBarList[left + i], "red");
  }
  for (let j = 0; j < rightArrayLength; j++) {
    await timeoutPromise(TIME);
    rightArray[j] = arrayBarList[mid + 1 + j].style.height;

    changeBarColor(arrayBarList[mid + 1 + j], "pink");
  }
  await timeoutPromise(TIME);

  let i = 0,
    j = 0,
    k = left;
  while (i < leftArrayLength && j < rightArrayLength) {
    await timeoutPromise(TIME);
    if (parseInt(leftArray[i]) <= parseInt(rightArray[j])) {
      const color =
        leftArrayLength + rightArrayLength === arrayBarList.length
          ? "green"
          : "blue";
      changeBarColor(arrayBarList[k], color);
      arrayBarList[k].style.height = leftArray[i];
      i++;
    } else {
      const color =
        leftArrayLength + rightArrayLength === arrayBarList.length
          ? "green"
          : "blue";
      changeBarColor(arrayBarList[k], color);
      arrayBarList[k].style.height = rightArray[j];
      j++;
    }
    k++;
  }
  while (i < leftArrayLength) {
    await timeoutPromise(TIME);
    const color =
      leftArrayLength + rightArrayLength === arrayBarList.length
        ? "green"
        : "blue";
    changeBarColor(arrayBarList[k], color);
    arrayBarList[k].style.height = leftArray[i];
    i++;
    k++;
  }
  while (j < rightArrayLength) {
    const color =
      leftArrayLength + rightArrayLength === arrayBarList.length
        ? "green"
        : "blue";
    changeBarColor(arrayBarList[k], color);
    await timeoutPromise(TIME);
    arrayBarList[k].style.height = rightArray[j];
    j++;
    k++;
  }
}
