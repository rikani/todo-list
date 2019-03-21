import { objectDelete, updateStorage } from 'Utils/utils.js'

const key = 'todos'
const todos = localStorage.getItem(key)

const initialState = (todos && JSON.parse(todos)) || {}

export default function(state = initialState, action) {
  let newObj = state
  switch (action.type) {
    case 'TODO_ADD': {
      newObj = { ...state, [action.todo.id]: action.todo}
      updateStorage(key, newObj)
      break
    }
    case 'TODO_DELETE': {
      newObj = objectDelete(state, action.id)
      updateStorage(key, newObj)
      break
    }
    case 'TODO_UPDATE': {
      newObj = {
        ...state,
        [action.id]: {
          ...state[action.id],
          title: action.title,
        },
      }
      updateStorage(key, newObj)
      break
    }
    case 'TODO_TOGGLE': {
      newObj = {
        ...state,
        [action.id]: {
          ...state[action.id],
          complete: !state[action.id].complete,
        },
      }
      updateStorage(key, newObj)
      break
    }
    case 'TODO_TOGGLE_ALL': {
      Object.values(newObj).forEach( todo => {
        newObj = {
          ...newObj,
          [todo.id]: {
            ...newObj[todo.id],
            complete: action.complete,
          },
        }
      })

      updateStorage(key, newObj)
      break
    }
    case 'TODO_REMOVE_COMLETED': {
      Object.values(newObj).forEach( todo => {
        if (todo.complete) {
          newObj = objectDelete(newObj, todo.id)
        }
      })
      updateStorage(key, newObj)
      break
    }
    default: {
      updateStorage(key, newObj)
    }
  }
  return newObj
}
