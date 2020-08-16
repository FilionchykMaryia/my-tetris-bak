import {createContext} from 'react';

function noop() {};

export const AuthContext = createContext({
    token: null,
    userId: null,
    currScore: 0,
    currRows: 0,
    currLevel: 0,
    login: noop,
    logout: noop,
    isAuthenticated: false,
});