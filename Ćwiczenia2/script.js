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
    answer.innerHTML = "loading...";
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();
    answer.innerHTML = "";
    answer.innerHTML += "<ul>";
    data.forEach((item) => {
      answer.innerHtml += "<p>";
      answer.innerHTML += `<span style="font-weight: bold;">${item.title}</span> 
      <p>${item.body}</p>`;
      answer.innerHTML += "</p>";
    })
    answer.innerHTML += "</ul>";
  })

  cw2.addEventListener("click", async function () {
    answer.innerHTML = "loading...";
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    const item = await response.json();
    answer.innerHTML = "";
    answer.innerHtml += "<p>";
    answer.innerHTML += `<span style="font-weight: bold;">${item.title}</span> 
    <p>${item.body}</p>`;
    answer.innerHTML += "</p>";
  })

  cw3.addEventListener("click", async function () {
    answer.innerHTML = "Processing...";
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
    answer.innerHTML = `<p>Dodano nowy post o ID = ${data.id}</p>`;
  })
})();
