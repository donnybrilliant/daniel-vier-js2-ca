import { register } from "../api/auth/register.mjs";

/**
 * Looks for a submit on the register user form and submits the data to the register function
 */
export function setRegisterFormListener() {
  const form = document.querySelector("#registerForm");

  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const form = event.target;
      const formData = new FormData(form);
      const userDetails = Object.fromEntries(formData.entries());
      register(userDetails);
    });
  }
}
