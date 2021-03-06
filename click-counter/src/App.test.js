import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import App from './App';

Enzyme.configure({ adapter: new EnzymeAdapter()});

const setup = (props={}, state=null) => {
  const wrapper = shallow(<App {...props}/>)
  if(state) wrapper.setState(state)
  return wrapper;
}

const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`)
}

test('renders without crashing', () => {
  const wrapper = setup()
  const appComponent = findByTestAttr(wrapper, "component-app")
  console.log(wrapper)
  const mela = wrapper.find(`.melapela`)
  console.log(mela.length)
  expect(appComponent.length).toBe(1)
});

test('renders increment button', () => {
  const wrapper = setup()
  const button = findByTestAttr(wrapper, "increment-button")
  expect(button.length).toBe(1)
})

test('render counter display', () => {
  const wrapper = setup()
  const counterDisplay = findByTestAttr(wrapper, "counter-display")
  expect(counterDisplay.length).toBe(1)
})

test('should counter starts at 0', () => {
  const wrapper = setup()
  const initialCounterState = wrapper.state('counter')

  expect(initialCounterState).toBe(0)

})

test('clicking button increments counter display', () => {
  const counter = 7;
  const wrapper = setup(null, { counter })

  const button = findByTestAttr(wrapper, "increment-button")
  button.simulate('click')
  
  wrapper.update()

  const counterDisplay = findByTestAttr(wrapper, "counter-display")
  expect(counterDisplay.text()).toContain(counter + 1)
})

test('clicking button decrements counter display', () => {
  const counter = 7;
  const wrapper = setup(null, { counter })

  const button = findByTestAttr(wrapper, "decrement-button")
  button.simulate('click')

  wrapper.update()

  const counterDisplay = findByTestAttr(wrapper, "counter-display")
  expect(counterDisplay.text()).toContain(counter - 1)
})

test('should display error message when the counter is less than zero', () => {
  const counter = 0
  const wrapper = setup(null, { counter })

  const button = findByTestAttr(wrapper, "decrement-button")
  button.simulate('click')

  wrapper.update()
  
  const messageState = wrapper.state('errorMsj')
  expect(messageState).toBe(true)

})

test('should clear error message when counter is zero and increment button is clicked', () => {
  const counter = 0;
  const wrapper = setup(null, { counter })

  const buttonIncrement = findByTestAttr(wrapper, "increment-button")
  buttonIncrement.simulate('click')

  wrapper.update()

  const messageState = wrapper.state('errorMsj')
  expect(messageState).toBe(false)
})
