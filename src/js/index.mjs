import { setRegisterFormListener } from "./handlers/register.mjs";
import { setLoginFormListener } from "./handlers/login.mjs";

import * as posts from "./api/posts/index.mjs";

setRegisterFormListener();
setLoginFormListener();

posts.readAll().then(console.log);

posts.read(739).then(console.log);
