import React, { Fragment, useState } from 'react';
import TextField from '../../models/field';
import Auth from '../../providers/auth';
import FormInput from './form-input';

const SignUpForm: React.FC = () => {
  const [fields, setField] = useState([
    { display: 'Display Name', type: 'text' },
    { display: 'Email', type: 'email' },
    { display: 'Password', type: 'password' },
    { display: 'Confirm Password', type: 'password' },
  ] as TextField[]);

  const handleSubmit = async (event: any) => {
    //event.preventDefauflt();
    const { input: displayName } = fields[0];
    const { input: email } = fields[1];
    const { input: password } = fields[2];
    const { input: confirmPassword } = fields[3];
    if (password !== confirmPassword) return alert('Passwords do not match');

    await new Auth().createUserWithEmailAndPwd(email, password, displayName);
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
    <div>
      <h1>Sign up with your email and password</h1>
      <button onClick={handleSubmit}>Test Button</button>
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
        <button onClick={handleSubmit}>Sign Up</button>
      </form>
    </div>
  );
};

export default SignUpForm;
