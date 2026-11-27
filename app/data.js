// Deal data for DealSleuth — Black Friday 2026.
// Every price below was checked on 27 November 2026 at the named store or in a
// deals source that names that store and its price. The `source` field names
// where the price was read; `verdict` is one of: newlow, strong, routine, inflated.
// Prices are USD. `was` is the store's own regular/reference price.

export const CHECKED_DATE = "27 Nov 2026";

export const DEALS = [
  {
    id: "airpods-pro-3-walmart",
    name: "Apple AirPods Pro 3",
    category: "Audio",
    store: "Walmart",
    sale: 149,
    was: 249,
    url: "https://www.walmart.com/ip/AirPods-Pro-3/17835006350",
    source: "Digital Citizen, 24 Nov; TradingView/Benzinga, 27 Nov",
    verdict: "newlow",
    note: "All-time low: $100 off Apple's $249 price, and the same $149 at Target and Best Buy today.",
    blurb: "Apple's newest earbuds — noise cancelling, heart-rate sensing, live translation."
  },
  {
    id: "beats-studio-pro-walmart",
    name: "Beats Studio Pro Wireless Headphones",
    category: "Audio",
    store: "Walmart",
    sale: 99,
    was: 299,
    url: "https://www.walmart.com/ip/Beats-Studio-Pro-Wireless-Headphones-White-Black/20630967817",
    source: "Digital Citizen, 24 Nov; DealNews Top 100",
    verdict: "newlow",
    note: "67% off — the deepest cut on this page and the lowest price tracked for these headphones.",
    blurb: "Over-ear noise-cancelling headphones, 40-hour battery, USB-C audio. White and black."
  },
  {
    id: "hisense-65-h5r1-walmart",
    name: "Hisense 65\" H5R1 4K Roku TV (2026 model)",
    category: "TVs",
    store: "Walmart",
    sale: 228,
    was: 398,
    url: "https://www.walmart.com/ip/Hisense-65-Class-H5R1-Series-4K-UHD-HDR-Smart-Roku-TV-65H5R1-2026-Model-Full-Array-LED-Dolby-Vision-AI-4K-Upscaler-Game-Mode-Plus-DTS-Virtual-X-Noise/20206324665",
    source: "Digital Citizen, 24 Nov; TradingView/Benzinga, 27 Nov",
    verdict: "strong",
    note: "A 2026 65-inch 4K set with Dolby Vision for $228; the $398 was-price is Walmart's own.",
    blurb: "65-inch 4K HDR Roku TV with Dolby Vision, AI upscaling and game mode."
  },
  {
    id: "ipad-a16-walmart",
    name: "Apple iPad 11-inch (A16, Wi-Fi, 128GB)",
    category: "Tablets",
    store: "Walmart",
    sale: 379,
    was: 449,
    url: "https://www.walmart.com/ip/Apple-iPad-11-inch-A16-Wi-Fi-128GB-Silver/15483805722",
    source: "Digital Citizen, 24 Nov",
    verdict: "strong",
    note: "$70 under Apple's $449 — and $20 cheaper than Amazon's $399 for the same iPad.",
    blurb: "The current base iPad with the A16 chip, 128GB, in silver. The tablet most people should buy."
  },
  {
    id: "instax-mini-se-walmart",
    name: "Fujifilm Instax Mini SE Instant Camera + 10-pack film",
    category: "Cameras",
    store: "Walmart",
    sale: 45,
    was: 63.96,
    url: "https://www.walmart.com/ip/Fujifilm-instax-Mini-SE-Instant-Camera-with-Bonus-10-pack-Mini-Film-Pink/5186481487",
    source: "Digital Citizen, 24 Nov",
    verdict: "strong",
    note: "30% off with a 10-pack of film in the box, so it shoots on Christmas morning.",
    blurb: "Instant camera in pink with a bonus 10-pack of mini film included."
  },
  {
    id: "hp-omnibook-5-bestbuy",
    name: "HP OmniBook 5 14\" 2K OLED Touchscreen Laptop",
    category: "Laptops",
    store: "Best Buy",
    sale: 449.99,
    was: 799.99,
    url: "https://www.bestbuy.com/product/hp-omnibook-5-14-2k-oled-touchscreen-laptop-intel-core-5-series-3-2026-8gb-memory-256gb-storage-starlit-blue/J3KSW748W6",
    source: "Best Buy product page, verified 27 Nov; Best Buy Black Friday release, 17 Nov",
    verdict: "newlow",
    note: "$350 off a 2026 OLED touchscreen laptop — the strongest laptop cut in Best Buy's sale.",
    blurb: "Intel Core 5, 8GB RAM, 256GB storage, 14-inch 2K OLED touch display."
  },
  {
    id: "macbook-air-m5-bestbuy",
    name: "Apple MacBook Air 13-inch (M5, 16GB/512GB)",
    category: "Laptops",
    store: "Best Buy",
    sale: 1049,
    was: 1299,
    url: "https://corporate.bestbuy.com/2026/black-friday-sale-deals",
    source: "Best Buy Black Friday release, 17 Nov; confirmed by TradingView, 27 Nov",
    verdict: "strong",
    note: "$250 off the newest MacBook Air. Amazon listed the same config at $989 on 23 Nov — check both before buying.",
    blurb: "The 2026 MacBook Air with the M5 chip, 16GB memory and 512GB storage."
  },
  {
    id: "tcl-65-fire-tv-bestbuy",
    name: "TCL 65\" 4K UHD HDR Smart TV with Fire TV (2026)",
    category: "TVs",
    store: "Best Buy",
    sale: 229.99,
    was: 469.99,
    url: "https://corporate.bestbuy.com/2026/black-friday-sale-deals",
    source: "Best Buy Black Friday release, 17 Nov; confirmed by TradingView, 27 Nov",
    verdict: "strong",
    note: "$240 off — the best TV deal live today across the major stores.",
    blurb: "65-inch 4K HDR TV with Fire TV built in. The cheapest way to fill a living-room wall."
  },
  {
    id: "sony-xm5-bestbuy",
    name: "Sony WH-1000XM5 Noise-Cancelling Headphones",
    category: "Audio",
    store: "Best Buy",
    sale: 169,
    was: 398,
    url: "https://corporate.bestbuy.com/2026/black-friday-sale-deals",
    source: "Best Buy Black Friday release, 17 Nov; confirmed by TradingView, 27 Nov",
    verdict: "strong",
    note: "$229 off Sony's flagship noise-cancelling headphones — 58% off.",
    blurb: "Sony's top noise-cancelling over-ears, the pair reviewers reach for on planes."
  },
  {
    id: "shark-powerdetect-bestbuy",
    name: "Shark PowerDetect Speed Cordless Stick Vacuum",
    category: "Home",
    store: "Best Buy",
    sale: 199.99,
    was: 499.99,
    url: "https://corporate.bestbuy.com/2026/black-friday-sale-deals",
    source: "Best Buy Black Friday release, 17 Nov",
    verdict: "strong",
    note: "$300 off — 60% off Shark's cordless stick vacuum.",
    blurb: "Cordless stick vacuum with PowerDetect cleaning. Best Buy's headline home deal."
  },
  {
    id: "switch2-bundle-target",
    name: "Nintendo Switch 2 + Mario Kart World Bundle",
    category: "Gaming",
    store: "Target",
    sale: 499.99,
    was: 549.99,
    url: "https://www.target.com/p/nintendo-switch-2-mario-kart-world-bundle/-/A-1013129025",
    source: "Target product page, price verified 27 Nov; Clark Deals Target ad",
    verdict: "inflated",
    note: "Target raised this bundle to $549.99 in September from its $499.99 launch price, so the 'cut' only returns it to launch price. Fair value — it includes the $80 game and 3 months of Switch Online — but not a real discount.",
    blurb: "Switch 2 console with a full download of Mario Kart World and 3 months of Switch Online."
  },
  {
    id: "beats-solo-4-target",
    name: "Beats Solo 4 Wireless On-Ear Headphones (Bright Pink)",
    category: "Audio",
    store: "Target",
    sale: 79.99,
    was: 199.99,
    url: "https://www.target.com/p/beats-solo-4-bluetooth-wireless-on-ear-headphones-bright-pink/-/A-1012454303",
    source: "Target product page, price verified 27 Nov; Clark Deals Target ad",
    verdict: "routine",
    note: "60% off is real money, but Solo 4s are discounted this deeply several times a year.",
    blurb: "On-ear headphones with spatial audio, 50-hour battery, USB-C. Bright pink, a Target exclusive colour."
  },
  {
    id: "kitchenaid-mixer-target",
    name: "KitchenAid 5.5-Quart Bowl-Lift Stand Mixer",
    category: "Kitchen",
    store: "Target",
    sale: 299.99,
    was: 499.99,
    url: "https://goto.target.com/gRdg10",
    source: "Target product page, price verified 27 Nov; Clark Deals Target ad",
    verdict: "strong",
    note: "$200 off the bowl-lift mixer — the classic wedding-registry pick at its Black Friday price.",
    blurb: "5.5-quart bowl-lift stand mixer with 11 speeds, in Agave. Built for bread dough and big batches."
  },
  {
    id: "instant-pot-target",
    name: "Instant Pot 6-Quart 9-in-1 Pressure Cooker Bundle",
    category: "Kitchen",
    store: "Target",
    sale: 59.99,
    was: 139.99,
    url: "https://goto.target.com/qWdZ4O",
    source: "Target product page, price verified 27 Nov; Clark Deals Target ad",
    verdict: "strong",
    note: "57% off, and the bundle adds a bonus silicone pan with lid — the cheapest way into pressure cooking.",
    blurb: "9-in-1 multi-cooker: pressure cook, slow cook, rice, sous vide and more, with bonus accessories."
  },
  {
    id: "dyson-v9-amazon",
    name: "Dyson V9 Motorbar Cordless Vacuum",
    category: "Home",
    store: "Amazon",
    sale: 269.95,
    was: 599.99,
    url: "https://www.amazon.com/dp/B0HGNPTSMT",
    source: "PopSci Amazon Black Friday deals, updated 24 Nov",
    verdict: "strong",
    note: "55% off — $330 off Dyson's newest cordless stick vacuum.",
    blurb: "Dyson's latest cordless stick vacuum with the Motorbar cleaner head."
  },
  {
    id: "ninja-air-fryer-xl-amazon",
    name: "Ninja Air Fryer XL (5.5-Quart)",
    category: "Kitchen",
    store: "Amazon",
    sale: 89.99,
    was: 179.99,
    url: "https://www.amazon.com/dp/B08QKTXT1N",
    source: "PopSci Amazon Black Friday deals, updated 24 Nov",
    verdict: "strong",
    note: "Half price — $90 off the 5.5-quart air fryer that fits 3 pounds of wings.",
    blurb: "5.5-quart air fryer that roasts, reheats and dehydrates, dishwasher-safe basket."
  },
  {
    id: "kindle-paperwhite-amazon",
    name: "Kindle Paperwhite 16GB (2024)",
    category: "Tablets",
    store: "Amazon",
    sale: 129.99,
    was: 199.99,
    url: "https://www.amazon.com/dp/B0CFPJYX7P",
    source: "PopSci Amazon Black Friday deals, updated 24 Nov; GeekyGoo",
    verdict: "strong",
    note: "35% off the 2024 Paperwhite — the e-reader most people should buy.",
    blurb: "Glare-free 7-inch e-reader with weeks of battery, waterproof, 16GB of storage."
  },
  {
    id: "fire-tv-stick-4k-plus-amazon",
    name: "Amazon Fire TV Stick 4K Plus",
    category: "TVs",
    store: "Amazon",
    sale: 29.99,
    was: 69.99,
    url: "https://www.amazon.com/dp/B0F7Z4QZTT",
    source: "PopSci Amazon Black Friday deals, updated 24 Nov; GeekyGoo",
    verdict: "newlow",
    note: "57% off — the cheapest way to put 4K streaming on any TV, at its lowest price.",
    blurb: "4K streaming stick with Wi-Fi 6 and Alexa voice remote."
  },
  {
    id: "lego-red-fox-amazon",
    name: "LEGO Creator 3-in-1 Forest Animals: Red Fox",
    category: "Toys",
    store: "Amazon",
    sale: 34.99,
    was: 49.99,
    url: "https://www.amazon.com/dp/B0CGY3VF3K",
    source: "PopSci Amazon Black Friday deals, updated 24 Nov",
    verdict: "routine",
    note: "30% off is the standard LEGO sale — a fair price, not a once-a-year one.",
    blurb: "Build a red fox, then rebuild it as an owl or a squirrel. 3-in-1 Creator set."
  },
  {
    id: "magna-tiles-amazon",
    name: "Magna-Tiles Classic 100-Piece Set",
    category: "Toys",
    store: "Amazon",
    sale: 83.99,
    was: 119.99,
    url: "https://www.amazon.com/dp/B000CBSNRY",
    source: "PopSci Amazon Black Friday deals, updated 24 Nov",
    verdict: "strong",
    note: "30% off a set that rarely drops this far — the go-to building toy for ages 3 and up.",
    blurb: "100 magnetic building tiles, the classroom and playroom staple."
  },
  {
    id: "apple-watch-12-amazon",
    name: "Apple Watch Series 12 (GPS, 42mm)",
    category: "Wearables",
    store: "Amazon",
    sale: 329,
    was: 399,
    url: "https://www.geekygoo.com/blog/amazon-black-friday-2026-best-tech-deals/",
    source: "GeekyGoo Amazon Black Friday deals, 19 Nov; Tom's Guide Apple deals",
    verdict: "newlow",
    note: "All-time low, according to MacRumors — $70 off Apple's newest watch with the S11 chip.",
    blurb: "Apple's newest watch: most accurate heart-rate sensing yet, Live Rewind and Siri Recap."
  },
  {
    id: "samsung-9100-pro-amazon",
    name: "Samsung 9100 Pro 2TB Gen5 SSD",
    category: "PC Parts",
    store: "Amazon",
    sale: 349.99,
    was: 679.97,
    url: "https://www.tradingview.com/news/benzinga:4abf2922c094b:0-black-friday-2026-tech-deals-airpods-pro-3-for-149-65-inch-tvs-for-228-and-laptops-under-450-at-major-retailers/",
    source: "TradingView/Benzinga, 27 Nov; GameGavel price-history check",
    verdict: "inflated",
    note: "The $679.97 'was' price is padded — this drive's street price is far lower. But $349.99 is still a genuine low for a 14,700 MB/s Gen5 drive.",
    blurb: "2TB PCIe Gen5 SSD at 14,700 MB/s — the fastest storage in this sale."
  }
];

export const CATEGORIES = [...new Set(DEALS.map((d) => d.category))].sort();
export const STORES = [...new Set(DEALS.map((d) => d.store))].sort();

export function discountPercent(deal) {
  return Math.round((1 - deal.sale / deal.was) * 100);
}

export function savingAmount(deal) {
  return +(deal.was - deal.sale).toFixed(2);
}

export function totalSavings(deals) {
  return deals.reduce((sum, d) => sum + savingAmount(d), 0);
}
