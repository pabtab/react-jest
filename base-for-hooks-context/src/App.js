import React, { useEffect } from "react";
import "./App.css";
import hookActions from "./actions/hookActions";
import Input from "./Input";

function reducer(state, action) {
  switch (action.type) {
    case "setSecretWord":
      return { ...state, secretWord: action.payload };

    default:
      throw new Error("Invalid action type");
  }
}

function App() {
  // Important use React.useReducer
  const [state, dispatch] = React.useReducer(reducer, { secretWord: null });

  const setSecretWord = (secretWord) =>
    dispatch({ type: "setSecretWord", payload: secretWord });

  useEffect(() => {
    hookActions.getSecretWord(setSecretWord)
  }, [])

  if (!state.secretWord) {
    return (
      <div className="container" data-test="spinner">
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
        <p>Loading secret word</p>
      </div>
    )
  }

  return <div className="container" data-test="component-app">
    <Input secretWord={state.secretWord}
    />
  </div>;
}

export default App;
