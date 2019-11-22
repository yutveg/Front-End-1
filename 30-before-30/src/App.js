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
  const context = useContext(Context) 
  const [bucket, setBucket] = useState([context.ITEM_DATA])

  useEffect(() => {
    axios
      .post('https://project-30-before-30.herokuapp.com/api/auth/login', {username: "blue", password: "blue"})
      .then(res => {
        //console.log(values)
        const token = res.data.token
        console.log(token);
        localStorage.removeItem('token')
        localStorage.removeItem('username')
        localStorage.setItem('token', res.data.token)
        // localStorage.setItem('username', username)
        localStorage.setItem('userId', decode(token).id)
      })
      .catch(err => {console.log(err)});
  }, [])
  
  const token  = localStorage.getItem('token')
  const decoded = decode(token)


  return (
    <Provider value={{bucket}}>
      <div className="App">
        <Nav /> 
        <Link to={`/users/${decoded.id}`}>USER DASH</Link>
        <Route path='/home' component={HomePage} />
        <Switch>
          <Route path="/home/:id" render={props => <Modal {...props} /> } /> 
          <Route path={`/users/${decoded.id}`} component={UserDash} />
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
