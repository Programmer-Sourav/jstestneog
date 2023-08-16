
const { productsReducer, initialState } = require('./ProductsReducer');



describe("testing product reducer", () => {
  test("updates category filter", () => {
    let action = {
      type: "SET_CATEGORY_FILTER",
      payload: {
        value: "Electronics"
      }
    };

    let state = productsReducer(initialState, action);
    expect(state.filters.category).toBe("Electronics");
  });

  test("should update search", () => {
     const action = {
      type: "SET_SEARCH_QUERY",
      payload: {
        search: "Phone"
      }
    };
    let updatedState = productsReducer(initialState, action);
    expect(updatedState.filters.searchQuery).toBe("Phone");
  });

  test("should update sort", () => {
    const action = {
      type: "SET_SORT",
      payload: {
        value: "name"
      }
    };
    const updatedState = productsReducer(initialState, action);

    expect(updatedState.filters.sortBy).toBe("name");
  });

  test("should set price range", () => {
   const action = {
      type: "SET_PRICE_RANGE",
      payload: {
        value: { min: 20, max: 800 }
      }
    };

    const updatedState = productsReducer(initialState, action);
    const finalState = { min: 20, max: 800 }
    expect(updatedState.filters.priceRange).toEqual(finalState);
  });


  test("should toggle availbility", () => {
   const action = {
      type: "TOGGLE_AVAILABILITY",
      payload: {
        productId: 1
      }
    };
    const updatedState = productsReducer(initialState, action);
    expect(updatedState.products[0].inStock).toBe(false);
  });


});
