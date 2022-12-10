import { create } from "../api/posts/index.mjs";

export function createPostListener() {
  const form = document.querySelector("#newPostForm");

  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const formData = new FormData(form);
      const post = Object.fromEntries(formData.entries());
      post.tags = Array.from(post.tags.split(","));
      create(post);
    });
  }
}
