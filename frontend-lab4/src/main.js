const funnyJokesButton = document.querySelector("#funny-joke");
const lameJokesButton = document.querySelector("#lame-joke");
const result = document.querySelector("#result");

const apiUrl = "http://192.168.210.92:3000";

async function fetchLameJokes() {
  const response = await fetch(`${apiUrl}/jokebook/joke/lameJoke`);
  console.log("dkkdkd");
  console.log(response);
  const data = await response.json();
  console.log(data);
  result.innerHTML = data.joke;
}

async function fetchFunnyJokes() {
  const response = await fetch(`${apiUrl}/jokebook/joke/funnyJoke`);
  console.log(response);
  const data = await response.json();
  console.log(data);
  result.innerHTML = data.joke;
}

lameJokesButton.addEventListener("click", fetchLameJokes);
funnyJokesButton.addEventListener("click", fetchFunnyJokes);
