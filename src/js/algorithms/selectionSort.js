import {
  swapHeight,
  timeoutPromise,
  scaleBarBy,
  barHeightInt,
  changeBarColor,
} from "../helper";
import { TIME } from "../config";

export const selectionSort = async function () {
  const arrayBarList = document.querySelectorAll(".array-bar");
  scaleBarBy(arrayBarList, 1.3);

  for (let i = 0; i < arrayBarList.length - 1; i++) {
    let min_index = i;
    changeBarColor(arrayBarList[i], "blue");

    for (let j = i + 1; j < arrayBarList.length; j++) {
      // changeBarColor(arrayBarList[j], "blue");
      changeBarColor(arrayBarList[j], "red");
      await timeoutPromise(TIME);
      if (
        barHeightInt(arrayBarList[j]) < barHeightInt(arrayBarList[min_index])
      ) {
        if (min_index !== i) changeBarColor(arrayBarList[min_index], "black");
        min_index = j;
      } else {
        changeBarColor(arrayBarList[j], "black");
      }
    }
    // await timeoutPromise(TIME);

    swapHeight(arrayBarList[i], arrayBarList[min_index]);
    changeBarColor(arrayBarList[min_index], "black");
    changeBarColor(arrayBarList[i], "green");
  }
  // arrayBarList[].style.backgroundColor = "green";
};
