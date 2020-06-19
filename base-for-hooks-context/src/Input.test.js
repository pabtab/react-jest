import React from "react";
import { shallow } from "enzyme";
import {findByTestAttr, checkProps} from '../test/testUtils'

import Input from "./Input";

const setup = (secretWord="test") => {
  return shallow(<Input secretWord={secretWord} />)
}

test('should render without error', () => {
  const wrapper = setup()
  const component = findByTestAttr(wrapper, 'component-input')

  expect(component.length).toBe(1)
  
})

test('should not warning checking props', () => {
  const propsDefault = { secretWord: 'te' }
  checkProps(Input, propsDefault)
})

describe('state controlled input field', () => {
  test('should state updates with value of input box upon change', () => {
    const mockSetCurrentGuess = jest.fn()
    React.useState = jest.fn(() => ['', mockSetCurrentGuess])

    const wrapper = setup()
    const inputBox = findByTestAttr(wrapper, 'input-box')

    const mockEvent = { target: { value: 'train' }}
    inputBox.simulate('change', mockEvent)

    expect(mockSetCurrentGuess).toHaveBeenCalledWith('train')
  })
  
})


