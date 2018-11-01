// initial store state
const DEFAULT_STATE = {
    username: ''
};

// reducer
export default (state = DEFAULT_STATE, { type, payload }) => {
    switch (type) {
        case 'LOGIN_REQUEST':
            return {
                ...state,
                username: payload.username
            };
        default:
            return state;
    }
};
