import React, { useState } from 'react';
import Modal from './components/Modal';
import { Switch, Link, Route, Redirect } from 'react-router-dom'
import CurrentUserContext from './contexts/current-user/current-user.context'
import './App.css';
import { HomePage } from './pages/HomePage';
import Nav from './components/Nav';
import { SignInPage } from './pages/SignInPage';
import UserDash from './components/UserDashboard/UserDash.js'
import { SignUpPage } from './pages/SignUpPage';
import { Footer } from './components/Footer';

function App(props) {
  console.log(props)
  const [userData, setUserData] = useState([]);
  

  return (
    <div className="App">
      <Nav /> 

      <Route path='/home' component={HomePage} />
      <Switch>
        <Route path="/home/:id" render={props => <Modal {...props} /> } /> 
        
        <Route path='/user/:id' component={UserDash} />
        <Route exact path='/sign-in' render={()=>props.currentUser
        ?(<Redirect tp='/' />)
        :<SignInPage />} />
        <Route path='/sign-up' component={SignUpPage} />
        <Route path="/USERBUCKETLIST/:id" component={Modal} />
      </Switch>
      <Footer />
    </div>
  );
}
export default App;
