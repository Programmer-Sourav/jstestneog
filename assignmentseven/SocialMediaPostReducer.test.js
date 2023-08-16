const postReducer = require("./SocialMediaPostReducer")

describe("SocialMediaReducer", ()=>{
     it("CREATE_POST", ()=>{
        const initialState = {posts : []}

        const action = {type: "CREATE_POST", payload: {id: 1, author: "Sourav", content: "What's up?", likes: 0}}

        const updatedState = postReducer(initialState, action)

        expect(updatedState).toEqual({posts: [{id: 1, author: "Sourav", content: "What's up?", likes: 0}]})

     })

     it("EDIT_POST", ()=>{
        const initialState = {posts : [ {id: 1, author: "Sourav", content: "What's up?", likes: 0}]}

        const action = {type: "EDIT_POST", payload: {id:1, newContent: "It's cool"}}

        const updatedState = postReducer(initialState, action)

        expect(updatedState.posts).toEqual([{id: 1, author: "Sourav", content: "It's cool", likes: 0}])

     })

     it("DELETE_POST", ()=>{
        const initialState = {posts : [ {id: 1, author: "Sourav", content: "What's up?", likes: 0}]}

        const action = {type: "DELETE_POST", payload: {id: 1}}

        const updatedState = postReducer(initialState, action)

        expect(updatedState.posts).toEqual([])
     })

     it("LIKE_POST", ()=>{
        const initialState = {posts : [ {id: 1, author: "Sourav", content: "What's up?", likes: 0}]}

        const action = {type: "LIKE_POST", payload: {id: 1}}

        const updatedState = postReducer(initialState, action)

        expect(updatedState.posts).toEqual([ {id: 1, author: "Sourav", content: "What's up?", likes: 1}])
     })
})