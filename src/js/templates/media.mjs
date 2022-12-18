/**
 * Checks if the post has an image
 * @param {object} data Takes a single post object
 * @returns An image if there is one and an empty string if there is none
 */

export function checkMedia(data) {
  let image = "";
  if (data.media) {
    image = `<img src="${data.media}" class="img-fluid" alt="Image from ${data.title}">`;
    return image;
  } else {
    image = "";
    return image;
  }
}
