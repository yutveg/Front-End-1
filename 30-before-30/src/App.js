import React from 'react';
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
import { Provider } from './contexts/context';


function App(props) {
  //console.log(props)
  //const [userData, setUserData] = useState([]);
  
  const token  = localStorage.getItem('token')
  const decoded = decode(token)


  return (
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
  );
}
export default App;
