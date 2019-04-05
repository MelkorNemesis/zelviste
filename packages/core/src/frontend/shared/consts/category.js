export const SORT_PRICE_ASC = "price.asc";
export const SORT_PRICE_DESC = "price.desc";
export const SORT_NAME_ASC = "name.asc";

export const AVAILABLE_SORTING = [
  SORT_PRICE_ASC,
  SORT_PRICE_DESC,
  SORT_NAME_ASC
];

export const AVAILABLE_SORTING_OPTIONS = [
  {
    name: "Názvu",
    id: SORT_NAME_ASC
  },
  {
    name: "Nejnižší ceny",
    id: SORT_PRICE_ASC
  },
  {
    name: "Nejvyšší ceny",
    id: SORT_PRICE_DESC
  }
];

export const DEFAULT_SORTING = SORT_NAME_ASC;

export const ITEMS_PER_PAGE = 20;
