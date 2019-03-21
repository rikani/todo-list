import React from 'react'
import 'Styles/index.css'
import ReactDOM from 'react-dom'
import Root from 'Js/root.js'
import TodoApp from 'Components/todo.js'

ReactDOM.render(
  <Root>
    <TodoApp />
  </Root>,
  document.getElementById('root')
)
