async function getData() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const datas = await response.json();
  console.log(datas);

  let takeElement = document.querySelector(".card");

  datas.map((item) => {
    takeElement.innerHTML += ` <img class="img" src="" alt="" />
                  <div>
                    <h2>${item.name}</h2>
                    <p>${item.title}</p>
                  </div>

                
              `;
  });
}
getData();

console.log("hello");

const table = document.getElementById(".container");

takeElement.innerHTML += ` <th>Item ${take.children.length + 1}</th>`;
