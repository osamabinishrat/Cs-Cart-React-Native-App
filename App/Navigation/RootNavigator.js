import {StackNavigator} from 'react-navigation';
import MainDrawer from './MainDrawer';

const RootNavigator = StackNavigator(
    {
        MainDrawer: {
            screen: MainDrawer
        }
    }
);

export default RootNavigator;