import { header } from "./ui/header.mjs";
import * as liseners from "./handlers/index.mjs";
header();

const path = location.pathname;
switch (path) {
  case "/":
    liseners.logoutLisener();
    break;
  case "/profile/login/":
    liseners.submitLoginForm();
    break;

  case "/profile/register/":
    liseners.submitRegisterForm();
    break;

  case "/profile/":
    liseners.logoutLisener();
    break;
  case "/listings/":
    liseners.logoutLisener();
    break;

  case "/listings/sin":
    liseners.logoutLisener();
    break;
}
