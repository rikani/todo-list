import React from 'react'
import ToggleAll from 'Components/toggle-all.js'
import TodoAdd from 'Components/todo-add.js'

const Header = () =>
  (
    <div className="header">
      <ToggleAll />
      <TodoAdd />
    </div>
  )

export default Header
