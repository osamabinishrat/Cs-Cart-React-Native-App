import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import loginReducer from '../Redux/reducers/login';
import productsReducer from '../Redux/reducers/products';

const reducer = combineReducers({
    login: loginReducer,
    products: productsReducer
});

const configureStore = createStore(reducer, {}, applyMiddleware(thunk));

export default configureStore;