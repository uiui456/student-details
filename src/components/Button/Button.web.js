import * as React from './node_modules/react';
import './Button.css';

const Button = ({ value, isDisabled, buttonClickHandler }) => {
  const [ title, setTitle ] = React.useState('');
  React.useEffect(() => {
    setTitle(value);
  });

  return (
    <div onClick={buttonClickHandler}>
      <input type="button" value={title} disabled={isDisabled} className={'button'} />
    </div>
  );
};

export default Button;
