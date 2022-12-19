import { read, update } from "../api/profiles/index.mjs";

/**
 * Updates profile media
 * Sets porifle values to inputs.
 * Listens for submit and send put request to API
 */
export async function updateProfileListener() {
  const form = document.querySelector("#updateProfileForm");

  const url = new URL(location.href);
  const username = url.searchParams.get("name");

  if (form) {
    const button = form.querySelector("button[type='submit']");
    button.disabled = true;

    const data = await read(username);

    form.name.value = data.name;
    form.email.value = data.email;
    form.banner.value = data.banner;
    form.avatar.value = data.avatar;

    button.disabled = false;

    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const form = event.target;
      const formData = new FormData(form);
      const profile = Object.fromEntries(formData.entries());
      profile.name = data.name;
      update(profile);
      // successmessage
    });
  }
}
