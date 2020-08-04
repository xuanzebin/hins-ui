import React from 'react'
import { create } from 'react-test-renderer'

import Icon from '../index'

describe('icon', () => {
  it('snapshot test', () => {
    const component = create(<Icon name="clock" />).toJSON()
    expect(component).toMatchSnapshot()
  })
})
