import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {View, Text} from 'react-native';
import {fetchProducts} from '../Redux/actions/products/index'

class ProductListing extends React.Component {

    componentDidMount() {
        this.props.dispatch(fetchProducts());
    }

    render() {
        return (
            <View>
                {this.props.products.map((product) => (
                    <Text key={product.id}>{product.title}</Text>
                ))}
            </View>
        );
    }

}

mapStateToProps = ({products}) => ({
    products: products.products
});

const mapDispatchToProps = (dispatch) => ({
    dispatch
});

ProductListing.propTypes = {
    products: PropTypes.array
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductListing);