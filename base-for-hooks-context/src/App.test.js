import React from "react";
import {  mount } from "enzyme";
import {findByTestAttr} from '../test/testUtils'

import App from "./App";

import hookActions from './actions/hookActions'

const mockGetSecretWord = jest.fn()

const setup = () => {

  mockGetSecretWord.mockClear()
  hookActions.getSecretWord = mockGetSecretWord

  // Use mount, because useEffect not called on shallow
  return mount(<App />)
}

test('should render without error', () => {
  const wrapper = setup()
  const component = findByTestAttr(wrapper, 'component-app')

  expect(component.length).toBe(1)
  
})

describe('getSecretWord calls', () => {
  test('should getSecretWord gets called on app mount', () => {
    setup()

    expect(mockGetSecretWord).toHaveBeenCalled();
  })
  
})

