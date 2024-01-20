import React, { Fragment } from 'react';
import TextField from '../../models/field';

const FormInput: React.FC<{
  field: TextField;
  onChange: (event: any) => void;
}> = (props) => {
  return (
    <Fragment>
      <label></label>
      <input
        type={props.field.type}
        required
        onChange={props.onChange}
        name={props.field.display}
        value={props.field.input ?? ''}
      />
    </Fragment>
  );
};

export default FormInput;
