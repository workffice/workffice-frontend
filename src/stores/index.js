import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

const getState = () => store.getState();

export { getState };
export default store;
