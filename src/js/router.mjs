import { load } from "./storage/index.mjs";
import * as listener from "./handlers/index.mjs";
import * as render from "./render/index.mjs";

const user = load("userDetails");
const accessToken = load("accessToken");
const path = location.pathname;

/**
 * Router for application
 */
export function router() {
  if (
    (accessToken && path === "/") ||
    (accessToken && path === "/index.html")
  ) {
    location.href = "/feed/";
  }
  if (
    (!accessToken && path === "/feed/") ||
    (!accessToken && path === "/profile")
  ) {
    location.href = "../../index.html";
  }
  if (accessToken) {
    listener.setLogoutListener();
  }
  if (user) {
    listener.setProfileLinkListener();
  }
  if (path === "/" || path === "/index.html") {
    listener.setLoginFormListener();
    listener.setRegisterFormListener();
  } else if (path === "/feed/") {
    listener.createPostListener();
    render.suggestions();
    render.feed();
    listener.setSortHandler();
  } else if (path === "/profile/") {
    listener.createPostListener();
    listener.updateProfileListener();
    render.followers();
    render.profile();
  }
}
