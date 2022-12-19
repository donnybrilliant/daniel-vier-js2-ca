import * as templates from "../templates/index.mjs";
import * as profiles from "../api/profiles/index.mjs";

/**
 * Sends API call to read all profiles
 * Adds them to right element
 */
export async function suggestions() {
  const allProfiles = await profiles.readAll();
  const parent = document.querySelector("#suggestions");
  templates.renderSuggestionTemplate(allProfiles, parent);
}
