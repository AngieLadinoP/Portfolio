/* $ as prefix when it is a DOM element */

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