import { getListing } from "../api/listings/getListing.mjs";
import { renderErrorMessage } from "../ui/components/error.mjs";
import { renderSellerTemplate } from "../ui/components/seller.mjs";
import { renderBiddingHistoryTemplate } from "../ui/components/bidder.mjs";
import { startCounter } from "../utility/counter.mjs";

export async function renderSingleListingPage() {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const id = urlParams.get("id");

  const listing = await getListing(id);
  console.log(listing);

  const listingImage = document.querySelector("#listingImageContainer");
  const listingTitle = document.querySelector("#listingTitle");
  const listingDescription = document.querySelector("#listingDescription");

  const listingEndsAt = document.querySelector("#listingEndsAt");
  const listingBids = document.querySelector("#listingBids");
  const biddingHistoryContainer = document.querySelector("#biddingHistoryContainer");
  const sellerContainer = document.querySelector("#sellerContainer");

  document.title = listing.title;

  listingImage.src = listing.media[0] ?? `/images/avatar.png`;
  listingTitle.innerHTML = listing.title;
  listingDescription.innerHTML = listing.description;

  const endDate = new Date(listing.endsAt);
  startCounter(endDate, listingEndsAt);

  const amounts = listing.bids.map((bid) => bid.amount);
  const maxAmount = Math.max(...amounts);
  if (maxAmount > 0) {
    listingBids.innerHTML += ` ${maxAmount} <i class="fa-solid fa-coins text-warning fs-7 pe-2"></i>`;
  } else {
    listingBids.innerHTML += `0 <i class="fa-solid fa-coins text-warning fs-7 pe-2"></i>`;
  }

  if (Array.isArray(listing.bids) && listing.bids.length === 0) {
    renderErrorMessage("The item dosn't have any bids yet", biddingHistoryContainer);
  } else {
    renderBiddingHistoryTemplate(listing.bids, biddingHistoryContainer);
  }
  renderSellerTemplate(listing.seller, sellerContainer);
}
