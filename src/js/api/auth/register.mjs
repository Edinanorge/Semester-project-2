import { BASE_URL } from "../constants.mjs";
import { displayMessage } from "../helpers..mjs";

export async function register(name, email, password, avatar) {
  try {
    const response = await fetch(`${BASE_URL}/auth/register`, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({ name, email, password, avatar }),
    });

    if (response.ok) {
      displayMessage("registerFeedback", "Profile successfully registered.", "success");
      setTimeout(() => {
        location.assign("/profile/login");
      }, 3000);
      console.log(await response.json());
      return await response.json();
    } else {
      const data = await response.json();
      displayMessage("registerFeedback", data.errors[0].message, "error");
    }
  } catch (error) {
    console.log(error);
  }
}
