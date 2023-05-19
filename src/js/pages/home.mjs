import { getEndingSoonListings } from "../api/listings/getListing.mjs";
import { renderListingsCardTemplates } from "../ui/components/listingCard.mjs";

export async function renderHomePage() {
  const featuredContainer = document.querySelector("#featuredContainer");
  try {
    const listings = await getEndingSoonListings();
    renderListingsCardTemplates(listings, featuredContainer);
  } catch (error) {
    console.log(error);
  }
}
