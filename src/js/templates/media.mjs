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
