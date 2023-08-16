const initialState = {
    events: []
  }
  
  function eventReducer(state = initialState, action) {
    switch (action.type) {
      case 'CREATE_EVENT':
        return {
          ...state,
          events: [...state.events, action.payload.event],
        }
      case 'REMOVE_EVENT':
        return {
          ...state,
          events: state.events.filter((event)=>event.id!==action.payload.id)
        }
      case 'ADD_ATTENDEE':
        const attendeeToBeAdded = action.payload.attendee;
        const itemToBeModified = action.payload.eventId;
        return {
          ...state,
          events: state.events.map(event =>
            event.id === itemToBeModified
              ? { ...event, attendee: [...event.attendee, attendeeToBeAdded] }
              : event
          )
        }
      case 'REMOVE_ATTENDEE':
        const itemToBeVisited = action.payload.eventId;
        const attendeeToBeRemoved = action.payload.id;
        return {
          ...state,
          events: state.events.map(event =>
            event.id === itemToBeVisited
              ? { ...event, attendee: event.attendee.filter(attendee => attendee.id !== attendeeToBeRemoved) }
              : event
          )
        }
      default:
        return state
    }
  }

  module.exports = eventReducer