import {handleActions} from 'redux-actions';
import update from 'immutability-helper';
import * as constants from '../../constants';

let initialState = {
  spaceX: {
    data:       {},
    isLoading:  false,
    isError:    false,
    isSuccess:  false,
    message:    ''
  },
  filter: {
    data:       {},
    isLoading:  false,
    isError:    false,
    isSuccess:  false,
    message:    ''
  },

};

const spaceXRequest = (state, action) => update(state, {
  spaceX: {
    isLoading: {$set: true},
    isError:   {$set: false},
    isSuccess: {$set: false},
    message:   {$set: ''}
  }
});
const spaceXSuccess = (state, action) => update(state, {
  spaceX: {
    data:       {$set: action.payload},
    isLoading:  {$set: false},
    isError:    {$set: false},
    isSuccess:  {$set: true},
    message:    {$set: 'Post success'}
  }
});
const spaceXError = (state, action) => update(state, {
  spaceX: {
    isLoading: {$set: false},
    isSuccess: {$set: false},
    isError:   {$set: true},
    message:   {$set: action.payload}
  }
});
const spaceXClear = (state, action) => update(state, {
  spaceX: {
    isLoading: {$set: false},
    isSuccess: {$set: false},
    isError:   {$set: false},
    message:   {$set: ''}
  }
});

const filterRequest = (state, action) => update(state, {
  filter: {
    isLoading: {$set: true},
    isError:   {$set: false},
    isSuccess: {$set: false},
    message:   {$set: ''}
  }
});
const filterSuccess = (state, action) => update(state, {
  filter: {
    data:       {$set: action.payload},
    isLoading:  {$set: false},
    isError:    {$set: false},
    isSuccess:  {$set: true},
    message:    {$set: 'filter success'}
  }
});
const filterError = (state, action) => update(state, {
  filter: {
    isLoading: {$set: false},
    isSuccess: {$set: false},
    isError:   {$set: true},
    message:   {$set: action.payload}
  }
});
const filterClear = (state, action) => update(state, {
  filter: {
    isLoading: {$set: false},
    isSuccess: {$set: false},
    isError:   {$set: false},
    message:   {$set: ''}
  }
});

export default handleActions({
  [constants.SPACEX_REQUEST]: spaceXRequest,
  [constants.SPACEX_SUCCESS]: spaceXSuccess,
  [constants.SPACEX_ERROR]:   spaceXError,
  [constants.SPACEX_CLEAR]:spaceXClear,
  [constants.FILTER_REQUEST]: filterRequest,
  [constants.FILTER_SUCCESS]: filterSuccess,
  [constants.FILTER_ERROR]:   filterError,
  [constants.FILTER_CLEAR]:filterClear
}, initialState);
