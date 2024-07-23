const details = document.querySelectorAll(".details");

buttons.forEach((button) => {
  button.addEventListener("click", showText);
});

function showText() {
  button1.addEventListener("click", (event) => {
    if (textButton1.style.display === "none") {
      textButton1.display = "block";
      // } else if (labels.style.display === "block") {
      //   labels.style.display = "none";
      //   textButton1.display = "block";
    }
    // else if (textButton1.style.display === "block") {
    //   textButton1.style.display = "none";
    // }
  });

  console.log("you pressed");
}

//  labels.forEach((label) => {
//   if (label.style.display === "none") {
//     label.style.display = "block";
//   } else {
//     label.style.display = "none";
//   }
// });
