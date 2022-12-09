import React from 'react';
import { View } from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './redux-store/rootReducer';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { Routes } from './Route/index';
const store = createStore(rootReducer, applyMiddleware(thunk));
// Globals
const SVG = require('./UI/assets/Svg/index')
global.SVGS = SVG



export default class App extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Provider store={store}>
          <Routes />
        </Provider>
      </View>
    );
  }
}
