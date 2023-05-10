import { getActiveListings, getListings } from "../api/listings/getListing.mjs";
import { renderErrorMessage } from "../ui/components/error.mjs";
import { renderListingsCardTemplates } from "../ui/components/listingCard.mjs";

export async function renderListingsPage() {
  const listingsContainer = document.querySelector("#listingsContainer");
  const selectElement = document.getElementById("filter");

  const renderListings = async (listings) => {
    try {
      renderListingsCardTemplates(listings, listingsContainer);
    } catch (error) {
      renderErrorMessage(error, listingsContainer);
    }
  };

  selectElement.addEventListener("change", async (e) => {
    const selectedOption = e.target.value;
    try {
      if (selectedOption === "all") {
        const listings = await getListings();
        renderListings(listings);
      } else if (selectedOption === "active") {
        const activeListings = await getActiveListings();
        renderListings(activeListings);
      }
    } catch (error) {
      renderErrorMessage(error, listingsContainer);
    }
  });

  try {
    const listings = await getListings();
    renderListings(listings);
  } catch (error) {
    renderErrorMessage(error, listingsContainer);
  }
}
