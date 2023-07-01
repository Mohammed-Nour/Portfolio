import moment from "moment"

interface ComicData {
  safe_title: string;
  year: number;
  month: number;
  day: number;
  img: string;
  alt: string;
}

interface IdResponse {
  id: number;
}

document.addEventListener("DOMContentLoaded", getId);
 function getId() {
  const email: string = "mo.shahin@innopolis.university";
  const params = new URLSearchParams();
  const apiUrl: string = `https://fwd.innopolis.university/api/hw2?`;
  params.append("email", email);
  fetch(apiUrl + params.toString())
    .then((response) => response.json())
    .then((idResponse: IdResponse) => {
      getData(idResponse);
    });
}

 function getData(idResponse: IdResponse) {
  const params = new URLSearchParams();
  const apiUrl: string = `https://fwd.innopolis.university/api/comic?`;
  params.append("id", idResponse.toString());
  fetch(apiUrl + params.toString())
    .then((response) =>  response.json())
    .then((comicData: ComicData) => {
      const container = document.getElementById("container") as HTMLDivElement;
      const title = document.createElement("h2") as HTMLHeadingElement;
      title.className = "main-title";
      title.textContent = comicData.safe_title;
      container.appendChild(title);
      const date = document.createElement("p");
      date.className = "comic-date";
      date.id = "comic-date";
      const releaseDate = moment({
        year: comicData.year,
        month: comicData.month - 1,
        day: comicData.day,
      });
      date.textContent = releaseDate.toDate().toLocaleDateString();
      container.appendChild(date);
      const timeAgo = releaseDate.fromNow();
      const timeElement = document.createElement("p");
      timeElement.className = "comic-date";
      timeElement.id = "comic-date";
      timeElement.textContent = `Released ${timeAgo}`;
      container.appendChild(timeElement);
      const image = document.createElement("img");
      image.id = "comic-image";
      container.appendChild(image);
      image.src = comicData.img;
      image.alt = comicData.alt;
    });
}
