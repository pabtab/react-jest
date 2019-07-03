import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { guessWord } from '../src/actions'

export class Input extends Component {
  render() {
    const contents = this.props.success
      ? null
      : (
        <form className="form-inline">
          <input 
            data-test="input-box" 
            className="mb-2 mx-sm-3"
            id="word-guess"
            type="text"
            placeholder="enter guess" />
            <button
              data-test="submit-button"
              type="submit"
              className="btn btn-primary mb-2"
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

export default connect(mapStateToProps, mapDispatchToProps)(Input)
