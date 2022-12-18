import * as listener from "./handlers/index.mjs";
import * as posts from "./api/posts/index.mjs";
import * as templates from "./templates/index.mjs";
import * as profiles from "./api/profiles/index.mjs";
import { router } from "./router.mjs";

// its own function?

listener.updateProfileListener();
listener.setLogoutListener();
listener.setRegisterFormListener();
listener.setLoginFormListener();
listener.updatePostListener();

async function testTemplate() {
  const allPosts = await posts.readAll();
  const parent = document.querySelector("#feed");
  templates.renderPostTemplates(allPosts, parent);
}

testTemplate();

//console.log(await profiles.readAll());
/* router();
 */

async function testSuggestions() {
  const allProfiles = await profiles.readAll();
  const parent = document.querySelector("#suggestions");
  templates.renderSuggestionTemplate(allProfiles, parent);
}

testSuggestions();

async function testProfile() {
  const url = new URL(location.href);
  const userName = url.searchParams.get("name");

  const profileInfo = await profiles.read(userName);
  const profileInfoContainer = document.querySelector("#profileInfo");
  templates.renderProfileTemplate(profileInfo, profileInfoContainer);

  const profilePosts = await profiles.readPosts(userName);
  const postsContainer = document.querySelector("#profilePosts");
  templates.renderPostTemplates(profilePosts, postsContainer);
  listener.updatePostListener();
}

testProfile();

async function testFollowers() {
  const url = new URL(location.href);
  const userName = url.searchParams.get("name");
  const profileInfo = await profiles.read(userName);
  const container = document.querySelector("#followers");
  templates.renderFollowersTemplate(profileInfo.followers, container);
  const followersButton = document.querySelector("#followersButton");
  followersButton.addEventListener("click", (event) => {
    templates.renderFollowersTemplate(profileInfo.followers, container);
  });
  const followingButton = document.querySelector("#followingButton");
  followingButton.addEventListener("click", (event) => {
    templates.renderFollowingTemplate(profileInfo.following, container);
  });
}

testFollowers();

listener.profileLinkListener();

async function testSinglePost() {
  const url = new URL(location.href);
  const id = url.searchParams.get("id");
  const container = document.querySelector("#feed");
  if (id) {
    const post = await posts.read(id);
    templates.renderPostTemplate(post, container);
  } else {
    const allPosts = await posts.readAll();
    templates.renderPostTemplates(allPosts, container);
  }
}

testSinglePost();
