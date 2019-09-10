import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import store from './store';
// import Signin from './containers/Signin/Signin';
// import Signup from './containers/Signup/Signup';
import HomePage from './components/HomePage/HomePage';
import Signin_up from './components/Signin_up/Signin_up';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/signin_up' component={Signin_up} />
          {/* <Route exact path='/signin_up' component={Signin} />
          <Route exact path='/signup_up' component={Signup} /> */}
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
