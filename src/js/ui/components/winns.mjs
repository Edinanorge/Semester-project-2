import { getListing } from "../../api/listings/getListing.mjs";

function winsTemplate(wins) {
  const card = document.createElement("li");
  card.classList.add("list-group-item", "d-flex", "align-items-center", "wins-card", "ms-2", "border-bottom");

  const mediaCol = document.createElement("div");
  mediaCol.classList.add("m-2");
  card.appendChild(mediaCol);

  const mediaLink = document.createElement("a");
  mediaLink.classList.add("wins-link");
  mediaLink.href = `/listings/single-listing/?id=${wins.id}`;

  const mediaImg = document.createElement("img");
  mediaImg.src = wins.media[0] ?? "/images/placeholder.png";
  mediaImg.classList.add("img-fluid");
  mediaImg.classList.add("avatar-img");
  mediaImg.alt = "wins media";

  mediaLink.appendChild(mediaImg);
  mediaCol.appendChild(mediaLink);

  const bodyCol = document.createElement("div");
  bodyCol.classList.add("m-2");
  card.appendChild(bodyCol);

  const cardBody = document.createElement("div");
  cardBody.classList.add("card-body", "text-start");
  bodyCol.appendChild(cardBody);

  const cardTitle = document.createElement("p");
  cardTitle.classList.add("card-title");
  cardTitle.textContent = wins.title;
  cardBody.appendChild(cardTitle);

  const cardDescription = document.createElement("p");
  cardDescription.classList.add("card-text");
  cardDescription.textContent = wins.description;
  cardBody.appendChild(cardDescription);

  return card;
}

export function renderWinsTemplate(wins, parent) {
  parent.innerHTML = "";
  parent.append(winsTemplate(wins));
}
export function renderWinsTemplates(winsList, parent) {
  parent.innerHTML = "";
  parent.append(...winsList.map(winsTemplate));
}

export async function renderWinsListingsTemplates(userWins) {
  const winsList = [];

  for (const id of userWins) {
    const listing = await getListing(id);
    winsList.push(listing);
  }

  renderWinsTemplates(winsList, winsContainer);
}
