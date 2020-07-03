import React from "react";
import { mount } from "enzyme";
import { findByTestAttr } from "../test/testUtils";

import App from "./App";

import hookActions from "./actions/hookActions";

const mockGetSecretWord = jest.fn();

const setup = (secretWord = "party") => {
  mockGetSecretWord.mockClear();
  hookActions.getSecretWord = mockGetSecretWord;

  const mockUseReducer = jest.fn().mockReturnValue([{ secretWord }, jest.fn()]);

  React.useReducer = mockUseReducer;
  // Use mount, because useEffect not called on shallow
  return mount(<App />);
};

test("should render without error", () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, "component-app");

  expect(component.length).toBe(1);
});

describe("getSecretWord calls", () => {
  test("should getSecretWord gets called on app mount", () => {
    setup();

    expect(mockGetSecretWord).toHaveBeenCalled();
  });

  test("should does not update when app update", () => {
    const wrapper = setup();
    mockGetSecretWord.mockClear();
    wrapper.setProps();

    expect(mockGetSecretWord).not.toHaveBeenCalled();
  });
});

describe('secret word is not null', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup('party')
  })

  test('should render app when secret word is not null', () => {
    const appComponent = findByTestAttr(wrapper, 'component-app')
    expect(appComponent.exists()).toBe(true)
  })

  test('should does not render spinner when secret word is not null', () => {
    const spinner = findByTestAttr(wrapper, 'spinner')

    expect(spinner.exists()).toBe(false)

  })
})


describe('secret word is null', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup(null)
  })

  test('should does not render app when secret word is not null', () => {
    const appComponent = findByTestAttr(wrapper, 'component-app')
    expect(appComponent.exists()).toBe(false)
  })

  test('should render spinner when secret word is not null', () => {
    const spinner = findByTestAttr(wrapper, 'spinner')

    expect(spinner.exists()).toBe(true)

  })
  
  
})
