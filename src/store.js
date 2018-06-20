import { createStore, applyMiddleware } from 'redux'
import 'regenerator-runtime/runtime'
import createSagaMiddleware from 'redux-saga'

import mainReducer from './reducers'
import rootSaga from './sagas'

const sagaMiddleware = createSagaMiddleware()

// enable redux dev tools
// connect saga with the store
const store = createStore(
  mainReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(sagaMiddleware),
)

sagaMiddleware.run(rootSaga)


export default store
