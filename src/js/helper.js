const newArrayButton = document.querySelector(".btn-new-array");

export const wobbleNewArrayButton = () => {
  newArrayButton.classList.add("wobble");
};

export const randomIntFromInterval = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

export const swapHeight = function (first, sec) {
  let temp = first.style.height;
  first.style.height = sec.style.height;
  sec.style.height = temp;
};

export const timeoutPromise = function (time_in_ms) {
  return new Promise((resolve) => setTimeout(resolve, time_in_ms));
};

export const scaleBarBy = function (arrayBarList, ratio) {
  arrayBarList.forEach(
    (arrayBar) => (arrayBar.style.transform = `scaleX(${ratio})`)
  );
};

export const changeBarColor = function (arrayBar, color) {
  arrayBar.style.background = color;
};

export const barHeightInt = function (arrayBar) {
  return parseInt(arrayBar.style.height);
};
