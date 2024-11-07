// # elements

const cardImg = document.querySelectorAll(".card-img");
const cardTitle = document.querySelectorAll(".card-title");

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

    // console.log(typeof cardImgUrl, cardImgUrl);
    // console.log(typeof cardTitleText, cardTitleText);
  });
