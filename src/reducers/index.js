/**
 * This file is in charge of redux state management. It combines
 * available reducers, exports the public getters for those reducers
 * and exports the actions available for each reducers
 */
import { combineReducers } from 'redux';

// import all reducer ducks and related getters
import user from './modules/user';

// combine all reducers into a singular store
export const reducer = combineReducers({
    userReducer: user.reducer
});

export const actions = {
    userActions: user.actions
};

export const state = {
    userState: state => state.userReducer
}

// Auth Actions
// Auth state getters
export const getUsername = state => user.getUsername(state.userReducer);