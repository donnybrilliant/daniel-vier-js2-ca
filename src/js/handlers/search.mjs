import { renderPostTemplates } from "../templates/post.mjs";

/**
 * Search function - should be split into modules
 * @param {object} posts
 */

export function setSearchListener(posts) {
  const searchInput = document.querySelector("#searchInput");
  const container = document.querySelector("#feed");

  searchInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
    }
  });

  searchInput.addEventListener("keyup", (event) => {
    event.preventDefault();
    const searchTerm = searchInput.value;

    const filteredPosts = posts.filter((post) => {
      const term = searchTerm.toLowerCase();
      const title = post.title.toLowerCase();
      const body = post.body ? post.body.toLowerCase() : "";
      const author = post.author.name.toLowerCase();
      const tags = Boolean(
        post.tags
          .map((tag) => tag.toLowerCase())
          .filter((tag) => tag.includes(term)).length
      );

      return (
        title.includes(term) ||
        body.includes(term) ||
        author.includes(term) ||
        tags
      );
    });

    if (filteredPosts.length === 0) {
      container.innerHTML = "<div>No results found</div>";
    } else {
      renderPostTemplates(filteredPosts, container);
    }
  });
}
