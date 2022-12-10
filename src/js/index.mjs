import * as listener from "./handlers/index.mjs";
import * as posts from "./api/posts/index.mjs";
import * as templates from "./templates/index.mjs";

listener.setRegisterFormListener();
listener.setLoginFormListener();
listener.createPostListener();
listener.updatePostListener();

async function testTemplate() {
  const allPosts = await posts.readAll();
  const parent = document.querySelector("#feed");
  templates.renderPostTemplates(allPosts, parent);
}

testTemplate();
