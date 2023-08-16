const initialState = {
    comments: [], 
    replies: []
}

function commentsReducer (state= initialState, action){
    switch (action.type) {
        case 'ADD_COMMENT':
        return {
          ...state,
          comments: [
            ...state.comments,
            action.payload.comment
          ],
        }

        case 'REMOVE_COMMENT': 
        return {
          ...state,
          comments: state.comments.filter((comment)=>(comment.id!==action.payload.commentId)),
        }

        case  'UPVOTE_COMMENT': 
        return {
          ...state,
          comments: state.comments.map((comment)=>comment.id===action.payload.commentId ? {...comment, votes: comment.votes+1} : comment)
        }

        case 'ADD_REPLY': 
        const replyToBeAdded = action.payload.reply
        const itemToBeModified= action.payload.commentId
        return {...state, comments: state.comments.map((comment)=>(comment.id===itemToBeModified ? {...comment, replies: [...comment.replies, replyToBeAdded]} : comment))}
        case "REMOVE_REPLY": 

        const itemToBeVisited = action.payload.commentId
        const replyToBeRemoved = action.payload.replyId
        return {...state, comments: state.comments.map(comment => (
            comment.id === itemToBeVisited
              ? { ...comment, replies: comment.replies.filter(reply => reply.id !== replyToBeRemoved) }
              : comment
          ))}  

          case  'DOWNVOTE_COMMENT': 
          return {
            ...state,
            comments: state.comments.map((comment)=>comment.id===action.payload.commentId ? {...comment, votes: comment.votes-1} : comment)
          }   
     
        default: 
        return {state}

    }
}

module.exports = commentsReducer