import {combineReducers} from 'redux';

import spaceX from './spaceX/reducer/index';


export const makeRootReducer = (asyncReducers) => {
  return combineReducers({
    spaceX: spaceX,
    ...asyncReducers,
  })
}

export const injectReducer = (store, { key, reducer }) => {
  if (Object.hasOwnProperty.call(store.asyncReducers, key)) return

  store.asyncReducers[key] = reducer
  store.replaceReducer(makeRootReducer(store.asyncReducers))
}

export default makeRootReducer
