import { addListing } from "../api/listings/addListing.mjs";
import { displayMessage } from "../api/helpers..mjs";

export function submitAddListingForm() {
  const form = document.querySelector("#addListingForm");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const form = e.target;
      const formData = new FormData(form);
      const listing = Object.fromEntries(formData.entries());
      console.log(listing);

      addListing(listing);
      displayMessage("createListingFeedback", "Thanks, your product is on sale.", "succes");
    });
  }
}
