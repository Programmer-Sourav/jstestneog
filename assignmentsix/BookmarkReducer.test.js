describe("testing cart", ()=>{
    it("testing add to cart", ()=>{
    const initialState = {
        bookmarks: [{id:1, title: "Bookmark1", url: "https://www.newsone.com", tags: ["news", "jobs"] }, 
                    {id:1, title: "Bookmark2", url: "https://www.facebook.com", tags: ["social", "friends"] }, 
                   {id:1, title: "Bookmark3", url: "https://www.rbi.gov.in", tags: ["govt", "banking", "news"] }]
     }

     const action = {
        type: 'ADD_BOOKMARK', 
        payload: {bookmark: {id:1, title: "Bookmark4", url: "https://www.demofour.com", tags: ["govt", "news"] }}
     }

     const updatedState = cartReducer(initialState, action)

     expect(updatedState).toEqual({
        bookmarks:  [{id:1, title: "Bookmark1", url: "https://www.newsone.com", tags: ["news", "jobs"] }, 
        {id:1, title: "Bookmark2", url: "https://www.facebook.com", tags: ["social", "friends"] }, 
       {id:1, title: "Bookmark3", url: "https://www.rbi.gov.in", tags: ["govt", "banking", "news"] }, 
       {id:1, title: "Bookmark4", url: "https://www.demofour.com", tags: ["govt", "news"] }]
        
     })

    })

    it("testing remove from bookmark", ()=>{
        const initialState = {
            bookmarks: [{id:1, title: "Bookmark1", url: "https://www.newsone.com", tags: ["news", "jobs"] }, 
            {id:2, title: "Bookmark2", url: "https://www.facebook.com", tags: ["social", "friends"] }, 
           {id:3, title: "Bookmark3", url: "https://www.rbi.gov.in", tags: ["govt", "banking", "news"] }]
           }
    
         const action = {
            type: 'REMOVE_BOOKMARK', 
            payload: {itemId: 3 }
         }
    
         const updatedState = cartReducer(initialState, action)
    
         expect(updatedState).toEqual({
            bookmarks: [{id:1, title: "Bookmark1", url: "https://www.newsone.com", tags: ["news", "jobs"] }, 
            {id:2, title: "Bookmark2", url: "https://www.facebook.com", tags: ["social", "friends"] }]
         })
    })

    it("update tags", ()=>{
        const initialState = {
            bookmarks: [{id:1, title: "Bookmark1", url: "https://www.newsone.com", tags: ["news", "jobs"] }, 
            {id:1, title: "Bookmark2", url: "https://www.facebook.com", tags: ["social", "friends"] }, 
           {id:1, title: "Bookmark3", url: "https://www.rbi.gov.in", tags: ["govt", "banking", "news"] }]    
         }
    
         const action = {
            type: 'UPDATE_TAGS', 
            payload: {itemId: 2, newtag: "networking", tagToBeUpdated: "friends"}
         }
    
         const updatedState = cartReducer(initialState, action)
    
         expect(updatedState).toEqual({
            bookmarks: [{id:1, title: "Bookmark1", url: "https://www.newsone.com", tags: ["news", "jobs"] }, 
            {id:2, title: "Bookmark2", url: "https://www.facebook.com", tags: ["social",  "friends"] }, 
           {id:3, title: "Bookmark3", url: "https://www.rbi.gov.in", tags: ["govt", "banking", "news"] }] , 
          
         })
        })

        it("filter bookmarks", ()=>{
            const initialState = {
                bookmarks: [{id:1, title: "Bookmark1", url: "https://www.newsone.com", tags: ["news", "jobs"] }, 
                {id:2, title: "Bookmark2", url: "https://www.facebook.com", tags: ["social", "networking"] }, 
               {id:3, title: "Bookmark3", url: "https://www.rbi.gov.in", tags: ["govt", "banking", "news"] }],
            
             }
        
             const action = {
                type: 'FILTER_BOOKMARKS_BY_TAG', 
                payload: {tag: ["social", "jobs"]}
             }
        
             const updatedState = cartReducer(initialState, action)
        
             expect(updatedState).toEqual({
                bookmarks: [{id:1, title: "Bookmark1", url: "https://www.newsone.com", tags: ["news", "jobs"] }, 
                {id:2, title: "Bookmark2", url: "https://www.facebook.com", tags: ["social", "friends", "networking"]}]
            })

            it("add tags", ()=>{
                const initialState = {
                    bookmarks: [{id:1, title: "Bookmark1", url: "https://www.newsone.com", tags: ["news", "jobs"] }, 
                    {id:2, title: "Bookmark2", url: "https://www.facebook.com", tags: ["social", "networking"] }, 
                   {id:3, title: "Bookmark3", url: "https://www.rbi.gov.in", tags: ["govt", "banking", "news"] }],
                
                 }
            
                 const action = {
                    type: 'ADD_TAG', 
                    payload: {itemId: 2, tag: "social"}
                 }
            
                 const updatedState = cartReducer(initialState, action)
            
                 expect(updatedState).toEqual({
                    bookmarks: [{id:1, title: "Bookmark1", url: "https://www.newsone.com", tags: ["news", "jobs"] }, 
                    {id:2, title: "Bookmark2", url: "https://www.facebook.com", tags: ["social", "friends", "networking"]}, 
                    {id:3, title: "Bookmark3", url: "https://www.rbi.gov.in", tags: ["govt", "banking", "news"] }]
                })
            })

                it("REMOVE_TAG", ()=>{
                    const initialState = {
                        bookmarks: [{id:1, title: "Bookmark1", url: "https://www.newsone.com", tags: ["news", "jobs"] }, 
                        {id:2, title: "Bookmark2", url: "https://www.facebook.com", tags: ["social", "friends", "networking"]}, 
                        {id:3, title: "Bookmark3", url: "https://www.rbi.gov.in", tags: ["govt", "banking", "news"] }]
                     }
                
                     const action = {
                        type: 'REMOVE_TAG', 
                        payload:  {itemId: 1, tagToBeRemoved: "jobs"}
                     }
                
                     const updatedState = cartReducer(initialState, action)
                
                     expect(updatedState).toEqual({
                        bookmarks: [{id:1, title: "Bookmark1", url: "https://www.newsone.com", tags: ["news"] }, 
                        {id:2, title: "Bookmark2", url: "https://www.facebook.com", tags: ["social", "friends", "networking"]}, 
                        {id:3, title: "Bookmark3", url: "https://www.rbi.gov.in", tags: ["govt", "banking", "news"] }]
                     })
                    })

                })
})