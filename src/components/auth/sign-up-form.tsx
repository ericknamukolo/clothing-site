import React, { Fragment, useState } from 'react';
import TextField from '../../models/field';
import { createUserWithEmailAndPassword } from '../../utils/firebase';
import { UserCredential } from 'firebase/auth';
import Auth from '../../providers/auth';

const SignUpForm: React.FC = () => {
  const [fields, setField] = useState([
    { display: 'Display Name', type: 'text' },
    { display: 'Email', type: 'email' },
    { display: 'Password', type: 'password' },
    { display: 'Confirm Password', type: 'password' },
  ] as TextField[]);

  const handleSubmit = async (event: any) => {
    //event.preventDefauflt();
    if (
      fields.find((field) => field.display === 'Password')?.input !==
      fields.find((field) => field.display === 'Confirm Password')?.input
    )
      return alert('Passwords do not match');

    try {
      const response: UserCredential = await createUserWithEmailAndPassword(
        fields.find((field) => field.display === 'Email')!.input,
        fields.find((field) => field.display === 'Password')!.input
      );
      await new Auth().createUserForRedirect(response);
    } catch (e) {
      alert(e);
    }
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
      <form onSubmit={handleSubmit}>
        {fields.map((field) => {
          return (
            <Fragment key={field.type + field.display}>
              <label>{field.display}</label>
              <input
                type={field.type}
                required
                onChange={handleChange}
                name={field.display}
                value={
                  fields.find((val) => val.display === field.display)?.input ??
                  ''
                }
              />
            </Fragment>
          );
        })}
        <button onClick={handleSubmit}>Sign Up</button>
      </form>
    </div>
  );
};

export default SignUpForm;
