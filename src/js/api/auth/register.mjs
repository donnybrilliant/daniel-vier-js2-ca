import { URL } from "../constants.mjs";
import { responseHandler } from "../../templates/responseHandler.mjs";

export async function register(userDetails) {
  const registerURL = URL + "/auth/register";
  const method = "post";
  const body = JSON.stringify(userDetails);

  const response = await fetch(registerURL, {
    headers: {
      "Content-Type": "application/json",
    },
    method,
    body,
  });

  responseHandler(response);

  const result = await response.json();
  return result;
  // success message
}

/* const alertPlaceholder = document.getElementById('liveAlertPlaceholder')

const alert = (message, type) => {
  const wrapper = document.createElement('div')
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>'
  ].join('')

  alertPlaceholder.append(wrapper) */
