import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import '../App/App.sass';
import PrincipalPage from '../../pages/Principal/Principal';


const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <PrincipalPage />
        </Route>
      </Switch>
    </BrowserRouter>
     );
};

export default App;