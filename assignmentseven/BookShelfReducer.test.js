const bookshelfReducer = require("./BookShelfReducer")



describe("BookShelf Reducer", ()=>{
    it("ADD_BOOK", ()=>{
     const initialState = { books: []}

     const action = {type: "ADD_BOOK", payload: {id: 1, title: "Energize Your mind", author: "Gaur Gopal Das"} }

    const updatedState = bookshelfReducer(initialState, action)

    expect(updatedState).toEqual({books: [{id: 1, title: "Energize Your mind", author: "Gaur Gopal Das", category: null}]})
    })

    it("ADD_CATEGORY", ()=>{
        const initialState = {books: [{id: 1, title: "Energize Your mind", author: "Gaur Gopal Das"}], 
                              categories: []}
   
        const action = {type: 'ADD_CATEGORY', payload: {id: 1,  name: "Positivity"} }
   
       const updatedState = bookshelfReducer(initialState, action)
       console.log(333, updatedState)
       expect(updatedState).toEqual({books: [{id: 1, title: "Energize Your mind", author: "Gaur Gopal Das", categories: [{id: 1, name: "Positivity"}]}]})
       })
    it("ASSIGN_CATEGORY", ()=>{
        const initialState = { books: [{id: 1, title: "Energize Your mind", author: "Gaur Gopal Das"}, 
        {id: 2, title: "FittR", author: "No idea"}], 
        category: [{id: 1, name: "fitness"}, {id:2, name: "mind"}]}
   
        const action = {type: 'ASSIGN_CATEGORY', payload: {bookId: 2, categoryId: 1} }
   
       const updatedState = bookshelfReducer(initialState, action)
   
       expect(updatedState).toEqual({books: [{id: 1, title: "Energize Your mind", author: "Gaur Gopal Das", category: null}, 
       {id: 2, title: "FittR", author: "No idea", category: "fitness"}]})
       })
  
})


