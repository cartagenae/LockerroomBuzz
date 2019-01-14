import React from 'react';
import ReactDOM from 'react-dom';
import './css/bootstrap.css';
import './css/main.css';
import Main from './main';
import Content from './components/content';
import SignUp from './components/signup';
import Login from './components/login';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <div>
      <Route path="/" component={Main} />
      <Route path="/home" component={Content} />
      <Route path="/signup" component={SignUp} />
      <Route path="/login" component={Login} />
      <Redirect from="/" to="/home" />
    </div>
  </BrowserRouter>,
  document.getElementById('root')
);
