const categories = {
  Appetizers: [
    {
      image: "",
      title: "Bruchetta",
      price: "$12.00",
    },
    {
      image: "",
      title: "Deviled Eggs",
      price: "10.00",
    },
    {
      image: "",
      title: "Chips and Dip",
      price: "$8.00",
    },
  ],

  "Main Course": [
    {
      image: "",
      title: "Pasta Dish",
      price: "$18.00",
    },
    {
      image: "",
      title: "Chicken Dish",
      price: "$22.00",
    },
    {
      image: "",
      title: "Seafood Dish",
      price: "$28.00",
    },
  ],
  Dessert: [
    {
      image: "",
      title: "Fresh Strawberry Cake",
      price: "$10.00",
    },
    {
      image: "",
      title: "Chocolate Pudding",
      price: "$8.00",
    },
  ],
};

const menuPage = document.createElement("div");
menuPage.classList.add("menu");

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

    let pic = document.createElement("img");
    pic.src = food["image"];
    card.appendChild(pic);

    let name = document.createElement("p");
    name.textContent = food.title;
    card.appendChild(name);

    let price = document.createElement("p");
    price.textContent = food.price;
    card.appendChild(price);
  }
}

export { menuPage };
