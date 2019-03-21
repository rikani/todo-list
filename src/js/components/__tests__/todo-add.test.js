import React from 'react'
import { mount } from 'enzyme'
import { KEY_ENTER } from 'Utils/constants.js'
import TodoAdd from 'Components/todo-add.js'
import Checkbox from 'Components/checkbox.js'
import Root from 'Js/root.js'

let component

beforeEach(() => {
  component = mount(
    <Root>
      <TodoAdd />
    </Root>
  )
})

afterEach(() => {
  component.unmount()
})

describe('<TodoAdd /> redering', () => {
  it('renders a <Checkbox /> component', () => {
    expect(component.find(Checkbox)).toHaveLength(1)
  });
})

describe('<TodoAdd /> test input', () => {

  beforeEach(() => {
    component.find('.todo-add__input').simulate('change', {
      target: { value: 'New Todo Item' }
    })
    component.update()
  })

  it('has an input that users can type in', () => {
    expect(component.find('.todo-add__input').prop('value')).toEqual('New Todo Item')
  })

  it('gets emptied after save', () => {
    component.find('.todo-add__input').simulate('keydown', {
      keyCode: KEY_ENTER
    })
    component.update()
    expect(component.find('.todo-add__input').prop('value')).toEqual('')
  })
})
