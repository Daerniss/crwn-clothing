import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import './FormInput.scss';

const FormInput = ({
  handleChange, name, value, label, ...otherProps
}) => (
  <div className="form-group">
    <input
      id={name}
      name={name}
      value={value}
      className="form-group__input"
      onChange={handleChange}
      {...otherProps}
    />
    {label
      && (
      <label
        htmlFor={name}
        className={classnames('form-group__label', {
          'shrink': value && value.length,
        })}
      >
        {label}
      </label>
      )}
  </div>
);

FormInput.defaultProps = {
  value: '',
};

FormInput.propTypes = {
  handleChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  label: PropTypes.string.isRequired,
};

export default FormInput;
