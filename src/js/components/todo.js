import React from 'react'
import { hot } from 'react-hot-loader/root'
import TodoAdd from 'Components/todo-add.js'
import TodoList from 'Components/todo-list.js'
import TodoControls from 'Components/todo-controls.js'

const TodoApp = () => (
  <div className="todo">
    <h1 className="todo__title">Todo List</h1>
    <div>
      <TodoAdd />
      <TodoList />
      <TodoControls />
    </div>
  </div>
)

export default hot(TodoApp)
