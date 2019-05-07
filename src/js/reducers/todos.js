import { objectDelete } from 'Utils/utils.js'

export default function(state = {}, action) {
  switch (action.type) {
    case 'TODO_ADD': {
      return { ...state, [action.todo.id]: action.todo}
    }
    case 'TODO_DELETE': {
      return objectDelete(state, action.id)
    }
    case 'TODO_UPDATE': {
      return {
        ...state,
        [action.id]: {
          ...state[action.id],
          title: action.title,
        },
      }
    }
    case 'TODO_TOGGLE': {
      return {
        ...state,
        [action.id]: {
          ...state[action.id],
          complete: !state[action.id].complete,
        },
      }
    }
    case 'TODO_TOGGLE_ALL': {
      let newState = {}
      Object.values(state).forEach( todo => {
        newState = {
          ...newState,
          [todo.id]: {
            ...state[todo.id],
            complete: action.complete,
          },
        }
      })
      return newState
    }
    case 'TODO_REMOVE_COMLETED': {
      let newState = state
      Object.values(newState).forEach( todo => {
        if (todo.complete) {
          newState = objectDelete(newState, todo.id)
        }
      })
      return newState
    }
    default: {
      return state
    }
  }
}
