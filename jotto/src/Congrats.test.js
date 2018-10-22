import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from "enzyme-adapter-react-16";

import Congrats from './Congrats'

Enzyme.configure({ adapter: new EnzymeAdapter() });

test('should render without error', () => {
  
})

test('should render no text when success props is false', () => {
  
})

test('should render non-empty congrats message when success prop is trus', () => {
  
})


