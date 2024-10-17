(function () {
  const example = document.getElementById('example')
  const cw1 = document.getElementById('cw1')
  const cw2 = document.getElementById('cw2')
  const cw3 = document.getElementById('cw3')
  const answer = document.getElementById('answer')

  example.addEventListener("click", function () {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(array => {
        console.log(array)
        answer.innerHTML = JSON.stringify(array);
      })
  })

  cw1.addEventListener("click", async function () {
    alert("loading...");
    const response = await fetch('https://raw.githubusercontent.com/trak2025zz/json-server/refs/heads/main/db.json');
    const data = await response.json();
    console.log(data);
    answer.innerHTML = "";
    data.posts.forEach((item) => {
      answer.innerHTML += `<div class="container" id="${item.id}">
      <h1 class="heading">${item.title}</h1> 
      <p> PostID: ${item.id}</p>
      </div>`;
    })
    data.comments.forEach((comment) =>{
      const div = document.getElementById(comment.postId);
      div.innerHTML += `<p> ${comment.body}</p>`;
    })
  })

  cw2.addEventListener("click", async function () {
    alert("loading...");
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    const item = await response.json();
    console.log(item);
    answer.innerHTML = "";
    answer.innerHTML += `<div class="container">
      <h1 class="heading">${item.title}</h1> 
      <p>UserID: ${item.userId}, PostID: ${item.id}</p>
      <p>${item.body}</p>
      </div>`;
  })

  cw3.addEventListener("click", async function () {
    alert("Processing...");
    const newPost = {
      userId: 100,
      title: 'asdighasdg',
      body: 'asdighasdg',
    }
    const response = await fetch('https://jsonplaceholder.typicode.com/posts',{
      method: 'POST',
      body: JSON.stringify(newPost),
      headers: {
        'Content-type': 'application/json',
      },
    });
    const data = await response.json();
    console.log(data);
    answer.innerHTML = `<p>Dodano nowy post o ID = ${data.id}</p>`;
  })
})();
