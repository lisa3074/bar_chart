"use strict";
window.addEventListener("DOMContentLoaded", loop);

let random = Math.floor(Math.random() * 32) + 1;
const array = [];
array.length = 40;

function loop() {
  //define random value for height
  let random = Math.floor(Math.random() * 32) + 1;
  //push random-value to the beginning of array.
  array.push(random);
  //If the array is lesser than
  if (array.length <= 40) {
    //move along - nothing to see here
  } else {
    //Remove one entriy from end of array.
    array.shift();
  }
  console.log(array);
  setHeight();
}

function setHeight() {
  //define number as 0, then see if number is lesser than array's
  //lenght, do stuff in function, go back and add 1 to number and loop again
  for (let number = 0; number < array.length; number++) {
    console.log("setHeight");
    const bar = document.querySelector(`div:nth-child(${number + 1})`);
    //console.log(bar);
    bar.style.setProperty("--height", array[number]);
  }
  setTimeout(loop, 1000);
}
