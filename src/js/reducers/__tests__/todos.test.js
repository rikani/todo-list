import todos from 'Reducers/todos.js'

it('handles actions of type TODO_ADD', () => {
  const action = {
    type: 'TODO_ADD',
    todo: {
      id: 'test',
      title: 'New Todo Item',
      complete: false,
    }
  }

  const newState = todos({}, action)

  expect(newState).toEqual({
    'test': { id: 'test', title: 'New Todo Item', complete: false }
  })
})

it('handles actions with unknown type', () => {
  const newState = todos({}, { type: 'FAKE_TYPE' })

  expect(newState).toEqual({})
})