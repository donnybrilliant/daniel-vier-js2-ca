import * as profiles from "./api/profiles/index.mjs";
import { load } from "./storage/index.mjs";
import * as listener from "./handlers/index.mjs";

/* const url = new URL(location.href);
const queryName = url.searchParams.get("name");
const accessToken = load("accessToken");
// const user = load("userDetails").name; */

const path = location.pathname;

//switch case
export function router() {
  if (path === "/" || path === "/index.html") {
  }

  /*   if (
    (path === "/index.html" && accessToken) ||
    (path === "/" && accessToken)
  ) {
    window.location.href = "/profile/?name="; //+ user;
  } else if (path === "/") {
    listener.setRegisterFormListener();
    listener.setLoginFormListener();
  } else if (path === "/feed/" || path === "/profile/") {
    listener.createPostListener();
  } else if (path === "/profile/" && queryName) {
    const profile = profiles.read(queryName);
    console.log(profile);
  } else {
    console.log("no");
  } */
}

/* if (path === "/profile/") {
    window.location.search = "?name=" + user;
  } */

/*   if (path !== "/") {
    listener.setLogoutListener();
  } */
