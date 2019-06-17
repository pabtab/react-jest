import React from 'react';
import {shallow} from 'enzyme';

import {findByTestAttr, storeFactory} from '../test/testUtils'
import Input from './Input';

const setup = (initialState= {}) => {
  const store = storeFactory(initialState)
  const wrapper = shallow(<Input store={store} />).dive()
}

describe('Render', () => {
  describe('word has not been guesed', () => {
    test('should render component without error', () => {
      
    })

    test('should render input box', () => {
      
    })

    test('should render submit button', () => {
      
    })
    
  })
  
  describe('word has been gueesed', () => {
    test('should render component without error', () => {
      
    })

    test('should doesnt render input box', () => {
      
    })

    test('should render submit button', () => {
      
    })
  })
  
  
})

describe('Update state', () => {
  
})

