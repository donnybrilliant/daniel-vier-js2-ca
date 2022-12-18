import { checkAvatar } from "./avatar.mjs";

/**
 * Checks if there are comments and adds HTML if there is
 * @param {object} data Comments array of object
 * @returns HTML for each comment
 */

export function checkComments(data) {
  if (data.length > 0) {
    let comments = "";
    data.forEach((comment) => {
      console.log(comment);
      comments += `<div class="d-flex text-muted pt-3">
    <a href="/profile/?name=${comment.author}">${checkAvatar(
        comment.author
      )}</a>

      <p class="pb-3 mb-0 small lh-sm border-bottom">
          <strong class="d-block text-gray-dark"><a href="/profile/?name=${
            comment.author
          }">${comment.author.name}</a></strong>
         ${comment.body}
      </p>
  </div>`;
    });
    return comments;
  } else {
    return "No comments";
  }
}
