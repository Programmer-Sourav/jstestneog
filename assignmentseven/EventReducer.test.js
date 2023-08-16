const eventReducer = require("./EventReducer")

describe("EventReducer", ()=>{
    it("CREATE_EVENT", ()=>{
       const initialState = {events : []}

       const action = {type: "CREATE_EVENT", payload: { event: {id: 1, event: "Movie1", date: "16-08-2023"}}}

       const updatedState = eventReducer(initialState, action)

       expect(updatedState).toEqual({events: [{id: 1, event: "Movie1", date: "16-08-2023"}]})

    })

    it("REMOVE_EVENT", ()=>{
       const initialState = {events : [ {id: 1, name: "Suman", role: "SDE", salary: 101}, 
                                            {id: 2, name: "Mou", role: "Engineer", salary: 108}]}

       const action = {type: "REMOVE_EVENT", payload: {id:1}}

       const updatedState = eventReducer(initialState, action)

       expect(updatedState.events).toEqual([{id: 2, name: "Mou", role: "Engineer", salary: 108}])

    })

    it("ADD_ATTENDEE", ()=>{
        const initialState = { events: [
            { id: 1, title: "Movie2", attendee: []}] };
        const action = {
          type: "ADD_ATTENDEE",
          payload: {
            eventId: 1,
            attendee: { id: 1, name: "Suman" }
          }
        };
        const updatedState = eventReducer(initialState, action);
        expect(updatedState.events).toEqual(
          expect.arrayContaining([
            { id: 1, title: "Movie2", attendee: [{ id: 1, name: "Suman" }] }
          ])
        );
      })
     it("REMOVE_ATTENDEE", ()=>{
        const initialState = {
            events: [
              {
                id: 1,
                title: "Movie2",
                attendee: [
                  { id: 1, name: "Suman" },
                  { id: 2, name: "Mou" }
                ]
              }
            ]
          };
          const action = { type: "REMOVE_ATTENDEE", payload: { eventId: 1, id: 1 } }
          const updatedState = eventReducer(initialState, action)
          expect(updatedState.events).toEqual([
            {
              id: 1,
              title: "Movie2",
              attendee: [{ id: 2, name: "Mou" }]
            }
          ])
        })
})