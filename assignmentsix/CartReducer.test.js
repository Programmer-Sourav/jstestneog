const cartReducer = require("./CartReducer")

describe("testing cart", ()=>{
    it("testing add to cart", ()=>{
    const initialState = {
        items: [{id:1, product: "Pen", price: 100}],
        totalQuantity: 1, 
        totalPrice: 100
     }

     const action = {
        type: 'ADD_TO_CART', 
        payload: {item: {id: 2, product: "Pencil", price: 20 }}
     }

     const updatedState = cartReducer(initialState, action)

     expect(updatedState).toEqual({
        items: [{id:1, product: "Pen", price: 100}, 
                {id: 2, product: "Pencil", price: 20 }], 
        totalQuantity : 2, 
        totalPrice: 120,
        
     })

    })

    it("testing remove from cart", ()=>{
        const initialState = {
            items: [{id:1, product: "Pen", price: 100}, 
                   {id: 2, product: "Pencil", price: 20 }],
            totalQuantity: 2, 
            totalPrice: 120,
           
         }
    
         const action = {
            type: 'REMOVE_FROM_CART', 
            payload: {item: {id: 2, product: "Pencil", price: 20 }}
         }
    
         const updatedState = cartReducer(initialState, action)
    
         expect(updatedState).toEqual({
            items: [{id:1, product: "Pen", price: 100}], 
            totalQuantity : 1, 
            totalPrice: 100
         })
    })

    it("update Quantity", ()=>{
        const initialState = {
            items: [{id:1, product: "Pen", price: 100, quantity: 1}, 
                   {id: 2, product: "Pencil", price: 20, quantity: 2 }],
            totalQuantity: 3, 
            totalPrice: 140,
           
         }
    
         const action = {
            type: 'UPDATE_QUANTITY', 
            payload: {itemId: 2}
         }
    
         const updatedState = cartReducer(initialState, action)
    
         expect(updatedState).toEqual({
            items: [{id:1, product: "Pen", price: 100, quantity: 1}, 
                    {id: 2, product: "Pencil", price: 20, quantity: 2 }], 
            totalQuantity : 3, 
            totalPrice: 160
         })
        })

        it("Add discount", ()=>{
            const initialState = {
                items: [{id:1, product: "Pen", price: 100, quantity: 1}, 
                       {id: 2, product: "Pencil", price: 20, quantity: 2 }],
                totalQuantity: 3, 
                totalPrice: 140,
                discounts: []
             }
        
             const action = {
                type: 'ADD_DISCOUNT', 
                payload: {discount: {value: 40}}
             }
        
             const updatedState = cartReducer(initialState, action)
        
             expect(updatedState).toEqual({
                items: [{id:1, product: "Pen", price: 100, quantity: 1}, 
                        {id: 2, product: "Pencil", price: 20, quantity: 2 }], 
                totalQuantity : 3, 
                totalPrice: 100,
                discounts: [{value: 40}]
             })
            })

            it("Apply Promotion", ()=>{
                const initialState = {
                    items: [{id:1, product: "Pen", price: 100, quantity: 1}, 
                           {id: 2, product: "Pencil", price: 20, quantity: 2 }],
                    totalQuantity: 3, 
                    totalPrice: 140,
                    discounts: []
                 }
            
                 const action = {
                    type: 'APPLY_PROMOTION', 
                    payload: {promotion: {value: 40}}
                 }
            
                 const updatedState = cartReducer(initialState, action)
            
                 expect(updatedState).toEqual({
                    items: [{id:1, product: "Pen", price: 100, quantity: 1}, 
                            {id: 2, product: "Pencil", price: 20, quantity: 2 }], 
                    totalQuantity : 3, 
                    totalPrice: 100,
                    discounts: [{value: 40}]
                 })
                })

                it("Remove Discount", ()=>{
                    const initialState = {
                        items: [{id:1, product: "Pen", price: 100, quantity: 1}, 
                               {id: 2, product: "Pencil", price: 20, quantity: 2 }],
                        totalQuantity: 3, 
                        totalPrice: 140,
                        discounts: [{id: 1, value: 40}, {id: 2, value: 20}]
                     }
                
                     const action = {
                        type: 'REMOVE_DISCOUNT', 
                        payload:  {discountId: 1}
                     }
                
                     const updatedState = cartReducer(initialState, action)
                
                     expect(updatedState).toEqual({
                        items: [{id:1, product: "Pen", price: 100, quantity: 1}, 
                                {id: 2, product: "Pencil", price: 20, quantity: 2 }], 
                        totalQuantity : 3, 
                        totalPrice: 120,
                        discounts: [{id: 2, value: 20}]
                     })
                    })
})