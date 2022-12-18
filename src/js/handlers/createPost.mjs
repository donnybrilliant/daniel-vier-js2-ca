import { create } from "../api/posts/index.mjs";

/**
 * Listens for a submit on #newPostForm and creates a post request to create a new post
 */
export function createPostListener() {
  const form = document.querySelector("#newPostForm");

  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const form = event.target;
      const formData = new FormData(form);
      const post = Object.fromEntries(formData.entries());
      post.tags = Array.from(post.tags.split(","));
      create(post);
    });
  }
}
