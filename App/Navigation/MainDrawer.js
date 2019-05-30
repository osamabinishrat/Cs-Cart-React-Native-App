import {DrawerNavigator} from 'react-navigation';
import ProductListing from "../Screens/ProductListing";
import Login from "../Screens/Login";

const routes = {
    ProductListing: {
        screen: ProductListing
    },
    Login: {
        screen: Login
    }
};

const MainDrawer = DrawerNavigator(
    routes
);

export default MainDrawer;