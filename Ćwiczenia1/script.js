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
