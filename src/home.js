const homePage = document.createElement("div");
homePage.classList.add("home-page");

const headLine = document.createElement("h1");
headLine.classList.add("headline");
headLine.textContent = "Fresh Food";
homePage.appendChild(headLine);

const subHeadLine = document.createElement("p");
subHeadLine.classList.add("sub-headline");
subHeadLine.textContent = "picked straight from your garden";
homePage.appendChild(subHeadLine);

export { homePage };
