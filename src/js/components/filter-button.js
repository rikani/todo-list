import React from 'react'
import Button from 'Components/button.js'
import { filterChange } from 'Actions/filter'
import { connect } from 'react-redux'

const FilterButton = ({ children, dispatch, className, type, active }) => (
  <Button type="button" className={className} pressed={active}
    onClick={ () => dispatch(filterChange(type)) }
  >
    {children}
  </Button>
)

export default connect()(FilterButton)
