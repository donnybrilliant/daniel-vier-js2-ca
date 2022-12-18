import { checkAvatar } from "./avatar.mjs";

/**
 * Template for users followers
 * @param {object} data A user object
 * @returns HTML for one follower
 */
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

/**
 * Renders all followers
 * @param {object} dataList Array of followers
 * @param {element} parent HMTL element you want to render to
 */

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

/**
 * Renders all whom user is following
 * @param {object} dataList Array of followers
 * @param {element} parent HMTL element you want to render to
 */
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
