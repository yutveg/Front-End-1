import React from 'react';
import { Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { setCurrentUser } from './redux/user/user.action'
import './App.css';

function App() {
  return (
    <div className="App">
    <Switch>
      <Route exact path='/' component={HomePage} />
      <Route path='/signin' component={SignIn} />
      <Route path='/signup' component={SignUp} />
    </Switch>
    
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
