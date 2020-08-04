import React from 'react'
import { create } from 'react-test-renderer'
import { mount } from 'enzyme'

import Icon from '../index'

describe('icon', () => {
  it('render successfully', () => {
    const component = create(<Icon name="clock" />).toJSON()
    expect(component).toMatchSnapshot()
  })

  it('onClick successfully', () => {
    const fn = jest.fn()
    const component = mount(<Icon name="clock" onClick={fn} />)
    component.find('svg').simulate('click')
    expect(fn).toBeCalled()
  })
})
