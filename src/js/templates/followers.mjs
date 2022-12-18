import { checkAvatar } from "./avatar.mjs";

export function followersTemplate(data) {
  let followers = "";

  followers = `

  <div class="d-flex pt-3">

    
    <a href="/profile/?name=${data.name}">${checkAvatar(data)}</a>

      <div class="pb-3 mb-0 small lh-sm border-bottom w-100">
          <div class="d-flex justify-content-between">
              <strong><a class="text-decoration-none link-dark" href="/profile/?name=${
                data.name
              }">${data.name}</strong>
              <a class="follow" href="#">Follow</a>
          </div>
        
      
  </div>`;
  return followers;
}

/* export function renderFollowersTemplate(data, parent) {
  parent.innerHTML = followersTemplate(data);
} */

export function renderFollowersTemplate(dataList, parent) {
  parent.innerHTML = "";
  if (!dataList.length) {
    parent.innerHTML = `<div class="d-flex pt-3">
  
    <div class="small lh-sm w-100">
     No followers
          
        </div>
    </div>`;
  }
  dataList.forEach((element) => {
    parent.innerHTML += followersTemplate(element);
  });
}

export function renderFollowingTemplate(dataList, parent) {
  parent.innerHTML = "";
  if (!dataList.length) {
    parent.innerHTML = `<div class="d-flex pt-3">
  
    <div class="small lh-sm w-100">
     No following
          
        </div>
    </div>`;
  }
  dataList.forEach((element) => {
    parent.innerHTML += followersTemplate(element);
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
