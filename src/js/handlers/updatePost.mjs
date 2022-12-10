import { update, read } from "../api/posts/index.mjs";

export async function updatePostListener() {
  const form = document.querySelector("#updatePostForm");

  const url = new URL(location.href);
  const id = url.searchParams.get("id");

  if (form) {
    const button = form.querySelector("button[type='submit']");
    button.disabled = true; // do i need these here?

    const data = await read(id);

    form.title.value = data.title;
    form.body.value = data.body;
    form.tags.value = data.tags;
    form.media.value = data.media;

    button.disabled = false;

    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const form = event.target;
      const formData = new FormData(form);
      const post = Object.fromEntries(formData.entries());
      post.id = id;
      post.tags = Array.from(post.tags.split(","));

      console.log(post);
      update(post);
    });
  }
}
