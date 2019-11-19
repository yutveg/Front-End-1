import React, { useState } from 'react';
import './App.css';
import Modal from './components/Modal.js';
import { Route } from 'react-router-dom';

function App() {
  const [userData, setUserData] = useState([]);
  

  return (
    <div className="App">
        <Route exact path="/home/:id" render={props => <Modal {...props} userData={userData} />} />
    </div>
  );
}

export default App;
