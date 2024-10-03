(function () {
  const button1 = document.getElementById("ex1_button");
  const output = document.getElementById("ex1_content");
  button1.addEventListener("click", () => {
    output.innerHTML = Array.from(Array(10).keys()).join(", ");
  });
})
();
(function () {
  function containsLetters(str) {
    return /[a-zA-Z]/.test(str);
  }
  function containsSpecialCharacters(str) {
    return /[^a-zA-Z0-9]/.test(str);
  }
  const input = document.getElementById("ex2_text");
  const output = document.getElementById("ex2_content");
  let message = "";
  input.addEventListener("input", (e) => {
    message = "";
    if (e.target.value.length != 9) {
      message += "Długość numeru musi być równa 9\n";
    }
    if (containsLetters(e.target.value)) {
      message += "Numer nie może zawierać liter\n";
    }
    if (containsSpecialCharacters(e.target.value)) {
      message += "Numer nie może zawierać znaków specjalnych\n";
    }
    if (message === "") {
      message = "Numer telefonu jest poprawny";
    }
    output.innerText = message;
  })
  })();
(function () {
  const one = document.getElementById("ex3_one");
  const two = document.getElementById("ex3_two");
  const element = document.getElementById("ex3_element");
  element.addEventListener("dragstart", (e) => {
    e.dataTransfer.setData("text", e.target.id);
  })
  const handlerDrop = (e) => {
    e.preventDefault();
    const data = e.dataTransfer.getData("text");
    e.target.appendChild(document.getElementById(data));
  }
  const allowDrop = (e) => {
    e.preventDefault();

  }
  one.addEventListener("drop", handlerDrop);
  two.addEventListener("drop", handlerDrop);
  one.addEventListener("dragover", allowDrop);
  two.addEventListener("dragover", allowDrop);
})();
