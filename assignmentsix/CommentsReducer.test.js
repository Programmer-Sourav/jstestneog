import cartReducer, { initialState } from "./cart.reducer";

describe("testing comment reducer", () => {
  test("should add comment", () => {
    let action = {
      type: "ADD_COMMENT",
      payload: {
        comment: {
          id: "1",
          text: "Nice!",
          votes: 0, 
          replies: []
        }
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
      type: "REMOVE_COMMENT",
      payload: {
        commentId: 1
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
      type: "UPVOTE_COMMENT",
      payload: {
        commentId: 1
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
      type: "ADD_REPLY",
      payload: {
        commentId: 2, reply: {id: 1, text: "Superb work"}
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
      type: "REMOVE_REPLY",
      payload: {
        commentId: 2, replyId: 1
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


  test("should downvote comment", () => {
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
              votes: 2, 
              replies: []
            }
          ]
    };

    const action = {
      type: "DOWNVOTE_COMMENT",
      payload: {
        commentId: 2
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
            votes: 1, 
            replies: []
          }
      ]
    };

    const reducedState = cartReducer(initialState, action);

    expect(reducedState).toEqual(finalState);
  });
});