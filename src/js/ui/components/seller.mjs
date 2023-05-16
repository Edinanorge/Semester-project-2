function sellerTemplate(seller) {
  const card = document.createElement("div");
  card.classList.add("d-flex", "align-items-center");

  const avatarCol = document.createElement("div");
  avatarCol.classList.add("m-2");
  card.appendChild(avatarCol);

  const avatarImg = document.createElement("img");
  avatarImg.src = seller.avatar ?? `./images/avatar.png`;
  avatarImg.classList.add("img-fluid");
  avatarImg.classList.add("avatar-img");
  avatarImg.alt = "Seller avatar";
  avatarCol.appendChild(avatarImg);

  const bodyCol = document.createElement("div");
  bodyCol.classList.add("m-2");
  card.appendChild(bodyCol);

  const cardBody = document.createElement("div");
  cardBody.classList.add("card-body");
  bodyCol.appendChild(cardBody);

  const cardTitle = document.createElement("p");
  cardTitle.classList.add("card-title");
  cardTitle.textContent = seller.name;
  cardBody.appendChild(cardTitle);

  const emailText = document.createElement("p");
  emailText.classList.add("card-text");
  emailText.textContent = seller.email;
  cardBody.appendChild(emailText);

  return card;
}

export function renderSellerTemplate(seller, parent) {
  parent.innerHTML = "";
  parent.append(sellerTemplate(seller));
}
