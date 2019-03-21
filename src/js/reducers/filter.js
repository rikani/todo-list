import { SHOW_ALL } from 'Utils/constants.js'

export default function(state = SHOW_ALL, action) {
  switch (action.type) {
    case 'FILTER_CHANGE':
      return action.visibility
    default:
      return state
  }
}
