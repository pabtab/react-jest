import React from 'react';

export default (props) => {
	return (
		props.success ?
			<div data-test="component-congrats">
				<span data-test="congrats-message">
					congratulations! Your guess the word
				</span>
			</div>
		:
			<div data-test="component-congrats">
			</div>
	)
}