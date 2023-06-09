import { addBid } from "../api/listings/bidListing.mjs";
import { getListing } from "../api/listings/getListing.mjs";
import { load } from "../storage/load.mjs";
import { displayMessage } from "../utility/message.mjs";

export function submitAddBidForm() {
  const form = document.querySelector("#addBidForm");

  if (form) {
    form.addEventListener("submit", async (e) => {
      e.preventDefault();

      const inputValue = document.querySelector("input[name=bid]").value;
      const queryString = window.location.search;
      const urlParams = new URLSearchParams(queryString);
      const id = urlParams.get("id");
      const isLogedIn = load("user");

      try {
        if (isLogedIn) {
          await addBid(+inputValue, id);
          displayMessage("addBidFormFeedback", "Congratulations, you are the highest bidder.", "success");
          setTimeout(() => {
            location.reload();
          }, 1000);
        } else {
          displayMessage("addBidFormFeedback", "Ooops! Looks like you forgot to log in.", "error");
        }
      } catch (error) {
        displayMessage("addBidFormFeedback", error, "error");
      }
    });
  }
}
