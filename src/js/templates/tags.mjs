export function checkTags(data) {
  let tags = "";
  data.tags.forEach((element) => {
    tags += `<span class="badge rounded-pill text-bg-primary mx-1">${element}</span>`;
  });
  return tags;
}
