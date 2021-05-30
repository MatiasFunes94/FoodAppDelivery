import React from 'react';
import { Provider } from 'react-redux';

import store from './src/store/index';
import InitialScreen from './src/screens/InitialScreen';

const App = () => {
  return (
    <Provider store={store}>
      <InitialScreen />
    </Provider>
  );
};

export default App;