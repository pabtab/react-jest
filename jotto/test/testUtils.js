import checkPropTypes from 'check-prop-types'
import rootReducer from '../src/reducers';
import { createStore, applyMiddleware } from 'redux';

import { middlewares } from '../src/configureStore';

export const storeFactory = initialState => {
	const createStoreMiddleware = applyMiddleware(...middlewares)(createStore);
	return createStoreMiddleware(rootReducer, initialState)
}

export const findByTestAttr = (wrapper, val) => {
	return wrapper.find(`[data-test="${val}"]`);
}

export const checkProps = (component, conformingProps) => {
	const propError = checkPropTypes(
		component.propTypes,
		conformingProps,
		'prop',
		component.name
	);
	expect(propError).toBeUndefined()
}