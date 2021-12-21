/* $ as prefix when it is a DOM element */

const body = document.querySelector("body");
const nav = document.querySelector(".nav");
const menu = document.querySelector(".nav__menu");
const menuButton = document.querySelector(".menu__icon--hamburger");
const closeButton = document.querySelector(".menu__icon--close");
const form = document.querySelector("#contact-form");
const mailTo = document.querySelector("#mail-to");
form.addEventListener("submit", handleSubmit);


window.onscroll = function() {
    this.scrollY > 20 ? nav.classList.add("sticky") : nav.classList.remove("sticky");
}

/* Show menu links */
function showMenu() {
    menu.classList.add("nav__menu--active");
    menuButton.classList.add("hide");
    closeButton.classList.add("show");
    body.classList.add("disabledScroll");
}

/* Hide menu links */
function hideMenu() {
    menu.classList.remove("nav__menu--active");
    menuButton.classList.remove("hide");
    closeButton.classList.remove("show");
    body.classList.remove("disabledScroll");
}

/* Cv*/
function goGoogleDrive() {
    window.open("https://drive.google.com/drive/folders/1_8ipTGiQAIcm8b2hJ5cJZSRJukYl70rt?usp=sharing", "_blank");
}


/* Form */
function handleSubmit(event) {
    event.preventDefault() /* Avoid reloading the page */
    const forminfo = new FormData(this);
    mailTo.setAttribute("href", `mailto:agladinop@gmail.com?subject=${forminfo.get("name")} - ${forminfo.get("subject")} &body= ${forminfo.get("email")} - ${forminfo.get("message")}`);
    mailTo.click();
    form.reset();
}