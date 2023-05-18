import { getActiveListings } from "../api/listings/getListing.mjs";
import { renderListingsCardTemplates } from "../ui/components/listingCard.mjs";

export async function renderHomePage() {
  const featuredContainer = document.querySelector("#featuredContainer");
  try {
    const listings = await getActiveListings();

    listings.sort((a, b) => new Date(a.endsAt) - new Date(b.endsAt));
    const lowestListings = listings.slice(0, 8);
    renderListingsCardTemplates(lowestListings, featuredContainer);
  } catch (error) {
    console.log(error);
  }
}
