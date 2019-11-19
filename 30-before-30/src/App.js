import React from 'react';
import { Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { setCurrentUser } from './redux/user/user.action'
import './App.css';
import { HomePage } from './pages/HomePage';
import { UserPage } from './pages/UserPage';
// import { Nav } from './components/Nav';
import { SignInPage } from './pages/SignInPage';
// import { SignUpPage } from './pages/SignInPage';
// import { Footer } from './components/Footer';


function App() {
  return (
    <div>
    <h2>Welcome to 30 before 30</h2>
      {/* <Nav /> */}
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/user' component={UserPage} />
        <Route path='/sign-in' component={SignInPage} />
        {/* <Route path='/sign-up' component={SignUpPage} /> */}
      </Switch>
      {/* <Footer /> */}
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
