import React from 'react'
import classnames from 'classnames'

const Checkbox = ({ children, className, complete, onChange, hidden }) => {
  const cls = classnames('checkbox', className, {
    'checkbox_hidden': hidden,
  })
  return (
    <label className={cls}>
      <input className="checkbox-input" type="checkbox" checked={complete} onChange={onChange} />
      <span className="checkbox-view"></span>
      <span>{children}</span>
    </label>
  )
}

export default Checkbox
