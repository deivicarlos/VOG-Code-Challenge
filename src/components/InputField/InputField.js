import React from 'react';

const InputField = ({
  icon,
  input,
  name,
  label,
  type,
  meta: { touched, error },
}) => (
  <div>
    {touched && error && (
      <div className="font-size-smaller text-danger">{error}</div>
    )}
    <div className="input-group flex-nowrap">
      {icon && (
        <div className="input-group-prepend">
          <span className="input-group-text" id="addon-wrapping">
            <i className={icon} />
          </span>
        </div>
      )}
      <input
        {...input}
        type={type}
        name={name}
        className={['form-control', touched && error && 'is-invalid'].join(' ')}
        placeholder={label}
        aria-label={label}
        aria-describedby="addon-wrapping"
      />
    </div>
  </div>
);

export default InputField;
