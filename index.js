let buttons = document.querySelectorAll(".buttons");
let labels = document.querySelectorAll("[name='labels']");
const hiddenTexts = document.querySelectorAll(".hide-text");

buttons.forEach((button) => {
  button.addEventListener("click", showText);
});

function showText() {
  if (hiddenTexts.classList.contains("hide-text")) {
    hideText.classList.replace("show-text", "hide-text");
  } else {
    hideText.classList.replace("hide-text", "show-text");
  }
  console.log("you pressed");
}

// function showText() {
//   if (labels.classList.contains("hide-text")) {
//     hideText.classList.replace("hide-text", "show-text");
//   } else {
//     hideText.classList.replace("show-text", "hide-text");
//   }
//   console.log("you pressed");
// }

// let buttons = document.querySelectorAll(".myButtons");

// buttons.forEach((button) => {
//   button.classList.add("enabled");
// });

// buttons.forEach((button) => {
//   button.addEventListener("mouseover", (event) => {
//     event.target.classList.toggle("hover");
//   });
// });

// buttons.forEach((button) => {
//   button.addEventListener("mouseout", (event) => {
//     event.target.classList.toggle("hover");
//   });
// });

// buttons.forEach((button) => {
//   button.addEventListener("click", (event) => {
//     if (event.target.classList.contains("disabled")) {
//       event.target.textContent += "😒😡";
//     } else {
//       event.target.classList.replace("enabled", "disabled");
//     }
//   });
// });
