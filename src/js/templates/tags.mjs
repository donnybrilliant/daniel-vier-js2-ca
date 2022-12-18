/**
 * Loops through the tags array of an object
 * @param {object} data A Single post object
 * @returns HTML for tags
 */
export function checkTags(data) {
  let tags = "";
  data.tags.forEach((element) => {
    tags += `<span class="badge rounded-pill text-bg-primary mx-1">${element}</span>`;
  });
  return tags;
}
