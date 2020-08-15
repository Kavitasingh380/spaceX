import {createAction} from 'redux-actions';
import * as constants from './constants';

export const spaceXRequest = createAction(constants.SPACEX_REQUEST);
export const spaceXSuccess = createAction(constants.SPACEX_SUCCESS);
export const spaceXError = createAction(constants.SPACEX_ERROR);
export const spaceXClear = createAction(constants.SPACEX_CLEAR);

export const filterRequest = createAction(constants.FILTER_REQUEST);
export const filterSuccess = createAction(constants.FILTER_SUCCESS);
export const filterError = createAction(constants.FILTER_ERROR);
export const filterClear = createAction(constants.FILTER_CLEAR);