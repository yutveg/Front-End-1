import React, { useState, useEffect, useContext} from 'react';
import Context, {Provider} from './contexts/context'
import axios from 'axios';

import Modal from './components/Modal';
import { Switch, Link, Route, Redirect } from 'react-router-dom'
//import CurrentUserContext from './contexts/current-user/current-user.context'
import './App.css';
import { HomePage } from './pages/HomePage';
import Nav from './components/Nav';
import { SignInPage } from './pages/SignInPage';
import UserDash from './components/UserDashboard/UserDash.js'
import { SignUpPage } from './pages/SignUpPage';
//import { Footer } from './components/Footer';
import decode from 'jwt-decode'


function App(props) {
  //console.log('App')
  const context = useContext(Context) 
  const [bucket, setBucket] = useState([context.ITEM_DATA])
  const [user, setUser] = useState({
    userId:6,
    token: '',
    username:''
  })
  const userId = localStorage.getItem('userId')
  const ifExists = () => {
    if(typeof userId !== 'undefined' && user.userId !==userId && user.userId !== null){
      console.log(userId)
      setUser({
        ...user,
        userId:userId
      })
      }
  }
  ifExists();


  return (
    <Provider value={{bucket, user}}>
      <div className="App">
        <Nav /> 
        <Link to={`/users/${user.userId}`}>USER DASH</Link>
        <Route path='/home' component={HomePage} />
        <Switch>
          {/*<Route path="/home/:id" render={props => <Modal {...props} /> } /> */}
          <Route path={`/users/${6}`} component={UserDash} />
          <Route exact path='/sign-in' render={()=>props.currentUser
            ?(<Redirect tp='/' />)
            :<SignInPage />} />
          <Route path='/sign-up' component={SignUpPage} />
          <Route path="/USERBUCKETLIST/:id" component={Modal} />
        </Switch>
        {/*<Footer /> */}
      </div>
    </Provider>

  );
}
export default App;
