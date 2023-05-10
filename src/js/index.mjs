import { header } from "./ui/header/header.mjs";
import * as liseners from "./handlers/index.mjs";
import * as pages from "./pages/index.mjs";

header();

const path = location.pathname;
switch (path) {
  case "/":
    liseners.logoutLisener();
    pages.renderHomePage();
    break;
  case "/profile/login/":
    liseners.submitLoginForm();
    break;

  case "/profile/register/":
    liseners.submitRegisterForm();
    break;

  case "/profile/":
    liseners.logoutLisener();
    liseners.submitUpdateProfileAvatarForm();
    liseners.submitAddListingForm();
    pages.renderProfilePage();
    break;
  case "/listings/":
    liseners.logoutLisener();
    pages.renderListingsPage();
    break;

  case "/listings/single-listing/":
    liseners.logoutLisener();
    liseners.submitAddBidForm();
    pages.renderSingleListingPage();
    break;
}
