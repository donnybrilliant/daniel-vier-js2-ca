import { load } from "../storage/index.mjs";

const author = load("userDetails");

/**
 * Checks if profile is the logged in users and adds Edit profile button to profile page.
 * @param {object} data User object
 * @returns a button
 */
export function checkAuthorProfile(data) {
  if (author.name === data.name) {
    return `<button type="button" class="btn btn-outline-secondary" data-bs-toggle="modal"
    data-bs-target="#updateProfileModal">
    <i class="bi bi-pencil-square"></i> Edit profile</button>`;
  } else return "";
}

/**
 * Checks if post is author and if it has an id.
 * Then adds an edit button to the post.
 * @param {object} data
 * @returns a button
 */
export function checkAuthorPost(data) {
  const url = new URL(location.href);
  const id = url.searchParams.get("id");

  if (id && author.name === data.author.name) {
    return `<button id="${data.id}" type="button" class="editButton btn btn-outline-secondary" data-bs-toggle="modal"
    data-bs-target="#updatePostModal">
    <i class="bi bi-pencil-square"></i></button>`;
  } else return "";
}
