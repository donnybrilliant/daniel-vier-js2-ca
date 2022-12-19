import { checkAvatar } from "./avatar.mjs";

/**
 * Template for suggestions on who to follow
 * @param {object} data User object
 * @returns HTML for a single user
 */
export function suggestionsTemplate(data) {
  return `<div class="row flex-grow-1 px-4 pb-3">

  <div class="d-flex pt-3">

    
    <a href="/profile/?name=${data.name}">${checkAvatar(data)}</a>

      <div class="pb-3 mb-0 small lh-sm border-bottom w-100">
          <div class="d-flex justify-content-between">
              <strong><a class="text-decoration-none link-dark" href="/profile/?name=${
                data.name
              }">${data.name}</strong>
              <a class="follow" href="#">Follow</a>
          </div>
        
      </div>
  </div>`;
}

/**
 * Renders all users
 * @param {object} dataList Array of user profiles
 * @param {element} parent HMTL element you want to render to
 */
export function renderSuggestionTemplate(dataList, parent) {
  parent.innerHTML = "";
  dataList.forEach((element) => {
    parent.innerHTML += suggestionsTemplate(element);
  });
}
