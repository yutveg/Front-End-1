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

      <Link to='user/2'>USER DASH</Link>
      <Switch>
        <Route exact path="/test/:id" render={props => <Modal {...props} /> } /> 
        <Route exact path='/' component={HomePage} />
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
