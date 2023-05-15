 function bidderTemplate(bids) {
  const card = document.createElement("div");
  card.classList.add("row", "border-bottom");

  const name = document.createElement("p");
  name.classList.add("col");
  name.innerText = bids.bidderName;

  const amount = document.createElement("p");
  amount.innerHTML = `Amount: ${bids.amount} <i class="fa-solid fa-coins text-warning fs-7 pe-2"></i>`;
  amount.classList.add("col");

  const date = document.createElement("p");
  date.classList.add("col");
  date.innerText = bids.created.slice(0, -14);

  card.append(name, amount, date);
  return card;
}

export function renderBiddingHistoryTemplate(bids, parent) {
  parent.innerHTML = "";
  parent.append(...bids.map(bidderTemplate));
}
