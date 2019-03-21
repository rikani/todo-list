import React from 'react'
import { shallow } from 'enzyme'
import TodoApp from 'Components/todo.js'
import TodoAdd from 'Components/todo-add.js'
import TodoList from 'Components/todo-list.js'
import TodoControls from 'Components/todo-controls.js'

let component

beforeEach(() => {
  component = shallow(<TodoApp />)
})

it('renders a <TodoAdd /> component', () => {
  expect(component.find(TodoAdd)).toHaveLength(1)
})

it('renders a <TodoList /> component', () => {
  expect(component.find(TodoList)).toHaveLength(1)
})

it('renders a <TodoControls /> component', () => {
  expect(component.find(TodoControls)).toHaveLength(1)
})
