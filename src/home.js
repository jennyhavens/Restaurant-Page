const homePage = document.createElement("div");

const restTitleOne = document.createElement("h1");
restTitleOne.textContent = "Fresh Food";
homePage.appendChild(restTitleOne);

const restTitleTwo = document.createElement("h2");
restTitleTwo.textContent = "picked straight from your garden";
homePage.appendChild(restTitleTwo);

homePage.classList.add("home-titles");

export { homePage };
