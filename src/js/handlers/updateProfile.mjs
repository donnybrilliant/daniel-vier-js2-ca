import { read, update } from "../api/profiles/index.mjs";

export async function updateProfileListener() {
  const form = document.querySelector("#updateProfileForm");

  const url = new URL(location.href);
  const username = url.searchParams.get("name");

  if (form) {
    const button = form.querySelector("button[type='submit']");
    button.disabled = true; // do i need these here?

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

      console.log(profile);
      update(profile);
    });
  }
}
