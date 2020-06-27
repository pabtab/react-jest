import React, { useReducer, useEffect } from "react";
import "./App.css";
import hookActions from "./actions/hookActions";

function reducer(state, action) {
  switch (action.type) {
    case "setSecretWord":
      return { ...state, secretWord: action.payload };

    default:
      throw new Error("Invalid action type");
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, { secretWord: null });

  const setSecretWord = (secretWord) =>
    dispatch({ type: "setSecretWord", payload: secretWord });

  useEffect(() => {
    hookActions.getSecretWord(setSecretWord)
  }, [])

  return <div data-test="component-app"></div>;
}

export default App;
