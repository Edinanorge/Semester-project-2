function singleCardTemplate(listing) {
  const cardLink = document.createElement("a");
  cardLink.classList.add("text-dark", "text-decoration-none", "col", "listings-card", "mb-3");
  cardLink.href = `/listings/single-listing/?id=${listing.id}`;

  const card = document.createElement("div");
  card.classList.add("card", "m-auto", "border-0", "shadow", "position-relative");
  card.style.width = "18rem";

  const img = document.createElement("img");
  img.src = listing.media ?? `./images/avatar.png`;
  img.classList.add("card-img-top", "img-fluid");
  img.style.height = "15rem";
  img.style.width = "100%";
  img.style.backgroundColor = "#D9D9D9";
  img.style.objectFit = "cover";
  img.alt = listing.title;
  card.append(img);

  const cardBody = document.createElement("div");
  cardBody.classList.add("card-body");

  const cardTitle = document.createElement("h5");
  cardTitle.classList.add("card-title");
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
    cardDate.classList.add("bg-dark", "text-white");
    cardDate.textContent = "Expired";
  }

  const cardFooter = document.createElement("div");
  cardFooter.classList.add("card-footer", "d-flex", "justify-content-between");

  const btnDelete = document.createElement("button");
  btnDelete.classList.add("btn");
  btnDelete.innerHTML = "<i class='fa-solid fa-trash-can'></i>";

  const btnEdit = document.createElement("button");
  btnEdit.classList.add("btn");
  btnEdit.innerHTML = "<i class='fa-solid fa-pen-to-square'></i>";

  cardContent.append(cardDate);
  cardBody.append(cardTitle, cardContent);
  cardFooter.append(btnEdit, btnDelete);
  card.append(cardBody, cardFooter);
  cardLink.appendChild(card);

  return cardLink;
}

export function renderSingelCardTemplate(listing, parent) {
  parent.innerHTML = "";
  parent.append(singleCardTemplate(listing));
}

export function renderSingelCardTemplates(listingList, parent) {
  parent.innerHTML = "";
  parent.append(...listingList.map(singleCardTemplate));
}
