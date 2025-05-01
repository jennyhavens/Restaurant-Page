import { homePage } from "./home.js";
import { contactPage } from "./contact.js";
import { menuPage } from "./menu.js";

import "./styles.css";

const btn = document.querySelectorAll("button");
const cont = document.getElementById("content");

cont.appendChild(homePage);
let last = homePage;

btn.forEach((button) => {
  button.addEventListener("click", () => {
    let action = button.className;
    if (action == "home") {
      cont.removeChild(last);
      cont.appendChild(homePage);
      last = homePage;
    } else if (action == "contact") {
      cont.removeChild(last);
      cont.appendChild(contactPage);
      last = contactPage;
    } else if (action == "menu") {
      cont.removeChild(last);
      cont.appendChild(menuPage);
      last = menuPage;
    }
  });
});
