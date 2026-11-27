// Filtering and sorting for the deal list.
// Pure functions over the DEALS array: easy to test, no DOM in here.

import { discountPercent, savingAmount } from "./data.js";

/**
 * Keep only the deals that match every active criterion.
 * criteria: { query, category, store, minDiscount }
 */
export function applyFilters(deals, criteria) {
  const query = (criteria.query || "").trim().toLowerCase();
  const minDiscount = Number(criteria.minDiscount || 0);
  return deals.filter((deal) => {
    if (criteria.category && deal.category !== criteria.category) return false;
    if (criteria.store && deal.store !== criteria.store) return false;
    if (discountPercent(deal) < minDiscount) return false;
    if (query) {
      const haystack = `${deal.name} ${deal.store} ${deal.category} ${deal.blurb}`.toLowerCase();
      if (!query.split(/\s+/).every((word) => haystack.includes(word))) return false;
    }
    return true;
  });
}

/** Sort a copy of the deals by the chosen key. */
export function sortDeals(deals, key) {
  const sorted = [...deals];
  switch (key) {
    case "discount":
      sorted.sort((a, b) => discountPercent(b) - discountPercent(a) || savingAmount(b) - savingAmount(a));
      break;
    case "saving":
      sorted.sort((a, b) => savingAmount(b) - savingAmount(a) || discountPercent(b) - discountPercent(a));
      break;
    case "priceAsc":
      sorted.sort((a, b) => a.sale - b.sale);
      break;
    case "priceDesc":
      sorted.sort((a, b) => b.sale - a.sale);
      break;
    default:
      sorted.sort((a, b) => discountPercent(b) - discountPercent(a));
  }
  return sorted;
}

/** Read the starting criteria from the page URL, e.g. ?category=Audio&sort=saving. */
export function criteriaFromUrl(search) {
  const params = new URLSearchParams(search || "");
  return {
    query: params.get("q") || "",
    category: params.get("category") || "",
    store: params.get("store") || "",
    minDiscount: params.get("min") || "0",
    sort: params.get("sort") || "discount"
  };
}
