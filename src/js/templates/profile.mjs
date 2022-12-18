import { checkAuthorProfile } from "./author.mjs";

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

export function renderProfileTemplate(data, parent) {
  parent.innerHTML = profileTemplate(data);
}

/* export function renderProfileTemplates(dataList, parent) {
  parent.innerHTML = "";
  dataList.forEach((element) => {
    parent.innerHTML += profileTemplate(element);
  });
} */

/* export function postTemplate(data) {
  const post = document.createElement("div");
  post.classList.add(
    "my-3",
    "p-3",
    "bg-light",
    "rounded",
    "border",
    "shadow-sm"
  );
  const h6 = document.createElement("h6");
  h6.innerText = data.title;
  post.appendChild(h6);
  if (data.media) {
    const img = document.createElement("img");
    img.src = data.media;
    img.classList.add("img-fluid");
    post.appendChild(img);
  }

  const bodyContainer = document.createElement("div");
  bodyContainer.classList.add("d-flex", "text-muted", "pt-3");

    if (data.author.avatar) {
    const userImage = document.createElement("img");
    userImage.src = data.author.avatar;
    bodyContainer.appendChild(userImage);
  } 

  const bodyParagraph = document.createElement("p");
  const userName = document.createElement("strong");
  userName.classList.add("d-block", "text-gray-dark");
  userName.innerText = data.author;
  bodyParagraph.appendChild(userName);
  bodyParagraph.innerText = data.body;

  bodyContainer.appendChild(bodyParagraph);

  post.appendChild(bodyContainer);

  return post;
}

export function renderPostTemplate(data, parent) {
  parent.append(postTemplate(data));
}

export function renderPostTemplates(dataList, parent) {
  parent.append(...dataList.map(postTemplate));
}
 */
