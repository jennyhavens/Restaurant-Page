const contactPage = document.createElement("div");

const about = document.createElement("div");
about.classList.add("about");
contactPage.appendChild(about);

const aboutTitle = document.createElement("h1");
aboutTitle.textContent = "About Us";
about.appendChild(aboutTitle);

const aboutContent = document.createElement("p");
aboutContent.textContent =
  "We love fresh food with fresh ingredients! Can you tell? Family owned abnd operated, we love to share are passion for good fresh food with others. Our ingredients are only the freshest available. Enjoy our ever changing menu as the seasons and ingredients change too!";
about.appendChild(aboutContent);

const contactInfo = document.createElement("div");
contactInfo.classList.add("contact-info");
contactPage.appendChild(contactInfo);

const contactTitle = document.createElement("h1");
contactTitle.textContent = "Contact Us";

const location = document.createElement("p");
location.textContent = "Fake address here";
contactInfo.appendChild(location);

const hours = document.createElement("p");
hours.textContent =
  "Monday: Closed Tuesday: 10am - 10pm Wednesday: 10am - 10pm Thursday: 10am - 10pm Friday: 10am - 12pm Saturday: 10am - 12pm Sunday: 10am - 8pm";
contactInfo.appendChild(hours);

const email = document.createElement("p");
email.textContent = "Email: FreshFood@fakemail.com";
contactInfo.appendChild(email);

const phone = document.createElement("p");
phone.textContent = "Phone: 111-222-3333";
contactInfo.appendChild(phone);

export { contactPage };
