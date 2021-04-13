import React from 'react';

//librairies
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import { TextFieldFormik } from '../../js/TextFieldFormik';

function Login() {

const validate = Yup.object({
  email: Yup.string()
  .email('email is invalid')
  .required('Email is required'),
  password: Yup.string()
  .min(6, 'password must have at least 6 characters')
  .required('Password is required'),
})

  return(
    <div className="login-wrapper">
      <span className="login__title">Please Log In</span>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        validationSchema={validate}
        onSubmit={values => console.log(values)}
      >
        {formik => (
          <div>
            {/* {console.log(formik.values)} */}
            <Form>
              <TextFieldFormik
                label="Type a valid email"
                name="email"
                type="email"
              />
              <TextFieldFormik
                label="Type a 'password' word"
                name="password"
                type="password"
              />
              <button className="my-button-default my-button-big" type="submit">Login</button>
            </Form>
          </div>
        )}
      </Formik>
    </div>
  )
};

export default Login;
