import React, { Fragment, useEffect } from 'react';
import Auth from '../../providers/auth';
import { getRedirectResult } from 'firebase/auth';
import { auth } from '../../utils/firebase';
import SignUpForm from '../../components/auth/sign-up-form';
import SignInForm from '../../components/auth/sign-in-form';
import './sign-in.scss';

const SignIn: React.FC = (props) => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getRedirectResult(auth);
        if (res === null) return;
        await new Auth().createUserForRedirect(res!);
      } catch (error) {
        console.log('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
  return (
    <div className='auth-container'>
      <SignInForm googleSignIn={new Auth().authGoogleUser} />
      <div style={{ width: '200px' }}></div>
      <SignUpForm />
    </div>
  );
};

export default SignIn;
