function createRoute(pattern, buildFn) {
  const builder = (...params) => buildFn(...params);
  builder.pattern = pattern;
  return Object.freeze(builder);
}

export default {
  category: createRoute("/kategorie/:seo_url", seoUrl => {
    return `/kategorie/${seoUrl}`;
  }),
  product: createRoute("/produkt/:seo_url", seoUrl => {
    return `/produkt/${seoUrl}`;
  })
};
