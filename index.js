const buttons = document.querySelectorAll(".buttons");
const button1 = document.getElementById("button-1");
const textButton1 = document.getElementById("text-button-1");

let labels = document.querySelectorAll("label");

buttons.forEach((button) => {
  button.addEventListener("click", showText);
});

function showText() {
  labels.forEach((label) => {
    if (label.style.display === "none") {
      label.style.display = "block";
    } else {
      label.style.display = "none";
    }
  });

  console.log("you pressed");
}
