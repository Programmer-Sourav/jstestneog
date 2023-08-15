const todoReducer = require("./ToDoReducer")

describe("Testing Todo", ()=>{
    it("ADD TODO", ()=>{
      const initialState = {
        todos: [{id: 1, text: "My First Todo for Testing", completed: false}]
      }

      const action = { type: 'ADD_TODO', 
                       payload: {id: 2, text: "Go to Morning walk", completed: false}
                     }

      const updatedState = todoReducer(initialState, action);
      
      expect(updatedState).toEqual({
        todos: [{id: 1, text: "My First Todo for Testing", completed: false},
                 {id: 2, text: "Go to Morning walk", completed: false}]
      })
    })


    it("TOGGLE TODO", ()=>{
        const initialState = {
            todos : [{id: 1, text: "My First Todo for Testing", completed: false}]
        }

        const action = {type: 'TOGGLE_TODO', payload: {id: 1}}

        const updatedState = todoReducer(initialState, action);

        expect(updatedState).toEqual({
            todos: [{id: 1, text: "My First Todo for Testing", completed: true}
                    ]
          })
        })

})