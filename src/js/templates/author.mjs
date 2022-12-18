import { load } from "../storage/index.mjs";

const author = load("userDetails");

export function checkAuthorProfile(data) {
  if (author.name === data.name) {
    return `<button type="button" class="btn btn-outline-secondary" data-bs-toggle="modal"
    data-bs-target="#updateProfileModal">
    <i class="bi bi-pencil-square"></i> Edit profile</button>`;
  } else return "";
}

export function checkAuthorPost(data) {
  if (author.name === data.author.name) {
    return `<button id="${data.id}" type="button" class="editButton btn btn-outline-secondary" data-bs-toggle="modal"
    data-bs-target="#updatePostModal">
    <i class="bi bi-pencil-square"></i></button>`;
  } else return "";
}
