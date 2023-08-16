
const pollReducer = require("./PollReducer")


describe("Poll Reducer", ()=>{
    it("CREATE_POLL", ()=>{
     const initialState = { polls: []}

     const action = {type: 'CREATE_POLL', payload: {id: 1, question: "Do you love your city?", options: []} }

    const updatedState = pollReducer(initialState, action)

    expect(updatedState).toEqual({polls: [{id: 1, question: "Do you love your city?", options: []}]})
    })

    it("ADD_OPTION", ()=>{
        const initialState = { polls: [{id: 1, question: "Do you love your city?", options: []}]}
   
        const action = {type: 'ADD_OPTION', payload: {pollId: 1,  optionText: "Yes"} }
   
       const updatedState = pollReducer(initialState, action)
   
       expect(updatedState).toEqual({polls: [{id: 1, question: "Do you love your city?", options: [{text: "Yes", votes: 0}]}]})
       })
    it("VOTE", ()=>{
        const initialState = { polls: [{id: 1, question: "Do you love your city?", options: [{text: "Yes", votes: 0}]}]}
   
        const action = {type: 'VOTE', payload: {pollId: 1, optionText: "Yes"} }
   
       const updatedState = pollReducer(initialState, action)
   
       expect(updatedState).toEqual({polls: [{id: 1, question: "Do you love your city?", options: [{text: "Yes", votes: 1}]}]})
       })
  
})


