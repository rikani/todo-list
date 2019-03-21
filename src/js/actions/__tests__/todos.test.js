import { todoAdd, todoDelete } from 'Actions/todos'

describe('todoAdd', () => {
  it('has the corret type', () => {
    const action = todoAdd();

    expect(action.type).toEqual('TODO_ADD')
  })

  it('has the corret data', () => {
    const action = todoAdd('New Todo');

    expect(action.todo.title).toEqual('New Todo')
  })
})

describe('todoDelete', () => {
  it('has the corret type', () => {
    const action = todoDelete();

    expect(action.type).toEqual('TODO_DELETE')
  })

  it('has the corret data', () => {
    const action = todoDelete('TestId');

    expect(action.id).toEqual('TestId')
  })
})
