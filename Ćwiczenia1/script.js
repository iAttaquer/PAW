(function () {
  const button1 = document.getElementById("ex1_button");
  const output = document.getElementById("ex1_content");
  button1.addEventListener("click", () => {
    output.innerHTML = Array.from(Array(10).keys()).join(", ");
  });
})
();