import { uniqueId } from 'Utils/utils.js'

export const todoAdd = (title) => ({
  type: 'TODO_ADD',
  todo: {
    id: uniqueId(),
    title,
    complete: false,
  },
})

export const todoDelete = (id) => ({
  type: 'TODO_DELETE',
  id,
})

export const todoUpdate = (id, title) => ({
  type: 'TODO_UPDATE',
  id,
  title,
})

export const todoToggle = (id) => ({
  type: 'TODO_TOGGLE',
  id,
})

export const todoToggleAll = (complete) => ({
  type: 'TODO_TOGGLE_ALL',
  complete,
})

export const todoRemoveCompleted = () => ({
  type: 'TODO_REMOVE_COMLETED',
})
