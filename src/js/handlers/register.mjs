import { register } from "../api/auth/register.mjs";
import { renderResponse } from "../templates/responseHandler.mjs";

export function setRegisterFormListener() {
  const form = document.querySelector("#registerForm");

  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const form = event.target;
      const formData = new FormData(form);
      const userDetails = Object.fromEntries(formData.entries());
      renderResponse(register(userDetails), form);
    });
  }
}
