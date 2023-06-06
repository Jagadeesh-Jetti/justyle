export const FilterFunctions = (dataState, filterState) => {
  let filteredProducts = dataState.products;

  if (filterState.selectedCategory.length > 0) {
    filteredProducts = filteredProducts.filter((product) =>
      filterState.selectedCategory.includes(product.category)
    );
  }

  if (filterState.selectedPriceSort.length > 0) {
    if (filterState.selectedPriceSort === "HTL") {
      filteredProducts = filteredProducts.sort((a, b) => b.price - a.price);
    }
    if (filterState.selectedPriceSort === "LTH") {
      filteredProducts = filteredProducts.sort((a, b) => a.price - b.price);
    }
  }

  if (filterState.selectedRating.length > 0) {
    filteredProducts = filteredProducts.filter(
      ({ rating }) => Number(rating) >= Number(filterState.selectedRating)
    );
  }

  if (filterState.searchedValue.length > 0) {
    filteredProducts = filteredProducts.filter(({ title }) =>
      title.toLowerCase().includes(filterState.searchedValue.toLowerCase())
    );
  }

  return filteredProducts;
};
