import React from 'react'
import Checkbox from 'Components/checkbox.js'
import { todoToggleAll } from 'Actions/todos'
import { connect } from 'react-redux'

class ToggleAll extends React.Component {
  constructor(props) {
    super(props)

    this.handleChange = this.handleChange.bind(this)
  }

  render() {
    const active = this.getActive(this.props.todos)
    const todosList = Object.values(this.props.todos)

    return (
      <Checkbox complete={active.length === 0} onChange={this.handleChange} hidden={todosList.length === 0} />
    )
  }

  handleChange(e) {
    this.props.dispatch(todoToggleAll(e.target.checked))
  }

  getActive(todos) {
    const todosList = Object.values(todos)
    return todosList.filter( todo => !todo.complete )
  }
}

const mapStateToProps = state => ({ todos: state.todos })

export default connect(mapStateToProps)(ToggleAll)
