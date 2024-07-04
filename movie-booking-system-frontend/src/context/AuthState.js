import React, { useReducer } from 'react';
import axios from 'axios';
import AuthContext from './AuthContext';
import authReducer from './authReducer';
import { LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT } from '../types';

const AuthState = props => {
    const initialState = {
        token: localStorage.getItem('token'),
        isAuthenticated: null,
        loading: true,
        user: null,
    };

    const [state, dispatch] = useReducer(authReducer, initialState);

    const login = async token => {
        try {
            dispatch({ type: LOGIN_SUCCESS, payload: token });
        } catch (err) {
            dispatch({ type: LOGIN_FAIL });
        }
    };

    const logout = () => dispatch({ type: LOGOUT });

    return (
        <AuthContext.Provider
            value={{
                token: state.token,
                isAuthenticated: state.isAuthenticated,
                loading: state.loading,
                user: state.user,
                login,
                logout,
            }}
        >
            {props.children}
        </AuthContext.Provider>
    );
};

export default AuthState;
