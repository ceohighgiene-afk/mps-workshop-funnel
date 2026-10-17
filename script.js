const form = document.querySelector("#interest-form");
const message = document.querySelector("#form-message");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!form.reportValidity()) return;
  message.textContent = "Thanks for your request. This preview does not send or save your details, and your consultation time is not reserved. Connect a booking or contact service before sharing this page with learners.";
  form.reset();
});

document.querySelector("#year").textContent = new Date().getFullYear();
