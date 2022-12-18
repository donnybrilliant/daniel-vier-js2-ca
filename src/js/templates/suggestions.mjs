import { checkAvatar } from "./avatar.mjs";

export function suggestionsTemplate(data) {
  return `<div class="row flex-grow-1 px-4 pb-3">

  <div class="d-flex pt-3">

    
    <a href="/profile/?name=${data.name}">${checkAvatar(data)}</a>

      <div class="pb-3 mb-0 small lh-sm border-bottom w-100">
          <div class="d-flex justify-content-between">
              <strong><a class="text-decoration-none link-dark" href="/profile/?name=${
                data.name
              }">${data.name}</strong>
              <a href="#">Follow</a>
          </div>
        
      </div>
  </div>`;
}

/* export function renderSuggestionTemplate(data, parent) {
  parent.innerHTML = suggestionsTemplate(data);
} */

export function renderSuggestionTemplate(dataList, parent) {
  parent.innerHTML = "";
  dataList.forEach((element) => {
    parent.innerHTML += suggestionsTemplate(element);
  });
}

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
