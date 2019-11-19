import React from 'react';
import './App.css';
import Modal from './modal.js';
import { Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <Route exact path="/home/:id" component={SignUpForm} />
    </div>
  );
}

export default App;
