const initialState = {
    bookmarks: [],
  }
  
  function bookmarkReducer(state = initialState, action) {
    switch (action.type) {
      case 'ADD_BOOKMARK':
        return {
          ...state,
          bookmarks: [
            ...state.bookmarks,
            action.payload.bookmark
          ],
        }
      case 'REMOVE_BOOKMARK':
        return {
            ...state, 
            bookmarks : state.bookmarks.filter((eachBookMark)=>(eachBookMark.id!==action.payload.itemId))
        } 
      case 'UPDATE_TAGS': 
        const itemId = action.payload.itemId;
        const tagToBeUpdated = action.payload.tagToBeUpdated;
        const newTag = action.payload.newtag;
        return {...state, bookmarks: state.bookmarks.map((bookmark)=>bookmark.id===itemId ? {...bookmark, tags: bookmark.tags.map((tag)=>tag===tagToBeUpdated ? newTag : tag)} : bookmark )}  
        
      case 'FILTER_BOOKMARKS_BY_TAG':
        const incomingTag =  action.payload.tag
        return {...state, bookmarks: state.bookmarks.filter((bookmark)=>(bookmark.tags.includes(incomingTag)))}  
       
      case 'ADD_TAGS':
        const tagToBeAdded = action.payload.tag
        const itemToBeModified= action.payload.itemId
        return {...state, bookmarks: state.bookmarks.map((bookmark)=>(bookmark.id===itemToBeModified ? {...bookmark, tags: [...bookmark.tags, tagToBeAdded]} : bookmark))}
     case "REMOVE_TAG": 

        const itemToBeVisited = action.payload.itemId
        const tagToBeRemoved = action.payload.tagToBeRemoved
        return {...state, bookmarks: state.bookmarks.map(bookmark => (
            bookmark.id === itemToBeVisited
              ? { ...bookmark, tags: bookmark.tags.filter(tag => tag !== tagToBeRemoved) }
              : bookmark
          ))}  
      default:
        return state
    }
  }


  module.exports = bookmarkReducer