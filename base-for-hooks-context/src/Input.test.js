import React from "react";
import { shallow } from "enzyme";
import { findByTestAttr, checkProps } from "../test/testUtils";

import Input from "./Input";

const setup = (secretWord = "test") => {
  return shallow(<Input secretWord={secretWord} />);
};

test("should render without error", () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, "component-input");

  expect(component.length).toBe(1);
});

test("should not warning checking props", () => {
  const propsDefault = { secretWord: "te" };
  checkProps(Input, propsDefault);
});

describe("state controlled input field", () => {
  let mockSetCurrentGuess = jest.fn();
  let wrapper;
  beforeEach(() => {
    mockSetCurrentGuess.mockClear();
    React.useState = jest.fn(() => ["", mockSetCurrentGuess]);
    wrapper = setup();
  });

  test("should state updates with value of input box upon change", () => {
    const inputBox = findByTestAttr(wrapper, "input-box");

    const mockEvent = { target: { value: "train" } };
    inputBox.simulate("change", mockEvent);

    expect(mockSetCurrentGuess).toHaveBeenCalledWith("train");
  });

  test("should clear state after submit form", () => {
    const submitButton = findByTestAttr(wrapper, "submit-button");

    submitButton.simulate("click", {preventDefault() {}});

    expect(mockSetCurrentGuess).toHaveBeenCalledWith("");
  });
});
