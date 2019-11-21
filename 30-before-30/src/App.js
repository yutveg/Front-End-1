import React, { useState } from 'react';
import Modal from './components/Modal';
import { Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { setCurrentUser } from './redux/user/user.action'
import './App.css';
import { HomePage } from './pages/HomePage';
import Nav from './components/Nav';
import { SignInPage } from './pages/SignInPage';
import UserDash from './components/UserDashboard/UserDash.js'
import { SignUpPage } from './pages/SignUpPage';
import { Footer } from './components/Footer';

function App() {
  const [userData, setUserData] = useState([]);
  

  return (
    <div className="App">
      <Nav /> 
      <Switch>
        <Route exact path="/test/:id" render={props => <Modal {...props} /> } /> 
        <Route exact path='/' component={HomePage} />
        <Route path='/user/:id' component={UserDash} />
        <Route path='/sign-in' component={SignInPage} />
        <Route path='/sign-up' component={SignUpPage} />
        <Route path="/USERBUCKETLIST/:id" component={Modal} />
      </Switch>
      <Footer />
    </div>
  );
}


const mapStateToProps = state => ({
  currentUser: state.user.currentUser
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
