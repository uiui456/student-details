import * as React from './node_modules/react';
import PropTypes from './node_modules/prop-types';
import './TextBox.css';

const TextBox = ({
  placeholder = 'Enter Details',
  id = '',
  type = 'text',
  name = 'text_Box',
  textBoxHandler,
  maxlength,
  minLength,
  value = '',
  readOnly = false,
  isDisabled = false,
  isRequired = false
}) => {
  const [ state, setState ] = React.useState({ value: '' });
  React.useEffect(
    () => {
      setState({
        value: value
      });
    },
    [ value ]
  );

  const onChangeHandler = (event) => {
    setState({
      value: event.target.value
    });
    textBoxHandler && textBoxHandler(event.target);
  };

  return (
    <div>
      <input
        type={type}
        id={id}
        name={name}
        className="text-box-container"
        value={state.value}
        minLength={minLength}
        maxLength={maxlength}
        placeholder={placeholder}
        onChange={onChangeHandler}
        onClick={onChangeHandler}
        onKeyUp={onChangeHandler}
        readOnly={readOnly}
        disabled={isDisabled}
        required={isRequired}
      />
    </div>
  );
};

TextBox.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  minLength: PropTypes.number,
  maxlength: PropTypes.number,
  placeholder: PropTypes.string,
  readOnly: PropTypes.bool,
  isDisabled: PropTypes.bool,
  isRequired: PropTypes.bool,
  onChange: () => {},
  onClick: () => {},
  onKeyUp: () => {}
};
export default TextBox;
