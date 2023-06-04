export const FilterFunctions = (dataState, filterState) => {
  let filteredProducts = dataState.products;

  if (filterState.selectedCategory.length > 0) {
    filteredProducts = filteredProducts.filter((product) =>
      filterState.selectedCategory.includes(product.category)
    );
  }
  return filteredProducts;
};
