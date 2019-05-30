import {PRODUCT_FETCH_SUCCESS, PRODUCT_FETCH_PROGRESS, PRODUCT_FETCH_FAILURE} from './types';
import {create} from 'apisauce';

const fetchProducts = (pageNum) => {
    return (dispatch) => {
        const api = create({
            baseURL: 'https://marketplace.alifca.com/api/',
            headers: {
                'Content-Type': 'application/json',
            }
        });

        api.get('/products?limit=20').then((response) => {
            // dispatch(fetchProductsSuccess(response.data.data.data));
        }).catch(
            (e) => {
                console.log(e);
            }
        )
    }
};

const fetchProductsSuccess = (payload) => ({
    type: PRODUCT_FETCH_SUCCESS,
    payload
});

const fetchProductsProgress = (payload) => ({
    type: PRODUCT_FETCH_PROGRESS,
    payload
});

const fetchProductsFailed = (payload) => ({
    type: PRODUCT_FETCH_FAILURE,
    payload
});

export {
    fetchProducts
}