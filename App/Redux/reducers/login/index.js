import {
    IS_LOADING,
    LOGGED_OUT,
    LOGIN_SUCCESS,
    UPDATE_LOGGED_IN,
    UPDATE_TOKEN,
    UPDATE_USER
} from '../../actions/login/types';

const initialState = {
    isAuthenticated: false,
    isLoading: false,
    access_token: null,
    user: null
};

const reducer = (state = initialState, {type = null, payload = null}) => {

    let nextState;
    switch (type) {

        case LOGIN_SUCCESS:
            nextState = loggedIn(state, payload);
            break;

        case LOGGED_OUT:
            nextState = loggedOut(state, payload);
            break;

        case IS_LOADING:
            nextState = updateLoading(state, payload);
            break;

        case UPDATE_TOKEN:
            nextState = updateToken(state, payload);
            break;

        case UPDATE_USER:
            nextState = updateUser(state, payload);
            break;

        case UPDATE_LOGGED_IN:
            nextState = updateIsLoggedIn(state, payload);
            break;

        default:
            nextState = state;
            break;
    }

    return nextState;
};

const loggedIn = (state, {access_token, user, isAuthenticated = true, isLoading = false}) => ({
    ...state,
    isAuthenticated,
    isLoading,
    access_token,
    user
});

const loggedOut = (state, {isAuthenticated = false, isLoggedOut = true}) => ({
    ...state,
    isAuthenticated,
    isLoggedOut,
    user: null
});

const updateLoading = (state, isLoading) => ({
    ...state,
    isLoading
});

const updateToken = (state, access_token = null) => ({
    ...state,
    access_token
});

const updateUser = (state, user = null) => ({
    ...state,
    user
});

const updateIsLoggedIn = (state, isAuthenticated = false) => ({
    ...state,
    isAuthenticated
});

export default reducer;