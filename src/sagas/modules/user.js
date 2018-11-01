

import { put } from 'redux-saga/effects';
import { loginRequest } from '@/api';

const { APP_DEBUG } = cfg;

// export function* attemptLoginRequestSaga({ credentials }) {
//     try {
//         const { data: tokens } = yield loginRequest(credentials);
//         yield put({ type: AuthTypes.POST_CREDENTIALS_SUCCESS, payload: tokens });
//     } catch (err) {
//         if (APP_DEBUG) {
//             console.log(err);
//         }
//         if (err.response && err.response.data) {
//             yield put({ type: 'LOGIN_REQUEST_FAILURE', payload: err.response.data });
//         } else {
//             yield put({ type: 'LOGIN_REQUEST_FAILURE' });
//         }
//     }
// }