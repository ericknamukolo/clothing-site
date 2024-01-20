import React, { useState } from 'react';
import TextField from '../../models/field';
import FormInput from './form-input';
import './form-input.scss';
import { ButtonC, ButtonType } from '../button/button';

const SignInForm: React.FC<{ googleSignIn: (event: any) => Promise<void> }> = (
  props
) => {
  const [fields, setField] = useState([
    { display: 'Email', type: 'email', input: '' },
    { display: 'Password', type: 'password', input: '' },
  ] as TextField[]);

  const handleSubmit = async (event: any) => {
    //event.preventDefauflt();
    const { input: email } = fields[0];
    const { input: pwd } = fields[1];

    // await new Auth().createUserWithEmailAndPwd(email, password, displayName);
  };

  const handleChange = (event: any) => {
    setField((prevState) => {
      let updatedFields = [...prevState];
      const index: number = updatedFields.findIndex(
        (val) => val.display === event.target.name
      );
      updatedFields[index] = {
        type: updatedFields[index].type,
        display: updatedFields[index].display,
        input: event.target.value,
      };
      return updatedFields;
    });
  };
  return (
    <div className='sign-up-container'>
      <h2>Sign in</h2>

      <form onSubmit={handleSubmit}>
        {fields.map((field) => {
          return (
            <FormInput
              field={field}
              onChange={handleChange}
              key={field.type + field.display}
            />
          );
        })}
        <ButtonC onClick={handleSubmit} type={ButtonType.normal}>
          Sign In
        </ButtonC>
        <ButtonC onClick={props.googleSignIn} type={ButtonType.google}>
          Sign In with Google
        </ButtonC>
      </form>
    </div>
  );
};

export default SignInForm;
