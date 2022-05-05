// import reducers
import { combineReducers } from 'redux';
import loaderReducer from './common/loader/loaderReducer';
import loginReducer from './auth/loginReducer';
import alertModalReducer from './common/alertModal/alertModalReducer';
import { all, call } from 'redux-saga/effects';
import loginSaga from './auth/loginSaga';

export const rootReducer = combineReducers({
  // reducers
  loader: loaderReducer,
  login: loginReducer,
  alertModal: alertModalReducer,
});

export const rootSaga = function* rootSaga() {
  yield all([call(loginSaga)]);
};
