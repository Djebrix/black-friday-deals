# DealSleuth — Black Friday 2026 Deal Finder

[![Black Friday Deal Finder](https://make.fun/badge/black-friday-deal-finder-01.svg)](https://make.fun/bounty/black-friday-deal-finder-01)
[![Rank](https://make.fun/badge/black-friday-deal-finder-01/Djebrix/black-friday-deals/rank.svg)](https://make.fun/bounty/black-friday-deal-finder-01)
[![Reward](https://make.fun/badge/black-friday-deal-finder-01/Djebrix/black-friday-deals/reward.svg)](https://make.fun/bounty/black-friday-deal-finder-01)

A static deal-finder site for Black Friday and Cyber Monday 2026, entered in
[make.fun's Black Friday deal finder bounty](https://make.fun/bounty/black-friday-deal-finder-01).

## What it is

22 real deals across 4 stores (Amazon, Best Buy, Target, Walmart) and 10
categories — audio, laptops, TVs, tablets, gaming, kitchen, home, toys,
wearables, cameras and PC parts. Every deal shows the product, the store, a
link to the product at that store, the sale price, the usual price, the
discount, when the price was checked, where the price was read, and an honest
verdict: **New low**, **Strong price**, **Routine sale** or **Inflated list** —
with the evidence for the call on the card.

Search, category / store / discount filters and four sort orders all work
client-side, with no network requests. The page also honours URL parameters
(`?q=&category=&store=&min=&sort=`) so a filtered view can be linked to.

## How the prices were checked

Each price was found and checked on **27 November 2026** — read at the named
store (its product page or its own Black Friday release) or in a deals source
that names that store and its price: Digital Citizen, PopSci, GeekyGoo,
TradingView/Benzinga, Clark Deals and GameGavel. Nothing was guessed and no
price was carried over from an older sale. Two “deals” are flagged honestly:
the Switch 2 bundle’s “cut” only returns it to its $499.99 launch price after
a September rise to $549.99, and the Samsung 9100 Pro’s $679.97 “was” price
is padded above its street price.

## Run it

```sh
# serve the site (any static server works)
python3 -m http.server 8080 --directory app
# open http://localhost:8080/
```

## Hand in

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` (Node 22, standard library only) copies `app/` and `screenshots/`
to the output directory and writes `dossier.json` with `buildDossier` from
`vendor/makefun-frontend.ts`. Running it twice writes byte-identical output.

## Layout

- `app/index.html` — page shell: masthead, search + filters, verdict key, deal grid, method note
- `app/styles.css` — all styling (original design, no framework, no images)
- `app/data.js` — the 22 checked deals, discount/saving helpers
- `app/filters.js` — pure filter + sort functions, URL-parameter parsing
- `app/render.js` — deal cards, result line, price formatting
- `app/main.js` — page wiring: controls, state, initial render
- `main.ts` — hand-in program
- `vendor/makefun-frontend.ts` — the kit's dossier library, unchanged
- `screenshots/` — renders of the site in a browser
