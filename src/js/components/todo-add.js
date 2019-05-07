import React from 'react'
import { KEY_ENTER } from 'Utils/constants.js'
import { todoAdd } from 'Actions/todos'
import { connect } from 'react-redux'

class TodoAdd extends React.Component {
  constructor(props) {
    super(props)

    this.input = React.createRef()
    this.handleKeyDown = this.handleKeyDown.bind(this)
  }

  render() {
    return (
      <div className="todo-add">
        <input className="todo-add__input" type="text" placeholder="Add new todo" ref={this.input} onKeyDown={this.handleKeyDown} />
      </div>
    )
  }

  handleKeyDown(e) {
    if (e.keyCode === KEY_ENTER && this.input.current.value.length) {
      this.props.todoAdd(this.input.current.value)

      this.input.current.value = ''
    }
  }
}

export default connect(null, { todoAdd })(TodoAdd)
