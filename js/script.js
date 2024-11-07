// # elements

const cardImg = document.querySelectorAll(".card-img");
const cardTitle = document.querySelectorAll(".card-title");

const overlay = document.getElementById("overlay");
const closeIcon = document.getElementById("close-icon");
const imgBig = document.getElementById("img-big-container");

// console.log(typeof cardImg, cardImg);
// console.log(typeof cardTitle, cardTitle);

let objList;

let cardImgUrl = [];
let cardTitleText = [];

// # api

fetch("https://jsonplaceholder.typicode.com/photos?_limit=6")
  .then((response) => response.json())
  .then((data) => {
    objList = data;
    // console.log(objList);

    objList.forEach((object) => {
      cardImgUrl.push(object.url);
      cardTitleText.push(object.title);
    });

    for (let i = 0; i < objList.length; i++) {
      cardImg[
        i
      ].innerHTML = `<img src="${cardImgUrl[i]}" alt="placeholder img" />`;
      cardTitle[i].innerHTML = `${cardTitleText[i]}`;
    }

    cardImg.forEach((cardImg, i) => {
      cardImg.addEventListener("click", () => {
        overlay.classList.remove("d-none");

        let imgUrl = cardImgUrl[i];
        imgBig.innerHTML = `<img class="img-big" src="${imgUrl}" alt="placeholder img" />`;
      });
    });

    // console.log(typeof cardImgUrl, cardImgUrl);
    // console.log(typeof cardTitleText, cardTitleText);
  });

closeIcon.addEventListener("click", () => {
  overlay.classList.add("d-none");
});
