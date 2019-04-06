import qs from "qs";

function createRoute(pattern, buildFn) {
  const builder = (...params) => buildFn(...params);
  builder.pattern = pattern;
  return Object.freeze(builder);
}

export default {
  category: createRoute(
    "/kategorie/:seo_url",
    (seoUrl, { page, order } = {}) => {
      const query = qs.stringify(
        {
          page,
          order
        },
        { addQueryPrefix: true }
      );

      return `/kategorie/${seoUrl}${query}`;
    }
  ),
  product: createRoute("/produkt/:seo_url", seoUrl => {
    return `/produkt/${seoUrl}`;
  })
};
