const employeeReducer = require("./EmployeeReducer")

describe("EMPLOYEEReducer", ()=>{
     it("ADD_EMPLOYEE", ()=>{
        const initialState = {employees : []}

        const action = {type: "ADD_EMPLOYEE", payload: { employee: {id: 1, name: "Suman", role: "SDE", salary: 101}}}

        const updatedState = employeeReducer(initialState, action)

        expect(updatedState).toEqual({employees: [{id: 1, name: "Suman", role: "SDE", salary: 101}]})

     })

     it("UPDATE_SALARY", ()=>{
        const initialState = {employees : [ {id: 1, name: "Suman", role: "SDE", salary: 101}, 
                                             {id: 2, name: "Mou", role: "Engineer", salary: 108}]}

        const action = {type: "UPDATE_SALARY", payload: {id:1, salary: 120}}

        const updatedState = employeeReducer(initialState, action)

        expect(updatedState.employees).toEqual([ {id: 1, name: "Suman", role: "SDE", salary: 120}, 
        {id: 2, name: "Mou", role: "Engineer", salary: 108}])

     })

     it("REMOVE_EMPLOYEE", ()=>{
        const initialState = {employees : [ {id: 1, name: "Suman", role: "SDE", salary: 101}, 
        {id: 2, name: "Mou", role: "Engineer", salary: 108}]}

        const action = {type: "REMOVE_EMPLOYEE", payload: {id: 1}}

        const updatedState = employeeReducer(initialState, action)

        expect(updatedState.employees).toEqual([  
        {id: 2, name: "Mou", role: "Engineer", salary: 108}])
     })

     it("FILTER_EMPLOYEES", ()=>{
        const initialState = {employees : [ {id: 1, name: "Suman", role: "SDE", salary: 101}, 
        {id: 2, name: "Mou", role: "Engineer", salary: 108}, 
        {id: 3, name: "Kapil", role: "Comedian", salary: 888888}]}

        const action = {type: "FILTER_EMPLOYEES", payload: {role: "Comedian"}}

        const updatedState = employeeReducer(initialState, action)

        expect(updatedState.employees).toEqual([{id: 3, name: "Kapil", role: "Comedian", salary: 888888}])
     })
})