import React from 'react';
import classnames from 'classnames';

import './FormInput.scss';

const FormInput = ({ handleChange, value, label, ...otherProps }) => {
 return (
  <div className='form-group'>
    <input value={value || ''} className='form-group__input' onChange={handleChange} {...otherProps} />
    {label &&
      <label
        className={classnames('form-group__label', {
        'shrink': value && value.length,
      })} >
        {label}
      </label>
    }
  </div>
 );
}

export default FormInput;
