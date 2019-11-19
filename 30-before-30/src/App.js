import React, { useState } from 'react';
import Modal from './components/Modal.js';
import { Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { setCurrentUser } from './redux/user/user.action'
import './App.css';
import SignUpPage from './components/sign-up/SignUpForm.js';
import { HomePage } from './pages/HomePage';
import { UserPage } from './pages/UserPage';
import Nav from './components/Nav';
import { SignInPage } from './pages/SignInPage';
// import { SignUpPage } from './pages/SignInPage';
 import { Footer } from './components/Footer';

function App() {
  const [userData, setUserData] = useState([]);
  

  return (
    <div className="App">
      <Nav /> 
      <Switch>
        <Route exact path="/home/test" render={props => <Modal {...props} userData={userData} /> } />
        <Route exact path='/' component={HomePage} />
        <Route path='/user' component={UserPage} />
        <Route path='/sign-in' component={SignInPage} />
        <Route path='/sign-up' component={SignUpPage} />
      </Switch>
      <Footer />
    </div>
  );
}


const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})
// //for children
// const mapStateToProps = state => {
//   currentUser = state.user.currentUser

// }
// export default connect(mapStateToProps)(App);
export default connect(null, mapDispatchToProps)(App);
