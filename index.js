/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {Root} from 'native-base';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import rootReducer from './store/reducer/index';
import React from 'react';

let store = createStore(rootReducer);

const setup = () => {
  return (
    <Provider store={store}>
      <Root>
        <App />
      </Root>
    </Provider>
  );
};
AppRegistry.registerComponent(appName, () => setup);
