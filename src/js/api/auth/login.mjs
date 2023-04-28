import { BASE_URL } from "../constants.mjs";
import * as storage from "../../storage/index.mjs";
import { displayMessage } from "../helpers..mjs";

export async function login(email, password) {
  try {
    const response = await fetch(`${BASE_URL}/auth/login`, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({ email, password }),
    });

    if (response.ok) {
      const { accessToken, ...user } = await response.json();
      console.log(accessToken);
      storage.save("token", accessToken);
      storage.save("user", user);
      displayMessage("loginFeedback", "Success", "success");
      setTimeout(() => {
        location.assign("/profile");
      }, 200);
    } else {
      const data = await response.json();
      displayMessage("loginFeedback", data.errors[0].message, "error");
    }
  } catch (error) {
    throw new Error(response.errors[0].message);
  }
}
