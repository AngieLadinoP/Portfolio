/* $ as prefix when it is a DOM element */

/* header responsive */
const body = document.querySelector("body");
const nav = document.querySelector(".nav");
const menu = document.querySelector(".nav__menu");
const menuButton = document.querySelector(".menu__icon--hamburger");
const closeButton = document.querySelector(".menu__icon--close");

menuButton.onclick = () => {
    menu.classList.add("nav__menu--active");
    menuButton.classList.add("hide");
    closeButton.classList.add("show");
    body.classList.add("disabledScroll");
}
closeButton.onclick = () => {
    menu.classList.remove("nav__menu--active");
    menuButton.classList.remove("hide");
    closeButton.classList.remove("show");
    body.classList.remove("disabledScroll");
}

window.onscroll = () => {
    this.scrollY > 20 ? nav.classList.add("sticky") : nav.classList.remove("sticky");
}


/* Form */
const $form = document.querySelector("#contact-form")
const $mailTo = document.querySelector("#mail-to")
$form.addEventListener("submit", handleSubmit)

function handleSubmit(event) {
    event.preventDefault() /* Avoid reloading the page */
    const form = new FormData(this)
    $mailTo.setAttribute("href", `mailto:agladinop@gmail.com?subject=${form.get("name")} - ${form.get("subject")} &body= ${form.get("email")} - ${form.get("message")}`);
    $mailTo.click();
    $form.reset();
}