import {takeLatest} from 'redux-saga/effects';
import * as constants from './constants';
import { spaceXRequest,filterRequest } from './spaceX/action'

export function* watchActions () {
  yield takeLatest(constants.SPACEX_REQUEST, spaceXRequest);
  yield takeLatest(constants.FILTER_REQUEST, filterRequest);

}

export default function* rootSaga () {
  yield [
    watchActions()
  ];
}
