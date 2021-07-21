import {
  all,
  call,
  put,
  takeLatest,
  takeLeading,
} from 'redux-saga/effects';

import {
  LOGIN_START,
  LOGIN_SUCCESSFULL,
  LOG_OUT_START,
  LOG_OUT_START_HAVING_SEGMENT,
  LOG_OUT_FINISH,
  CHANGE_PASSWORD_START,
  CHANGE_PASSWORD_SUCCESSFULL,
  RECOVER_PASSWORD_START,
  RECOVER_PASSWORD_SUCCESSFULL,
} from '../actions/auth';
import {
  removeSession,
  processToken,
  getUserData,
  setInFilesystemStorage,
} from '../../utils';
import { printError } from '../../utils/toastHelper';
import { showConfirmationModal } from './modal';
import { turnLoading } from '../actions';
import AsyncStorageEnum from '../../utils/AsyncStorageEnum';
import {
  login as loginService,
  changePassword as changePasswordService,
  recoverPassword as recoverPasswordService,
  logout as logoutService,
} from '../../services/auth';
import * as SegmentsActions from '../actions/segments';
import * as FilterSortSearchActions from '../actions/filterSortSearch';
import * as QueueActions from '../actions/queue';

export const login = function* ({ payload }) {
  try {
    yield put(turnLoading(true));
    const response = yield call(loginService, payload.userCredentials);
    if (response) {
      const { token } = response;
      yield put(turnLoading(false));
      yield all([processToken(response)]);
      yield call(payload.callback);
      yield put(FilterSortSearchActions.resetFilterAndSort());
      return yield put({ type: LOGIN_SUCCESSFULL, payload: token });
    }
  } catch (e) {
    // yield put({ type: LOGIN_FAILED, payload: response.errors });
    yield put(turnLoading(false));
    yield call(printError, e);
  }
};

export const changePassword = function* ({ payload }) {
  try {
    const { data, callback: successChangePassword } = payload;
    yield put(turnLoading(true));
    const response = yield call(changePasswordService, data);
    if (response) {
      yield put(turnLoading(false));
      const user = yield call(getUserData);
      user.change_password = false;
      const userData = {
        key: AsyncStorageEnum.USERDATA,
        value: JSON.stringify(user),
      };
      yield call(setInFilesystemStorage, userData);
      yield call(successChangePassword);
      return yield put({ type: CHANGE_PASSWORD_SUCCESSFULL, payload: user });
    }
  } catch (error) {
    if (error.response.status === 401) {
      yield put(UtilsActions.setUserUnauthorized(true));
      return yield put(AuthActions.unauthorizedUserShouldLogout());
    }
    yield call(printError, error.response.data.errors[0].message);
  } finally {
    yield put(turnLoading(false));
  }
};

export const recoverPassword = function* ({ payload }) {
  try {
    yield put(turnLoading(true));
    const response = yield call(recoverPasswordService, payload.recoverCredentials);
    if (response) {
      yield put(turnLoading(false));
      yield call(payload.callback);
      return yield put({ type: RECOVER_PASSWORD_SUCCESSFULL, payload: response });
    }
  } catch (e) {
    yield put(turnLoading(false));
    yield call(printError, e);
  }
};

function* confirmlogout({ payload: callback }) {
  yield call(
    showConfirmationModal,
    null,
    '¿Está seguro de \nfinalizar la sesión?',
    'Sí',
    callback,
    'No',
  );
}

function* logout({ payload: callback }) {
  try {
    yield put(turnLoading(true));
    yield call(logoutService);
  } catch (error) {
  }
  finally {
    yield call(removeSession);
    yield call(callback);
    yield put(ProcessedSegmentQueue.resetQueue());
    yield put(SegmentsActions.reset());
    yield put(QueueActions.resetQueue());
    yield put(turnLoading(false));
  }
}

function* authSagas() {
  yield takeLeading(LOGIN_START, login);
  yield takeLatest(LOG_OUT_START, confirmlogout);
  yield takeLatest(LOG_OUT_START_HAVING_SEGMENT, confirmlogoutHavingSegment);
  yield takeLatest(LOG_OUT_FINISH, logout);
  yield takeLatest(CHANGE_PASSWORD_START, changePassword);
  yield takeLatest(RECOVER_PASSWORD_START, recoverPassword);
}

export default authSagas;