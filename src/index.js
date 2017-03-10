import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory, Route, IndexRoute } from 'react-router';

import '../public/style.css';
import '../public/bootstrap/css/bootstrap.css';
import App from './components/App';
import Signin from './components/authentication/signin';
import Signup from './components/authentication/signup';
import Signout from './components/authentication/signout';
import Landing from './components/landing'
import Home from './components/home';
import Profile from './components/profile/profile'
import RequireAuth from './components/authentication/requireauth';
import CreateTrip from './components/trip/createtrip'

var token = localStorage.getItem('token');
var auth = token ? true : false;
var username = localStorage.getItem('username')

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App} routerProps={[auth, username]} >
      <IndexRoute component={Landing} />
      <Route path="signin" component={Signin} />
      <Route path="signup" component={Signup} />
      <Route path="home" component={RequireAuth(Home)} />
      <Route path="signout" component={Signout} />
      <Route path="profile/:username" component={RequireAuth(Profile)} />
      <Route path="createtrip" component={RequireAuth(CreateTrip)} />
    </Route>
  </Router>
  ,
  document.getElementById('root'),
);


