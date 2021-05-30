import React from 'react';
import { Provider } from 'react-redux';

import store from './src/store/index';
import AppNavigator from './src/navigators';

const App = () => {
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
};

export default App;