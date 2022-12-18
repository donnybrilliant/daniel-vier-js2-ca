import { update, read } from "../api/posts/index.mjs";

export async function updatePostListener() {
  const form = document.querySelector("#updatePostForm");

  // get this from the rendered post. -data?
  const url = new URL(location.href);
  const id = url.searchParams.get("id");

  // set searchparams on buttonclick??

  if (form) {
    const submitButton = form.querySelector("button[type='submit']");
    const deleteButton = form.querySelector("button#deleteButton");
    deleteButton.disabled = true;
    submitButton.disabled = true;

    const data = await read(id);

    form.title.value = data.title;
    form.body.value = data.body;
    form.tags.value = data.tags;
    form.media.value = data.media;

    submitButton.disabled = false;
    deleteButton.disabled = false;

    form.addEventListener("submit", (event) => {
      //use something like this instead of searchparams?
      //console.log(event.target.id);
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
