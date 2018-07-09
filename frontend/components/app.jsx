import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Greeting from './greeting_container';
import signup from './signup_form_container';
import login from './login_form_container';
import Authroute from '../util/route_util';
import BenchIndexContainer from './bench_index_container';

const App = () => (
  <div>
    <Greeting />
  <Authroute path="/signup" component={signup}/>
  <Authroute path="/login" component={login}/>
  <Route exact path="/" component={ BenchIndexContainer } />
  </div>
);

export default App;
