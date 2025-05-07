import bruschettaPic from "../images/bruschettaPic.jpg";
import eggsPic from "../images/eggsPic.jpg";
import chipsPic from "../images/chipsPic.jpg";
import pastaPic from "../images/pastaPic.jpg";
import chickenPic from "../images/chickenPic.jpg";
import salmonPic from "../images/salmonPic.jpg";
import cakePic from "../images/cakePic.jpg";
import puddingPic from "../images/puddingPic.jpg";

const categories = {
  Appetizers: [
    {
      image: bruschettaPic,
      title: "Bruschetta",
      price: "$12.00",
    },
    {
      image: eggsPic,
      title: "Deviled Eggs",
      price: "10.00",
    },
    {
      image: chipsPic,
      title: "Chips and Dip",
      price: "$8.00",
    },
  ],

  "Main Course": [
    {
      image: pastaPic,
      title: "Pasta Dish",
      price: "$18.00",
    },
    {
      image: chickenPic,
      title: "Chicken Dish",
      price: "$22.00",
    },
    {
      image: salmonPic,
      title: "Salmon Dish",
      price: "$28.00",
    },
  ],
  Dessert: [
    {
      image: cakePic,
      title: "Strawberry Cheesecake",
      price: "$10.00",
    },
    {
      image: puddingPic,
      title: "Chocolate Pudding",
      price: "$8.00",
    },
  ],
};

const menuPage = document.createElement("div");

for (let category in categories) {
  let section = document.createElement("div");
  section.classList.add("menu-section");
  menuPage.appendChild(section);

  let title = document.createElement("h1");
  title.textContent = category;
  section.appendChild(title);

  let items = document.createElement("div");
  items.classList.add("menu-items");
  section.appendChild(items);

  for (let food of categories[category]) {
    let card = document.createElement("div");
    card.classList.add("menu-card");
    items.appendChild(card);

    let dishPic = document.createElement("img");
    dishPic.src = food["image"];
    dishPic.classList.add("dish-pic");
    card.appendChild(dishPic);

    let dishTitle = document.createElement("p");
    dishTitle.textContent = food.title;
    dishTitle.classList.add("dish-title");
    card.appendChild(dishTitle);

    let dishPrice = document.createElement("p");
    dishPrice.textContent = food.price;
    dishPrice.classList.add("dish-price");
    card.appendChild(dishPrice);
  }
}

export { menuPage };
