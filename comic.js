document.addEventListener("DOMContentLoaded", getId);
async function getId() {
  const email = "mo.shahin@innopolis.university";
  const params = new URLSearchParams();
  const apiUrl = `https://fwd.innopolis.university/api/hw2?`;
  params.append("email", email);
  fetch(apiUrl + params.toString())
    .then((response) => response.json())
    .then((id) => {
      getData(id);
    });
}
async function getData(id) {
  const params = new URLSearchParams();
  const apiUrl = `https://fwd.innopolis.university/api/comic?`;
  params.append("id", id);
  fetch(apiUrl + params.toString())
    .then((response) => response.json())
    .then((data) => {
      const container = document.getElementById("container");
      const title = document.createElement("h2");
      title.className = "main-title";
      title.textContent = data.safe_title;
      container.appendChild(title);
      const date = document.createElement("p");
      date.className = "comic-date";
      date.id = "comic-date";
      const dateObj = new Date(data.year, data.month - 1, data.day);
      date.textContent = dateObj.toLocaleDateString();
      container.appendChild(date);
      const image = document.createElement("img");
      image.id = "comic-image";
      container.appendChild(image);
      image.src = data.img;
      image.alt = data.alt;
    });
}
