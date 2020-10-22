import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';

import './App.scss';

const App = () => {
  return (
    <BrowserRouter>
      <Route path='/agenda' exact component={HomeScreen} />
    </BrowserRouter>
  );
};

export default App;
