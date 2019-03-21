import React from 'react'
import classnames from 'classnames'
import Checkbox from 'Components/checkbox.js'
import { KEY_ENTER } from 'Utils/constants.js'
import { todoToggle, todoDelete, todoUpdate } from 'Actions/todos'
import { connect } from 'react-redux'

class TodoItem extends React.Component {
  state = {
    editing: false,
    tmp: '',
  }

  constructor(props) {
    super(props)

    this.input = React.createRef()

    this.handleClick = this.handleClick.bind(this)
    this.handleChnage = this.handleChnage.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
    this.handleEdit = this.handleEdit.bind(this)
    this.handleBlur = this.handleBlur.bind(this)
    this.handleKeyDown = this.handleKeyDown.bind(this)
  }

  componentDidMount() {
    this.setState({
      tmp: this.props.title,
    })
  }

  render() {
    const { title, complete } = this.props
    const cls = classnames('todo-item', {
      'todo-item_complete': complete,
      'todo-item_editing': this.state.editing,
    })
    return (
      <div className={cls}>
        <Checkbox complete={complete} onChange={this.handleChnage} />
        <span className="todo-item__label" onClick={this.handleClick}>{title}</span>
        <input
          ref={this.input}
          type="text"
          className="todo-item__editor"
          value={this.state.tmp}
          onChange={this.handleEdit}
          onBlur={this.handleBlur}
          onKeyDown={this.handleKeyDown}
        />
        <button type="button" className="todo-item__delete" onClick={this.handleDelete}></button>
      </div>
    )
  }

  handleClick() {
    this.setState({
      editing: true,
    }, () => {
      this.input.current.focus()
    })
  }

  handleChnage() {
    this.props.dispatch(todoToggle(this.props.id))
  }

  handleEdit(e) {
    this.setState({
      tmp: e.target.value,
    })
  }

  handleBlur() {
    this.submitTitle()
  }

  handleKeyDown(e) {
    if (e.keyCode === KEY_ENTER && this.state.tmp.length) {
      this.submitTitle()
    }
  }

  handleDelete() {
    this.props.dispatch(todoDelete(this.props.id))
  }

  submitTitle() {
    this.props.dispatch(todoUpdate(this.props.id, this.state.tmp))
    this.setState({
      editing: false,
    })
  }
}

export default connect()(TodoItem)
