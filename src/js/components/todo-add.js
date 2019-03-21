import React from 'react'
import Checkbox from 'Components/checkbox.js'
import { KEY_ENTER } from 'Utils/constants.js'
import { todoAdd, todoToggleAll } from 'Actions/todos'
import { connect } from 'react-redux'

class TodoAdd extends React.Component {
  state = {
    value: '',
    checked: false,
  }

  constructor(props) {
    super(props)

    this.handleChange = this.handleChange.bind(this)
    this.handleInput = this.handleInput.bind(this)
    this.handleKeyDown = this.handleKeyDown.bind(this)
  }

  componentDidMount() {
    const active = this.getActive(this.props.todos)
    this.setState({
      checked: active.length === 0,
    })
  }

  componentDidUpdate(prevProps) {
    const prevActive = this.getActive(prevProps.todos)
    const active = this.getActive(this.props.todos)
    if (prevActive.length !== active.length) {
      this.setState({
        checked: active.length === 0,
      })
    }
  }

  render() {
    const todosList = Object.values(this.props.todos)

    return (
      <div className="todo-add">
        <Checkbox complete={this.state.checked} onChange={this.handleChange} hidden={todosList.length === 0} />
        <input className="todo-add__input" type="text" placeholder="Add new todo" value={this.state.value} onChange={this.handleInput} onKeyDown={this.handleKeyDown} />
      </div>
    )
  }

  handleChange(e) {
    this.props.dispatch(todoToggleAll(e.target.checked))
  }

  handleInput(e) {
    this.setState({
      value: e.target.value,
    })
  }

  handleKeyDown(e) {
    if (e.keyCode === KEY_ENTER && this.state.value.length) {
      this.props.dispatch(todoAdd(this.state.value))

      this.setState({
        value: '',
      })
    }
  }

  getActive(todos) {
    const todosList = Object.values(todos)
    return todosList.filter( todo => !todo.complete )
  }
}

const mapStateToProps = state => ({ todos: state.todos })

export default connect(mapStateToProps)(TodoAdd)
