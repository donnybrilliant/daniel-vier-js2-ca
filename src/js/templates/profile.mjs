import { checkAuthorProfile } from "./author.mjs";

/**
 * Template for user profile
 * @param {object} data User object
 * @returns HTML for user profile
 */
export function profileTemplate(data) {
  if (data.avatar) {
    const avatar = document.querySelector("#avatar");
    avatar.src = data.avatar;
    avatar.alt = data.name + "'s avatar";
  }

  if (data.banner) {
    const bannerContainer = document.querySelector("#banner");
    const banner = document.createElement("img");
    banner.src = data.banner;
    banner.alt = data.name + "'s banner";
    bannerContainer.prepend(banner);
  }

  const editButton = document.createElement("div");
  editButton.innerHTML = checkAuthorProfile(data);
  const avatar = document.querySelector("#avatarContainer");
  avatar.appendChild(editButton);

  return `<h5 class="mt-5">@${data.name}</h5>

  <p class="blockquote-footer my-3">
      ${data.email}
  </p>

  <p class="border-bottom">${data._count.followers} followers</p>
  <p class="border-bottom">${data._count.following} following</p>
  <p class="border-bottom">${data._count.posts} posts</p>`;
}

/**
 * Renders the users profile page to a parent element
 * @param {object} data User object
 * @param {element} parent HTML element
 */
export function renderProfileTemplate(data, parent) {
  parent.innerHTML = profileTemplate(data);
}
