/**
 * This file is in charge of assigning all side effects
 * or 'sagas' which are triggered automatically by specific
 * actions in the redux store
 */
import { takeEvery, takeLatest, all } from 'redux-saga/effects';

// sagas
import * as userSagas from './modules/user';

const { APP_DEBUG } = cfg;

export default function* rootSaga() {
    // auth
    yield all([
        // Authentication
        // takeLatest('LOGIN_REQUEST', userSagas.getUserProfile),
    ]);

    if (APP_DEBUG) {
        // log all changes to redux store
        yield takeEvery('*', function* logger(action) {
            console.log(`REDUX ACTION: ${action.type}`);
        });
    }
}
