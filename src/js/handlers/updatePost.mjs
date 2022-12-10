import { update, read } from "../api/posts/index.mjs";

export function updatePostListener() {
  const form = document.querySelector("#updatePostForm");

  const url = new URL(location.href);
  const id = url.searchParams.get("id");

  form.querySelector("#updatePostTitle").value = "Hello";

  if (form) {
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
