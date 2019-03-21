import React from 'react'
import { connect } from 'react-redux'
import { SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED } from 'Utils/constants.js'
import TodoItem from 'Components/todo-item.js'

const TodoList = ({ todos, filter }) => (
  <div className="todo-list">
    {getFilteredList(Object.values(todos), filter).map( todo => <TodoItem key={todo.id} {...todo} /> )}
  </div>
)

const getFilteredList = (todos, filter) => {
  switch (filter) {
    case SHOW_ACTIVE:
      return todos.filter( todo => !todo.complete)
    case SHOW_COMPLETED:
      return todos.filter( todo => todo.complete)
    case SHOW_ALL:
    default:
      return todos
  }
}

const mapStateToProps = state => ({ todos: state.todos, filter: state.filter })

export default connect(mapStateToProps)(TodoList)
