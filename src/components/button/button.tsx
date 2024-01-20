import React, { ReactNode } from 'react';
import './button.scss';

enum BUTTON_TYPE {
  normal,
  google,
  inverted,
}

const Button: React.FC<{
  children: ReactNode;
  type: BUTTON_TYPE;
  onClick: (event: any) => Promise<void>;
}> = (props) => {
  return (
    <button
      className={`button-container ${BUTTON_TYPE[props.type]}`}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};
export const ButtonType = BUTTON_TYPE;
export const ButtonC = Button;
