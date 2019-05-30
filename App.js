import React from 'react';
import RootNavigator from './App/Navigation/RootNavigator';
import {Provider} from 'react-redux';
import configureStore from "./App/Redux/configureStore";

export default class App extends React.Component {
    render() {
        return (
            <Provider store={configureStore}>
                <RootNavigator/>
            </Provider>
        );
    }
}