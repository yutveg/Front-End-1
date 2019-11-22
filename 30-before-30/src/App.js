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
  console.log('App')
  const context = useContext(Context) 
  const [bucket, setBucket] = useState([context.ITEM_DATA])
  const [user, setUser] = useState({
    userId:6,
    token: '',
    username:''
  })

  // let decoded;
  
  // useEffect(() => {
  //   axios
  //     .post('https://project-30-before-30.herokuapp.com/api/auth/login', {username: "blue", password: "blue"})
  //     .then(res => {
  //       console.log(res.data)
  //       localStorage.setItem('token', res.data.token)
  //       // localStorage.setItem('username', username)
  //       //localStorage.setItem('userId', decode(token).id)
  //     })
  //     //.then(decoded = decode(localStorage.getItem('token')))
  //     .catch(err => {console.log(err)});
  //     //console.log(decoded)
  // },[])


  return (
    <Provider value={{bucket, user}}>
      <div className="App">
        <Nav /> 
        <Link to={`/users/${user.userId}`}>USER DASH</Link>
        <Route path='/home' component={HomePage} />
        <Switch>
          {/*<Route path="/home/:id" render={props => <Modal {...props} /> } /> */}
          <Route path={`/users/${user.userId}`} component={UserDash} />
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
