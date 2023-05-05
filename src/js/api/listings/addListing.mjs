import { BASE_URL } from "../constants.mjs";
import { headers } from "../headers.mjs";

export async function addListing(listing) {
  try {
    const response = fetch(`${BASE_URL}/listings`, {
      method: "POST",
      headers: headers(),
      body: JSON.stringify({
        media: listing.media.split(","),
        title: listing.title,
        description: listing.description,
        endsAt: listing.endsAt,
        tags: listing.tags.split(","),
      }),
    });
    if (response.ok) {
      return await response.json();
    } else {
      throw new Error("error");
    }
  } catch (error) {
    throw error;
  }
}
