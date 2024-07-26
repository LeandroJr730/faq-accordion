const blocks = document.querySelectorAll(".block");
const answers = document.querySelectorAll(".answers");
blocks.forEach((block) => {
  const question = block.querySelector(".question");
  const icon = block.querySelector(".question .expand-icon");
  const currentAnswer = block.querySelector(".answer");

  question.addEventListener("click", () => {
    currentAnswer.classList.toggle("active");
    if (currentAnswer.classList.contains("active")) {
      icon.src = "./assets/images/icon-minus.svg";
      currentAnswer.style.maxHeight = currentAnswer.scrollHeight + "px";
    } else {
      icon.src = "./assets/images/icon-plus.svg";
      currentAnswer.style.maxHeight = 0;
    }
    blocks.forEach((b) => {
      const ans = b.querySelector(".answer");
      const icon = b.querySelector(".expand-icon");
      if (ans !== currentAnswer) {
        ans.classList.remove("active");
        ans.style.maxHeight = 0;
        icon.src = "./assets/images/icon-plus.svg";
      }
    });
  });
});
