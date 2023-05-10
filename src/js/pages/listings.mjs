import { getListings } from "../api/listings/getListing.mjs";
import { renderListingsCardTemplates } from "../ui/components/listingCard.mjs";

export async function renderListingsPage() {
  const listings = await getListings();
  const listingsContainer = document.querySelector("#listingsContainer");

  renderListingsCardTemplates(listings, listingsContainer);
}
