import { put, call, takeLatest, all } from 'redux-saga/effects'

// api
import { fetch } from '../apis'

// Constants
import {
  FETCH,
  FETCH_SUCCESS,
  FETCH_FAIL,
} from '../constants'

// Generators
function* callFetch() {
  try {
    const response = yield call(fetch)
    yield put({ type: FETCH_SUCCESS, payload: response.data })
  } catch (e) {
    yield put({ type: FETCH_FAIL, error: e.message })
  }
}

// Watchers
function* watchFetch() {
  yield all([
    takeLatest(FETCH, callFetch),
  ])
}

export default function* rootSaga() {
  yield all([
    watchFetch(),
  ])
}
