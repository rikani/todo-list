import React from 'react'
import classnames from 'classnames'

const Button = ({ children, type, className, pressed, accept, onClick }) => {
  const cls = classnames('btn', className, {
    'btn_pressed': pressed,
    'btn_accept': accept,
  })
  return (
    <button type={type} className={cls} onClick={onClick}>{children}</button>
  )
}

export default Button
