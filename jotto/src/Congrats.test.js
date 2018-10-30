import React from 'react';
import { shallow } from 'enzyme';


import {findByTestAttr, checkProps} from '../test/testUtils';
import Congrats from './Congrats';


// Cuidado con tener siempre estas default props tambien en el componente Yo recomiendo mas bien usar default props 
// desde el componente
const defaultProps = { success: false }

const setup = (props={}) => {
  const setupProps = {...defaultProps, ...props}
  return shallow(<Congrats {...setupProps} />)
}

test('should render without error', () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, 'component-congrats');
  expect(component.length).toBe(1)
})

test('should render no text when success props is false', () => {
  const wrapper = setup({success: false});
  const component = findByTestAttr(wrapper, 'component-congrats');
  expect(component.text()).toBe('')
})

test('should render non-empty congrats message when success prop is true', () => {
  const wrapper = setup({success: true});
  const message = findByTestAttr(wrapper, 'component-congrats');
  expect(message.text().length).not.toBe(0)
})

test('should does nout throw warning with expected props', () => {
  const expeProps = { success: false };
  const propError = checkProps(Congrats, expeProps);
  expect(propError).toBeUndefined();
})



