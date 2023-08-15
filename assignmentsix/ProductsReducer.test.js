import cartReducer, { initialState } from "./cart.reducer";

describe("testing comment reducer", () => {
  test("should add comment", () => {
    let action = {
      type: "SET_CATEGORY_FILTER",
      payload: {
        category: {value: "Electronics"}
      }
    };

    let state = cartReducer(initialState, action);
    expect(state).toEqual({
      comments: [
        {
          id: 1,
          text: "Nice!",
          votes: 0,
          replies: []
        }
      ]
    });
  });

  test("should remove comment", () => {
    const initialState = {
      comments: [
        {
          id: 1,
          text: "Nice!",
          votes: 0, 
          replies: []
        },
        {
          id: 2,
          text: "Great!",
          votes: 0, 
          replies: []
        }
      ]
    };

    const action = {
      type: "SEARCH_QUERY",
      payload: {
        search: "Phone"
      }
    };

    const finalState = {
      items: [
        {
            id: 2,
            text: "Great!",
            votes: 0, 
            replies: []
          }
      ]
    };

    const reducedState = cartReducer(initialState, action);

    expect(reducedState).toEqual(finalState);
  });

  test("should upvote comment", () => {
    const initialState = {
        comments: [
            {
              id: 1,
              text: "Nice!",
              votes: 0, 
              replies: []
            },
            {
              id: 2,
              text: "Great!",
              votes: 0, 
              replies: []
            }
          ]
    };

    const action = {
      type: "SET_SORT",
      payload: {
        value: "name"
      }
    };

    const finalState = {
      items: [
        {
            id: 1,
            text: "Nice!",
            votes: 1, 
            replies: []
          },
          {
            id: 2,
            text: "Great!",
            votes: 0, 
            replies: []
          }
      ]
    };

    const reducedState = cartReducer(initialState, action);

    expect(reducedState).toEqual(finalState);
  });

  test("should add reply", () => {
    const initialState = {
        comments: [
            {
              id: 1,
              text: "Nice!",
              votes: 0, 
              replies: []
            },
            {
              id: 2,
              text: "Great!",
              votes: 0, 
              replies: []
            }
          ]
    };

    const action = {
      type: "SET_PRICE_RANGE",
      payload: {
        min: { min: 0, max: 1000 }
      }
    };

    const finalState = {
      items: [
        {
            id: 1,
            text: "Nice!",
            votes: 1, 
            replies: []
          },
          {
            id: 2,
            text: "Great!",
            votes: 0, 
            replies: ["Superb work"]
          }
      ]
    };

    const reducedState = cartReducer(initialState, action);

    expect(reducedState).toEqual(finalState);
  });


  test("should remove reply", () => {
    const initialState = {
        comments: [
            {
              id: 1,
              text: "Nice!",
              votes: 0, 
              replies: []
            },
            {
              id: 2,
              text: "Great!",
              votes: 0, 
              replies: ["Superb work"]
            }
          ]
    };

    const action = {
      type: "TOGGLE_AVAILABILITY",
      payload: {
        productId: 1
      }
    };

    const finalState = {
      items: [
        {
            id: 1,
            text: "Nice!",
            votes: 1, 
            replies: []
          },
          {
            id: 2,
            text: "Great!",
            votes: 0, 
            replies: []
          }
      ]
    };

    const reducedState = cartReducer(initialState, action);

    expect(reducedState).toEqual(finalState);
  });


});
