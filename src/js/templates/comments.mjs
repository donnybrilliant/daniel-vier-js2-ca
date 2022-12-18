import { checkAvatar } from "./avatar.mjs";

// some other method??

export function checkComments(data) {
  let commentString = "";
  if (data.comments.length > 0) {
    data.comments.forEach((comment) => {
      commentString = `${comment.body}`;
      return commentString;
    });
  } else {
    return "No comments";
  }
}
