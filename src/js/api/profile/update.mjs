import { BASE_URL } from "../constants.mjs";
import { headers } from "../headers.mjs";

export async function updateProfile(user) {
  try {
    if (!user.name) {
      throw new Error("Update requires a name");
    }

    const response = fetch(`${BASE_URL}/profiles/${user.name}/media`, {
      method: "PUT",
      headers: headers(),
      body: JSON.stringify(user),
    });

    if (response.ok) {
      return await response.json();
    } else {
      throw new Error("Sorry, we were unable to update your avatar.");
    }
  } catch (error) {
    throw error;
  }
}
