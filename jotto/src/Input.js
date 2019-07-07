import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { guessWord } from '../src/actions'

export class InputUnconnected extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       
    }

    this.inputBox = React.createRef()
  }

  submitGuessWord = (evt) => {
    evt.preventDefault();
    const guessedWord = this.inputBox.current.value;

    if (guessWord && guessWord.length > 0) {
      this.props.guessWord(guessedWord)
    }

    this.inputBox.current.value = '';
  }
  
  render() {
    const contents = this.props.success
      ? null
      : (
        <form className="form-inline">
          <input 
            ref={this.inputBox}
            data-test="input-box" 
            className="mb-2 mx-sm-3"
            id="word-guess"
            type="text"
            placeholder="enter guess" />
            <button
              data-test="submit-button"
              type="submit"
              className="btn btn-primary mb-2"
              onClick={this.submitGuessWord}
            >
              Submit
            </button>
        </form>
      )

    return (
      <div data-test="component-input">
        { contents }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    success: state.success
  }
}

const mapDispatchToProps = {
  guessWord
}

export default connect(mapStateToProps, mapDispatchToProps)(InputUnconnected)
