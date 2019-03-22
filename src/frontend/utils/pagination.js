export function calculateLimitOffset({ page, itemsPerPage }) {
  return {
    limit: itemsPerPage,
    offset: page < 2 ? 0 : itemsPerPage * (page - 1)
  };
}

export function calculatePages({ total, itemsPerPage }) {
  return Math.ceil(total / itemsPerPage);
}
