import { getProfile } from "../api/profile/getProfile.mjs";
import { load } from "../storage/load.mjs";
import { renderSingelCardTemplates } from "../ui/components/card.mjs";
import { renderErrorMessage } from "../ui/components/error.mjs";

export async function renderProfilePage() {
  const { name } = load("user");
  const user = await getProfile(name);

  const nameContainer = document.querySelector("#nameContainer");
  const emailContainer = document.querySelector("#emailContainer");
  const creditContainer = document.querySelector("#creditContainer");
  const profileImageContainer = document.querySelector("#profileImageContainer");
  const listingsContainer = document.querySelector("#listingsContainer");
  const listingsCoutContainer = document.querySelector("#listingsCountContainer");
  const winsContainer = document.querySelector("#winsContainer");

  nameContainer.innerText += user.name;
  emailContainer.innerText += user.email;
  creditContainer.innerText += user.credits;
  listingsCoutContainer.innerText += user._count.listings;

  if (user.avatar) {
    profileImageContainer.src = user.avatar;
  } else {
    profileImageContainer.src = "/images/avatar.png";
  }
  renderSingelCardTemplates(user.listings, listingsContainer);

  if (Array.isArray(user.listings) && user.listings.length === 0) {
    renderErrorMessage("You don't have any listings yet", listingsContainer);
  } else {
    renderSingelCardTemplates(user.listings, listingsContainer);
  }

  if (Array.isArray(user.wins) && user.wins.length === 0) {
    renderErrorMessage("You don't have any wins yet", winsContainer);
  } else {
    renderSingelCardTemplates(user.listings, winsContainer);
  }
}
