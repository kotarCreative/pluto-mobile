import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { reducer } from '@/reducers';
import rootSaga from '@/sagas';

const sagaMiddleware = createSagaMiddleware();

const sagaStore = function configureStore() {
    const store = createStore(reducer, applyMiddleware(sagaMiddleware));
    sagaMiddleware.run(rootSaga);
    return store;
};

export default sagaStore();
