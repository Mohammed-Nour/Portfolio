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
      console.log(id);
    });
}
async function getData(id) {
  const params = new URLSearchParams();
  const apiUrl = `https://fwd.innopolis.university/api/comic?`;
  params.append("id", id);
  fetch(apiUrl + params.toString())
    .then((response) => response.json())
    .then((data) => {
      //   document.createElement("div").set;
      const title = document.getElementById("comic-title");
      const date = document.getElementById("comic-date");
      const image = document.getElementById("comic-image");
      title.textContent = data.safe_title;
      const dateObj = new Date(data.year, data.month, data.day);
      date.textContent = dateObj.toLocaleDateString();
      image.src = data.img;
      image.alt = data.alt;
      console.log(data);
    });
}
