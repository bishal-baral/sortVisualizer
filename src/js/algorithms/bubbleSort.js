import {
  swapHeight,
  timeoutPromise,
  scaleBarBy,
  barHeightInt,
  changeBarColor,
  wobbleNewArrayButton,
} from "../helper";
import { TIME } from "../config";

export const bubbleSort = async function () {
  const arrayBarList = document.querySelectorAll(".array-bar");
  scaleBarBy(arrayBarList, 1.3);

  for (let i = 0; i < arrayBarList.length - 1; i++) {
    for (let j = 0; j < arrayBarList.length - 1 - i; j++) {
      changeBarColor(arrayBarList[j], "blue");
      changeBarColor(arrayBarList[j + 1], "blue");

      if (barHeightInt(arrayBarList[j]) > barHeightInt(arrayBarList[j + 1])) {
        await timeoutPromise(TIME);
        swapHeight(arrayBarList[j], arrayBarList[j + 1]);
      }
      changeBarColor(arrayBarList[j], "black");
      changeBarColor(arrayBarList[j + 1], "black");
    }
    changeBarColor(arrayBarList[arrayBarList.length - i - 1], "green");
  }

  arrayBarList.forEach((bar) => changeBarColor(bar, "turquoise"));
  wobbleNewArrayButton();
};
