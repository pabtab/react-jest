import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from "enzyme-adapter-react-16";

import {findByTestAttr} from '../test/testUtils';
import Congrats from './Congrats';

Enzyme.configure({ adapter: new EnzymeAdapter() });

const setup = (props={}) => {
  return shallow(<Congrats {...props} />)
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


