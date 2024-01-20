import React from 'react';
import TextField from '../../models/field';
import './sign-up-form.scss';

const FormInput: React.FC<{
  field: TextField;
  onChange: (event: any) => void;
}> = (props) => {
  return (
    <div className='group'>
      <label
        className={`${
          props.field.input !== '' ? 'shrink' : null
        } form-input-label`}
      >
        {props.field.display}
      </label>
      <input
        className='form-input'
        type={props.field.type}
        required
        onChange={props.onChange}
        name={props.field.display}
        value={props.field.input ?? ''}
      />
    </div>
  );
};

export default FormInput;
