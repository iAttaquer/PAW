const apiKey = 'zlLZkOu08IxWsyv8LGDsTRU2fYoG1ta7';
const apiUrl = 'https://api.giphy.com/v1/gifs';
const randomGifButton = document.getElementById('randomGif');
const randoms = document.getElementById('randoms');
const searchButton = document.getElementById('search-button');
const searchInput = document.getElementById('search-input');
const searched = document.getElementById('searched');


randomGifButton.addEventListener('click', async function() {
    const response = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}&tag=&rating=g`);
    randoms.innerHTML = '';
    if (!response.ok) {
        throw new Error(`Error ${response.status}`);
    }
    const data = await response.json();
    console.log(data);
    const image = document.createElement('img');
    image.src = data.data.images.original.url;
    randoms.appendChild(image);
});


let currentPage = 0;
let totalPages = 0;
let limit = 5;

async function fetchGifs(query, page = 0) {
  const response = await fetch(
    `${apiUrl}/search?api_key=${apiKey}&q=${encodeURIComponent(query)}&limit=${limit}&offset=${page * limit}&rating=g`,
  );
  const data = await response.json();
  totalPages = Math.ceil(data.pagination.total_count / limit);
  return data.data;
}

function displayGifs(gifs) {
  const gifSearchContainer = document.getElementById("searched");
  gifSearchContainer.innerHTML = "";

  gifs.forEach((gif) => {
    const gifElement = document.createElement("div");
    gifElement.classList.add("gif");
    gifElement.innerHTML = `
      <img src="${gif.images.original.url}" alt="${gif.title}">
    `;
    gifSearchContainer.appendChild(gifElement);
  });

  updatePagination();
}

function updatePagination() {
  const paginationContainer = document.getElementById("pagination");
  paginationContainer.innerHTML = "";
  console.log("cos");

  if (currentPage > 0) {
    const prevButton = document.createElement("button");
    prevButton.textContent = "Prev";
    prevButton.onclick = () => changePage(currentPage - 1);
    paginationContainer.appendChild(prevButton);
  }

  const pageIndicator = document.createElement("span");
  pageIndicator.textContent = `Page ${currentPage + 1} of ${totalPages}`;
  paginationContainer.appendChild(pageIndicator);

  if (currentPage < totalPages - 1) {
    const nextButton = document.createElement("button");
    nextButton.textContent = "Next";
    nextButton.onclick = () => changePage(currentPage + 1);
    paginationContainer.appendChild(nextButton);
  }
}

function changePage(page) {
  currentPage = page;
  const searchInputValue = document.querySelector('input[name="search"]').value;
  fetchGifs(searchInputValue, currentPage).then(displayGifs);
}

const form = document.getElementById("gif-form");

async function onSubmit(event) {
  event.preventDefault();
  const searchInputValue = form.querySelector('input[name="search"]').value;
  currentPage = 0;
  fetchGifs(searchInputValue, currentPage).then(displayGifs);
}

form.addEventListener("submit", onSubmit);