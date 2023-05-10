function singleCardTemplate(listing) {
  const cardLink = document.createElement("a");
  cardLink.classList.add("text-dark", "text-decoration-none", "col", "listings-card", "mb-3");
  cardLink.href = `/listings/single-listing/?id=${listing.id}`;

  const card = document.createElement("div");
  card.classList.add("card", "m-auto", "border-0", "shadow", "position-relative");
  card.style.width = "18rem";

  const img = document.createElement("img");
  img.src = listing.media[0] ?? `/images/avatar.png`;
  img.classList.add("card-img-top", "img-fluid", "bg-light");
  img.style.height = "15rem";
  img.style.width = "100%";
  img.style.objectFit = "cover";
  img.alt = listing.title;
  card.append(img);

  const cardBody = document.createElement("div");
  cardBody.classList.add("card-body");

  const cardTitle = document.createElement("h5");
  cardTitle.classList.add("card-title", "pb-3");
  cardTitle.textContent = listing.title;

  const cardContent = document.createElement("div");
  cardContent.classList.add("position-absolute", "top-0", "end-0", "bg-primary");

  const cardDate = document.createElement("p");
  const endDate = new Date(listing.endsAt);
  const today = new Date();
  const timeDiff = endDate.getTime() - today.getTime();
  const daysLeft = Math.ceil(timeDiff / (1000 * 3600 * 24));
  cardDate.classList.add("text-white", "fw-semibold", "p-2", "m-0");

  if (daysLeft >= 0) {
    cardDate.textContent = `${daysLeft} days left`;
  } else {
    cardDate.style.backgroundColor = "#000";
    cardDate.textContent = "Expired";
  }

  const bids = document.createElement("div");
  bids.classList.add("text-muted", "text-uppercase", "fs-7");
  bids.innerText = "current bids:";

  const bidsAmount = document.createElement("span");
  bidsAmount.classList.add("text-dark", "fw-semibold", "text-lowercase", "fs-4", "m-0", "ps-3");
  const amounts = listing.bids.map((bid) => bid.amount);
  const maxAmount = Math.max(...amounts);
  maxAmount > 0
    ? (bidsAmount.innerHTML += `${maxAmount} <i class="fa-solid fa-coins text-warning fs-7 pe-2"></i>`)
    : (bidsAmount.innerHTML += ` 0 <i class="fa-solid fa-coins text-warning fs-7 pe-2"></i>`);

  const cardButton = document.createElement("button");
  if (daysLeft <= 0) {
    cardButton.classList.add("btn", "btn-light", "m-2", "text-muted");
    cardButton.innerText = "SOLD";
  } else {
    cardButton.classList.add("btn", "btn-secondary", "m-2");
    cardButton.innerText = "BID";
  }

  bids.append(bidsAmount);
  cardContent.append(cardDate);
  cardBody.append(cardTitle, cardContent, bids);
  card.append(cardBody, cardButton);
  cardLink.appendChild(card);

  return cardLink;
}

export function renderSingelListingCardTemplate(listing, parent) {
  parent.innerHTML = "";
  parent.append(singleCardTemplate(listing));
}

export function renderListingsCardTemplates(listingList, parent) {
  parent.innerHTML = "";
  parent.append(...listingList.map(singleCardTemplate));
}
