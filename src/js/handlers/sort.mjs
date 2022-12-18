import * as render from "../render/sort.mjs";

export function setSortHandler() {
  const followingButton = document.querySelector("a#follwing");
  const newToOldButton = document.querySelector("a#new");
  const oldToNewButton = document.querySelector("a#old");
  const titleAscButton = document.querySelector("a#titleAsc");
  const titleDescButton = document.querySelector("a#titleDesc");

  followingButton.addEventListener("click", (event) => {
    render.sortByFollowing();
  });

  oldToNewButton.addEventListener("click", (event) => {
    render.sort("created", "asc");
  });

  newToOldButton.addEventListener("click", (event) => {
    render.sort("created", "desc");
  });

  titleDescButton.addEventListener("click", (event) => {
    render.sort("title", "desc");
  });

  titleAscButton.addEventListener("click", (event) => {
    render.sort("title", "asc");
  });
}
