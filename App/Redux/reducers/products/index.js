import {PRODUCT_FETCH_SUCCESS} from '../../actions/products/types';

const reducer = (initialState = {products: []}, {type, payload}) => {
    switch (type) {
        case PRODUCT_FETCH_SUCCESS: {
            return {
                ...initialState,
                products: payload
            }
        }
        default:
            return initialState;
    }
};

export default reducer;