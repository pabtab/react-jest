import React from 'react';
import {shallow} from 'enzyme';

import {findByTestAttr, storeFactory} from '../test/testUtils'
import Input, { InputUnconnected } from './Input';

const setup = (initialState= {}) => {
  const store = storeFactory(initialState);
  const wrapper = shallow(<Input store={store} />).dive()
  return wrapper;
}

describe('Render', () => {
  describe('word has not been guesed', () => {
    let wrapper;
    beforeEach(() => {
      const initialState = { success: false };
      wrapper = setup(initialState);
    })
    test('should render component without error', () => {
      const component = findByTestAttr(wrapper, 'component-input');
      expect(component.length).toBe(1);
    })

    test('should render input box', () => {
      const inputBox = findByTestAttr(wrapper, 'input-box');
      expect(inputBox.length).toBe(1);
    })

    test('should render submit button', () => {
      const submitButton = findByTestAttr(wrapper, 'submit-button');
      expect(submitButton.length).toBe(1);
    })
    
  })
  
  describe('word has been gueesed', () => {
    let wrapper;
    beforeEach(() => {
      const initialState = { success: true };
      wrapper = setup(initialState);
    })
    test('should render component without error', () => {
      const component = findByTestAttr(wrapper, 'component-input');
      expect(component.length).toBe(1);
    })

    test('should doesnt render input box', () => {
      const inputBox = findByTestAttr(wrapper, 'input-box');
      expect(inputBox.length).toBe(0);
    })

    test('should render submit button', () => {
      const submitButton = findByTestAttr(wrapper, 'submit-button');
      expect(submitButton.length).toBe(0);
    })
  })
  
  
})

describe('redux props', () => {
  test('should has success piece of state as prop', () => {
    const success = true;
    const wrapper = setup({ success })
    const successProp = wrapper.instance().props.success;

    expect(successProp).toBe(success)
  });

  test('should guessword action creator is a function prop', () => {
    const wrapper = setup();
    const guessWordProp = wrapper.instance().props.guessWord;

    expect(guessWordProp).toBeInstanceOf(Function)
  })
  
  
})

describe('guessword action creator call', () => {
  let guessWordMock;
  let wrapper;
  const guessedWord = 'train'
  beforeEach(() => {
    guessWordMock = jest.fn();

    wrapper = shallow(<InputUnconnected guessWord={guessWordMock}/>);

    wrapper.instance().inputBox.current = { value: guessedWord}
  
    const submitButton = findByTestAttr(wrapper, 'submit-button');
    submitButton.simulate('click', { preventDefault() {} });
  })

  test('should runs on App mount', () => {
  
    const guessWordCallCount = guessWordMock.mock.calls.length;
  
    expect(guessWordCallCount).toBe(1)
  
  })

  test('should calls guessword with input value as argument', () => {
    const guessWordArg = guessWordMock.mock.calls[0][0];
    expect(guessWordArg).toBe(guessedWord);
  })

  test('should input box clears on submit', () => {
    expect(wrapper.instance().inputBox.current.value).toBe('')
  })
  
  
})

