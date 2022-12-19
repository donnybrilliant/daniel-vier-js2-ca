import { login } from "../api/auth/login.mjs";

/**
 * Listens for submit on login form and sends details to login function.
 */
export function setLoginFormListener() {
  const form = document.querySelector("#loginForm");

  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const form = event.target;
      const formData = new FormData(form);
      const userDetails = Object.fromEntries(formData.entries());
      login(userDetails);
    });
  }
}
