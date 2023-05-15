import { header } from "./ui/header/header.mjs";
import * as liseners from "./handlers/index.mjs";
import * as pages from "./pages/index.mjs";

header();

const path = location.pathname;
switch (path) {
  case "/":
    pages.renderHomePage();
    liseners.search();
    liseners.logoutLisener();
    break;

  case "/profile/login/":
    liseners.submitLoginForm();
    break;

  case "/profile/register/":
    liseners.submitRegisterForm();
    break;

  case "/profile/":
    pages.renderProfilePage();
    liseners.search();
    liseners.logoutLisener();
    liseners.submitUpdateProfileAvatarForm();
    liseners.submitAddListingForm();
    break;

  case "/listings/":
    pages.renderListingsPage();
    liseners.search();
    liseners.logoutLisener();
    break;

  case "/listings/single-listing/":
    pages.renderSingleListingPage();
    liseners.search();
    liseners.logoutLisener();
    liseners.submitAddBidForm();
    break;
}
