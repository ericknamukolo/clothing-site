import React, { Fragment, useState } from 'react';
import TextField from '../../models/field';

const SignUpForm: React.FC = () => {
  const [fields, setField] = useState([
    { display: 'Display Name', type: 'text' },
    { display: 'Email', type: 'email' },
    { display: 'Password', type: 'password' },
    { display: 'Confirm Password', type: 'password' },
  ] as TextField[]);

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
      <form>
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
        <button onClick={() => console.log(fields)}>Sign Up</button>
      </form>
    </div>
  );
};

export default SignUpForm;
