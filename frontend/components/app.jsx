import React from 'react';
import { HashRouter } from 'react-router-dom';
import Greeting from './greeting_container';
import { Route } from 'react-router-dom';
import signup from './signup_form_container';
import login from './login_form_container';
import Authroute from '../util/route_util';

const App = () => (
  <div>
    <Greeting />

  <Authroute path="/signup" component={signup}/>
  <Authroute path="/login" component={login}/>

  </div>
);

export default App;
