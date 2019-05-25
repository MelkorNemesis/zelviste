export function* flattenCategories(category, depth = 0) {
  if (Array.isArray(category)) {
    for (const c of category) {
      yield* flattenCategories(c, depth);
    }
  } else {
    yield ((category.depth = depth), category);
    if (category.children.length) {
      yield* flattenCategories(category.children, depth + 1);
    }
  }
}

export function formatNestedCategoryName(category) {
  return `${"- ".repeat(category.depth || 0)} ${category.name}`.trim();
}
