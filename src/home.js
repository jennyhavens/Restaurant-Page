import restPic from "/images/restaurant.jpg";

const homePage = document.createElement("div");
homePage.classList.add("home-page");

const restaurantPic = document.createElement("img");
restaurantPic.classList.add("rest-pic");
restaurantPic.src = restPic;
homePage.appendChild(restaurantPic);

const headContainer = document.createElement("div");
headContainer.classList.add("head-container");
homePage.appendChild(headContainer);

const headLine = document.createElement("p");
headLine.classList.add("headline");
headLine.textContent =
  "Food so fresh it's like it's picked straight from your garden.";
headContainer.appendChild(headLine);

export { homePage };
