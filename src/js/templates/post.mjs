import { checkAuthorPost } from "./author.mjs";
import { checkAvatar } from "./avatar.mjs";
import { checkComments } from "./comments.mjs";
import { checkMedia } from "./media.mjs";
import { checkTags } from "./tags.mjs";

export function postTemplate(data) {
  return `<div id="${
    data.id
  }" class="my-3 p-3 bg-light rounded border shadow-sm">
    <div class="d-flex justify-content-between align-items-center pb-2 border-bottom">
    <h5 class="mb-0"><a href="/feed/?id=${
      data.id
    }" class="link-dark text-decoration-none">${data.title}</a></h5>
    <div>
    ${checkTags(data)}
    ${checkAuthorPost(data)}
    </div>
    </div>

    ${checkMedia(data)}

    <div class="d-flex pt-3">
    <a href="/profile/?name=${data.author.name}">${checkAvatar(data.author)}</a>

        <p class="pb-3 mb-0 small lh-sm border-bottom">
            <strong class="d-block"><a class="text-decoration-none" href="/profile/?name=${
              data.author.name
            }">@${data.author.name}</a></strong>
            ${data.body}
        </p>
    </div>

    <div class="row row-cols-3 mt-3">

        <button class="btn" type="button" data-bs-toggle="collapse" data-bs-target="#collapseReactions-${
          data.id
        }"
            aria-expanded="false" aria-controls="collapseReactions-${
              data.id
            }"><i
                class="bi bi-hand-thumbs-up-fill me-1"></i>
            ${data._count.reactions} Reactions</button>
        <button class="btn" type="button" data-bs-toggle="collapse"
            data-bs-target="#collapseComments-${data.id}" aria-expanded="false"
            aria-controls="collapseComments-${
              data.id
            }"><i class="bi bi-chat-text-fill me-1"></i>
            ${data._count.comments} Comments</button>
        <button class="btn" data-bs-toggle="modal" data-bs-target="#shareModal"><i
                class="bi bi-share-fill me-1"></i> Share</button>
    </div>

    

    <div class="collapse" id="collapseComments-${data.id}">
        <form class="py-3 mt-3">
            <input class="form-control shadow-sm" type="text" placeholder="Comment"
                aria-label="Comment">
        </form>
            ${checkComments(data)}

    </div>
    <div class="collapse" id="collapseReactions-${data.id}">
        <div class="d-flex mt-2">
            <svg class="bd-placeholder-img flex-shrink-0 me-2 rounded" width="32" height="32"
                xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 32x32"
                preserveAspectRatio="xMidYMid slice" focusable="false">
                <title>Placeholder</title>
                <rect width="100%" height="100%" fill="#e83e8c"></rect><text x="50%" y="50%"
                    fill="#e83e8c" dy=".3em">32x32</text>
            </svg>
            <div class="mt-1">197 likes</div>
        </div>
    </div>
</div>`;
}

export function renderPostTemplate(data, parent) {
  parent.innerHTML = postTemplate(data);
}

export function renderPostTemplates(dataList, parent) {
  parent.innerHTML = "";
  dataList.forEach((element) => {
    parent.innerHTML += postTemplate(element);
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
