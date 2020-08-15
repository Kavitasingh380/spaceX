import {call, put} from 'redux-saga/effects';
import * as actions from '../../actions';
import fireAjax from '../../../services/index';
import {CONFIG} from '../../../config/index';

export function* spaceXRequest (action) {
  try {
    const response = yield call(fireAjax, 'GET', `${CONFIG.BASE_URL}${CONFIG.WITHOUT_FILTER}`, {

    });
    if (response && (response.status === 200 || response.status === 304) ) {
      yield put(actions.spaceXSuccess(response.data));
    } else if (response && response.error === 1) {
      yield put(actions.spaceXError('Invalid Request...'));
    }
  } catch (e) {
    yield put(actions.spaceXError('Error Occurs !!'));
    console.warn('Some error found in "spaceXRequest" action\n', e);
  }
}
export function* filterRequest (action) {
  console.log(action.payload)
  try {
    const response = yield call(fireAjax, 'GET', `${CONFIG.BASE_URL}${CONFIG.FILTER}${action.payload.launch}&land_success=${action.payload.landing}&launch_year=${action.payload.year}`, {
  
    });
    if (response && (response.status === 200 || response.status === 304) ) {
      yield put(actions.filterSuccess(response.data));
    } else if (response && response.error === 1) {
      yield put(actions.filterError('Invalid Post...'));
    }
  } catch (e) {
    yield put(actions.filterError('Error Occurs !!'));
    console.warn('Some error found in "filterRequest" action\n', e);
  }
}

