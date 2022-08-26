import './App.css';
import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

import Principal from './components/Principal/Principal';
import Secundaria from './components/Secundaria/Secundaria';

function App() {


  const NotFoundRedirect = () => <Redirect to='/principal' />

  return (
    <React.Fragment>
      <BrowserRouter>
        <Switch>
          <Route exact path='/principal' component={Principal}/>
          <Route exact path='/secundaria' component={Secundaria}/>
          <Route component={NotFoundRedirect}/>
        </Switch>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
