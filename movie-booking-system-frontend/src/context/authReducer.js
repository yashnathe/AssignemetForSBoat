import { LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT } from '../types';

export default (state, action) => {
    switch (action.type) {
        case LOGIN_SUCCESS:
            localStorage.setItem('token', action.payload);
            return {
                ...state,
                token: action.payload,
                isAuthenticated: true,
                loading: false,
            };
        case LOGIN_FAIL:
        case LOGOUT:
            localStorage.removeItem('token');
            return {
                ...state,
                token: null,
                isAuthenticated: false,
                loading: false,
            };
        default:
            return state;
    }
};
