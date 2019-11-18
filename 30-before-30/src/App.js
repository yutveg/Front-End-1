import React from 'react';
import './App.css';
import SignUpForm from './components/sign-up-form.js';
import { Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <Route exact path="/signup" component={SignUpForm} />
    </div>
  );
}

export default App;
