import { async } from "regenerator-runtime";
import {
  timeoutPromise,
  scaleBarBy,
  barHeightInt,
  changeBarColor,
} from "../helper";
import { TIME } from "../config";

export const insertionSort = async function () {
  const arrayBarList = document.querySelectorAll(".array-bar");
  scaleBarBy(arrayBarList, 1.3);

  changeBarColor(arrayBarList[0], "green");

  for (let i = 1; i < arrayBarList.length; i++) {
    let target = barHeightInt(arrayBarList[i]);
    let j = i - 1;

    changeBarColor(arrayBarList[i], "blue");
    await timeoutPromise(TIME);

    while (j >= 0 && target < barHeightInt(arrayBarList[j])) {
      changeBarColor(arrayBarList[j], "blue");
      arrayBarList[j + 1].style.height = arrayBarList[j].style.height;
      j--;
      await timeoutPromise(TIME);
      let colorChangeIndex = i;
      while (colorChangeIndex >= 0) {
        changeBarColor(arrayBarList[colorChangeIndex--], "green");
      }
    }
    arrayBarList[j + 1].style.height = target;
    changeBarColor(arrayBarList[i], "green");
  }
};
