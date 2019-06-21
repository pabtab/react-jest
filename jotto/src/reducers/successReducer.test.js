import {actionTypes} from '../actions';
import success from './successReducer';

test('should returns default initial state of false when no action', () => {
  const newState = success(undefined, {});
  expect(newState).toBe(false)
})

test('should return state of true upn receiving an action of type CORRECT_GUESS', () => {
  const newState = success(undefined, { type: actionTypes.CORRECT_GUESS });
  expect(newState).toBe(true);
})

