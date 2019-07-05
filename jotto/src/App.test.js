import React from 'react';
import {shallow} from 'enzyme';

import { storeFactory} from '../test/testUtils'
import App, { UnconnectedApp } from './App';

const setup = (initialState= {}) => {
  const store = storeFactory(initialState);
  const wrapper = shallow(<App store={store} />).dive()
  return wrapper;
}

describe('redux props', () => {
  test('should has success piece of state as prop', () => {
    const success = true;
    const wrapper = setup({ success })
    const successProp = wrapper.instance().props.success;

    expect(successProp).toBe(success)
  });

  test('should has acces to secretword state', () => {
    const secretWord = 'party';
    const wrapper = setup({ secretWord })
    const secretWordProp = wrapper.instance().props.secretWord;

    expect(secretWordProp).toBe(secretWord)
  });

  test('should has acces to guessWrods state', () => {
    const guessedWords = [{ guessedWord: 'train', letterMatchCount: 3 }]
    const wrapper = setup({ guessedWords })
    const guessedWordsProps = wrapper.instance().props.guessedWords;

    expect(guessedWordsProps).toBe(guessedWords)
  });

  test('should guessword action creator is a function prop', () => {
    const wrapper = setup();
    const getSecretWordProp = wrapper.instance().props.getSecretWord;

    expect(getSecretWordProp).toBeInstanceOf(Function)
  })
  
  
})


test('should runs on App mount', () => {
  const getSecretWordMock = jest.fn();
  const props = {
    getSecretWord: getSecretWordMock,
    success: false,
    guessedWords: []
  }
  const wrapper = shallow(<UnconnectedApp {...props}/>);

  wrapper.instance().componentDidMount();

  const getSecretWordCallCount = getSecretWordMock.mock.calls.length;

  expect(getSecretWordCallCount).toBe(1)

})
