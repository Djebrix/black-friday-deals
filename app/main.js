// Page wiring: read the controls, filter + sort the deals, render the grid.
// The page also honours URL parameters (?q=&category=&store=&min=&sort=) so a
// filtered view can be linked to directly.

import { DEALS, CATEGORIES, STORES, totalSavings } from "./data.js";
import { applyFilters, sortDeals, criteriaFromUrl } from "./filters.js";
import { renderDealGrid, renderResultLine, formatPrice } from "./render.js";

const searchBox = document.getElementById("searchBox");
const categoryFilter = document.getElementById("categoryFilter");
const storeFilter = document.getElementById("storeFilter");
const discountFilter = document.getElementById("discountFilter");
const sortSelect = document.getElementById("sortSelect");
const resetButton = document.getElementById("resetButton");
const resultLine = document.getElementById("resultLine");
const dealGrid = document.getElementById("dealGrid");
const emptyNote = document.getElementById("emptyNote");

function fillSelect(select, values) {
  for (const value of values) {
    const option = document.createElement("option");
    option.value = value;
    option.textContent = value;
    select.appendChild(option);
  }
}

function readCriteria() {
  return {
    query: searchBox.value,
    category: categoryFilter.value,
    store: storeFilter.value,
    minDiscount: discountFilter.value,
    sort: sortSelect.value
  };
}

function refresh() {
  const criteria = readCriteria();
  const filtered = applyFilters(DEALS, criteria);
  const sorted = sortDeals(filtered, criteria.sort);
  renderDealGrid(dealGrid, sorted);
  renderResultLine(resultLine, sorted.length, DEALS.length, totalSavings(sorted));
  emptyNote.hidden = sorted.length !== 0;
}

function resetAll() {
  searchBox.value = "";
  categoryFilter.value = "";
  storeFilter.value = "";
  discountFilter.value = "0";
  sortSelect.value = "discount";
  refresh();
  searchBox.focus();
}

fillSelect(categoryFilter, CATEGORIES);
fillSelect(storeFilter, STORES);

const starting = criteriaFromUrl(window.location.search);
if (CATEGORIES.includes(starting.category)) categoryFilter.value = starting.category;
if (STORES.includes(starting.store)) storeFilter.value = starting.store;
if (["0", "20", "40", "50"].includes(starting.minDiscount)) discountFilter.value = starting.minDiscount;
if (["discount", "saving", "priceAsc", "priceDesc"].includes(starting.sort)) sortSelect.value = starting.sort;
searchBox.value = starting.query;

for (const control of [searchBox, categoryFilter, storeFilter, discountFilter, sortSelect]) {
  control.addEventListener("input", refresh);
}
resetButton.addEventListener("click", resetAll);

document.getElementById("statCount").textContent = String(DEALS.length);
document.getElementById("statSavings").textContent = formatPrice(totalSavings(DEALS));

refresh();
