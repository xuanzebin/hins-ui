import renderer from 'react-test-renderer'
import React from 'react'
import Button from '../Button'

describe('button', () => {
  it('是个 div', () => {
    const json = renderer.create(<Button content="btn" />).toJSON()
    expect(json).toMatchSnapshot()
    // expect(1).toEqual(1)
  })
})

function sum(a: number, b: number): number {
  return a + b
}

describe('sum', () => {
  it('a + b', () => {
    expect(sum(1, 2)).toEqual(3)
  })
})
