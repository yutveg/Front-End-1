import React from 'react';
import { SignInForm } from '../components/sign-in/SignInForm';
import Nav from '../components/Nav.jsx';

export const SignInPage = () =>(
  <div className='sign-in-up'>
    <Nav />
    <SignInForm />
  </div>
)