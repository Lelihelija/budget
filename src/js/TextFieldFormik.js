import React from 'react';
import { useField, ErrorMessage } from 'formik';

export const TextFieldFormik = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  // console.log();

  return (
    <div className="textfield-formik">
      <label className="login__label">
        <p>{label}</p>
        <input
          className={`my-input-default ${meta.touched && meta.error && 'invalid'}`}
          {...props} {...field}
          autoComplete="on"
          name={field.name}
          type={field.name}
        />
        <span className="error-info"><ErrorMessage name={field.name}/></span>
      </label>
    </div>
  )
}