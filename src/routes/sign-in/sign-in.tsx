import React, { Fragment, useEffect } from 'react';
import Auth from '../../providers/auth';
import { getRedirectResult } from 'firebase/auth';
import { auth } from '../../utils/firebase';
import SignUpForm from '../../components/auth/sign-up-form';

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
    <Fragment>
      <h1>Sign In page</h1>
      <button onClick={new Auth().authGoogleUser}>Sign in with google</button>
      <button onClick={new Auth().authWithRedirect}>
        Sign in with redirect
      </button>
      <SignUpForm />
    </Fragment>
  );
};

export default SignIn;
