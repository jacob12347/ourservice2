const buttons = document.querySelectorAll("ul li");

buttons.forEach((button) => {
  button.addEventListener("click", function () {
    buttons.forEach((button) => {
      button.classList.remove("active");
    });
    this.classList.add("active");
  });
});
