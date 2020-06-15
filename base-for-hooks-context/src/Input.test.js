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


