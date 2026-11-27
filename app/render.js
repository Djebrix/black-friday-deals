// Rendering: turn a deal object into a card element, and a list into the grid.
// No prices are computed here — data.js owns the numbers.

import { CHECKED_DATE, discountPercent, savingAmount } from "./data.js";

export const VERDICT_LABELS = {
  newlow: "New low",
  strong: "Strong price",
  routine: "Routine sale",
  inflated: "Inflated list"
};

export function formatPrice(value) {
  return "$" + value.toFixed(2).replace(/\.00$/, "");
}

function escapeHtml(text) {
  return String(text)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export function renderDealCard(deal) {
  const card = document.createElement("article");
  card.className = "deal-card" + (discountPercent(deal) >= 50 ? " top-pick" : "");
  card.dataset.dealId = deal.id;

  const tags = document.createElement("div");
  tags.className = "card-tags";
  const storeChip = document.createElement("span");
  storeChip.className = "chip chip-store";
  storeChip.textContent = deal.store;
  const catChip = document.createElement("span");
  catChip.className = "chip";
  catChip.textContent = deal.category;
  tags.append(storeChip, catChip);

  const title = document.createElement("h3");
  title.textContent = deal.name;

  const blurb = document.createElement("p");
  blurb.className = "blurb";
  blurb.textContent = deal.blurb;

  const priceRow = document.createElement("div");
  priceRow.className = "price-row";
  const sale = document.createElement("span");
  sale.className = "sale-price";
  sale.textContent = formatPrice(deal.sale);
  const was = document.createElement("span");
  was.className = "was-price";
  was.textContent = "was " + formatPrice(deal.was);
  const off = document.createElement("span");
  off.className = "off-badge";
  off.textContent = "-" + discountPercent(deal) + "%";
  priceRow.append(sale, was, off);

  const saving = document.createElement("p");
  saving.className = "saving-line";
  saving.textContent = "You save " + formatPrice(savingAmount(deal)) + " vs the usual price.";

  const pill = document.createElement("span");
  pill.className = "pill pill-" + deal.verdict;
  pill.textContent = VERDICT_LABELS[deal.verdict] || deal.verdict;

  const note = document.createElement("p");
  note.className = "verdict-note";
  note.textContent = deal.note;

  const link = document.createElement("a");
  link.className = "shop-link";
  link.href = deal.url;
  link.target = "_blank";
  link.rel = "noopener";
  link.textContent = "View at " + deal.store + " \u2192";

  const checked = document.createElement("p");
  checked.className = "checked-line";
  checked.innerHTML =
    "Checked <strong>" + escapeHtml(CHECKED_DATE) + "</strong> &middot; Price read: " +
    escapeHtml(deal.source);

  card.append(tags, title, blurb, priceRow, saving, pill, note, link, checked);
  return card;
}

export function renderDealGrid(grid, deals) {
  grid.replaceChildren();
  for (const deal of deals) grid.appendChild(renderDealCard(deal));
}

export function renderResultLine(line, shown, total, savings) {
  if (shown === total) {
    line.innerHTML =
      "Showing <strong>all " + total + " deals</strong> &middot; total savings vs usual prices: <strong>" +
      formatPrice(savings) + "</strong>";
  } else {
    line.innerHTML =
      "Showing <strong>" + shown + " of " + total + " deals</strong> &middot; total savings on these: <strong>" +
      formatPrice(savings) + "</strong>";
  }
}
