import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';
import { HomePage } from './pages/HomePage';
import { UserPage } from './pages/UserPage';
import { Nav } from './components/Nav';
import { SignInPage } from './pages/SignInPage';
// import { SignUpPage } from './pages/SignInPage';
import { Footer } from './components/Footer';


function App() {
  return (
    <div>
      <Nav />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/user/${user}' component={UserPage} />
        <Route path='/sign-in' component={SignInPage} />
        {/* <Route path='/sign-up' component={SignUpPage} /> */}
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
