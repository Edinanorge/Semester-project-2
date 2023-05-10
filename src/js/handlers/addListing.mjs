import { addListing } from "../api/listings/addListing.mjs";
import { displayMessage } from "../utility/message.mjs";

export function submitAddListingForm() {
  const form = document.querySelector("#addListingForm");

  if (form) {
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      const form = e.target;
      const formData = new FormData(form);
      const listing = Object.fromEntries(formData.entries());
      try {
        await addListing(listing);
        displayMessage("createListingFeedback", "Thanks, your product is on sale.", "succes");
      } catch (error) {
        displayMessage("createListingFeedback", error, "error");
      }
    });
  }
}
