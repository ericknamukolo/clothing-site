import React, { Fragment } from 'react';
import Auth from '../../providers/auth';

const SignIn: React.FC = (props) => {
  return (
    <Fragment>
      <h1>Sign In page</h1>
      <button onClick={new Auth().authGoogleUser}>Sign in with google</button>
    </Fragment>
  );
};

export default SignIn;
