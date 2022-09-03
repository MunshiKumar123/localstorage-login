import React, { useRef } from "react";
import Main from "./Main";

import { Formik, Field, Form, ErrorMessage } from "formik";
import { Row } from "react-bootstrap";

const Login = () => {
  const email = useRef();
  const password = useRef();
  const getEmail = localStorage.getItem("emailData");
  const getPassword = localStorage.getItem("passwordData");

  const handleSubmit = (values) => {
    debugger;
    console.log(JSON.stringify(values, null, 2));
    const { email, password } = values;
    if (email === "123@gmail.com" && password === "12345") {
      localStorage.setItem("emailData", email);
      localStorage.setItem("passwordData", password);
      window.location.reload();
    }
  };

  return (
    <>
      {getEmail && getPassword ? (
        <p></p>
      ) : (
        <div className="container contact_div pt-5 pb-5 bg-light">
          <div className="row">
            <div className="col-md-6 col-10 mx-auto">
              <h3>Your user id: 123@gmail.com</h3>
              <h4>Your Password: 12345</h4>
            </div>
          </div>
        </div>
      )}
      {getEmail && getPassword ? (
        <Main />
      ) : (
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          onSubmit={handleSubmit}
        >
          <div className="container contact_div pt-5 pb-5 bg-light">
            <div className="row">
              <div className="col-md-6 col-10 mx-auto">
                <Form>
                  <div className="mb-3">
                    <label htmlFor="email">Email Address:</label>
                    <Field
                      name="email"
                      id="email"
                      type="email"
                      className="form-control"
                      ref={email}
                    />
                    <ErrorMessage name="email" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="phone">Password:</label>
                    <Field
                      name="password"
                      id="phone"
                      type="password"
                      className="form-control"
                      ref={password}
                    />
                    <ErrorMessage name="password" />
                  </div>

                  <button type="submit">SignIn</button>
                </Form>
                <hr />
              </div>
            </div>
          </div>
        </Formik>
      )}
    </>
  );
};

export default Login;
