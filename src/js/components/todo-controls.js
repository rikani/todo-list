import React from 'react'
import Button from 'Components/button.js'
import FilterButton from 'Components/filter-button.js'
import { SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED } from 'Utils/constants.js'
import { todoRemoveCompleted } from 'Actions/todos'
import { connect } from 'react-redux'

class TodoControls extends React.Component {
  constructor(props) {
    super(props)
    this.handleClear = this.handleClear.bind(this)
  }

  render() {
    const { todos, filter } = this.props
    const list = Object.values(todos)
    const active = list.filter( todo => !todo.complete )
    const completed = list.some( todo => todo.complete)

    return (
      (active.length > 0 || completed) && (
        <div className="todo-controls">
          <div className="todo-controls__count">{`${active.length} item${active.length === 1 ? '' : 's'} left`}</div>
          <div className="todo-controls__actions">
            <FilterButton className="todo-controls__item" type={SHOW_ALL} active={filter}>All</FilterButton>
            <FilterButton className="todo-controls__item" type={SHOW_ACTIVE} active={filter}>Active</FilterButton>
            <FilterButton className="todo-controls__item" type={SHOW_COMPLETED} active={filter}>Completed</FilterButton>
          </div>
          <div className="todo-controls__clear">
            {completed &&
              <Button type="button" onClick={this.handleClear} accept>Clear completed</Button>
            }
          </div>
        </div>
      )
    )
  }

  handleClear() {
    this.props.dispatch(todoRemoveCompleted())
  }
}

const mapStateToProps = state => ({ todos: state.todos, filter: state.filter })

export default connect(mapStateToProps)(TodoControls)
