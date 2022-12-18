import * as posts from "../api/posts/index.mjs";

/**
 * Reads post by ID, sets values to form input.
 * Can delete post or update post.
 * Could also be split into modules
 */
export async function updatePostListener() {
  const form = document.querySelector("#updatePostForm");

  const url = new URL(location.href);
  const id = url.searchParams.get("id");

  if (form) {
    const submitButton = form.querySelector("button[type='submit']");
    const deleteButton = form.querySelector("button#deleteButton");
    deleteButton.disabled = true;
    submitButton.disabled = true;

    const data = await posts.read(id);

    form.title.value = data.title;
    form.body.value = data.body;
    form.tags.value = data.tags;
    form.media.value = data.media;

    submitButton.disabled = false;
    deleteButton.disabled = false;

    deleteButton.addEventListener("click", (event) => {
      event.preventDefault();
      posts.remove(id);
      //successmessage
    });

    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const form = event.target;
      const formData = new FormData(form);
      const post = Object.fromEntries(formData.entries());
      post.id = id;
      post.tags = Array.from(post.tags.split(","));
      posts.update(post);
      // success message
    });
  }
}
