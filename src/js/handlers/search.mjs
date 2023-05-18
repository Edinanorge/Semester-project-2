import { getListings } from "../api/listings/getListing.mjs";
import { renderErrorMessage } from "../ui/components/error.mjs";

import { renderWinsTemplates } from "../ui/components/winns.mjs";

export async function search() {
  const listings = await getListings();
  const form = document.querySelector("#searchForm");
  const formInput = document.querySelector("input[type=search]");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const searchValue = formInput.value.trim();

      if (searchValue === "") {
        displaySearchResults([]);
        return;
      }

      const filteredListings = listings.filter((listing) => {
        const title = listing.title.toLowerCase();
        const description = listing.description ? listing.description.toLowerCase() : "";
        const seller = listing.seller.name.toLowerCase();

        return title.includes(searchValue) || description.includes(searchValue) || seller.includes(searchValue);
      });

      displaySearchResults(filteredListings);
    });
  }
}

function displaySearchResults(filteredListings) {
  const container = document.querySelector("#searchResults");
  container.innerHTML = "";

  if (filteredListings.length === 0) {
    renderErrorMessage("No results found.", container);
  } else {
    renderWinsTemplates(filteredListings, container);
  }
}
