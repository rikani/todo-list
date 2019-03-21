import React from 'react'
import { mount } from 'enzyme'
import Root from 'Js/root.js'
import TodoList from 'Components/todo.js'

let component

beforeEach(() => {
  const initialState = {
    todos: {
      '1': { id: '1', title: 'New Todo Item 1', complete: false },
      '2': { id: '2', title: 'New Todo Item 2', complete: false },
    }
  }

  component = mount(
    <Root initialState={initialState}>
      <TodoList />
    </Root>
  )
})


it('adds two TodoIem\'s', () => {
  expect(component.find('.todo-item')).toHaveLength(2)
})
