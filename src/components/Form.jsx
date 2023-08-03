import React, { useEffect, useState } from "react";
import { Formik, Form, ErrorMessage } from "formik";
import { Typography, TextField, Button, FormHelperText } from "@mui/material";
import * as Yup from "yup";

const Form1 = () => {
  // const [username, setUserName] = useState("");
  // const [password, setPassword] = useState("");
  const [userdetails, setUserDetails] = useState({
    username: "",
    password: "",
  });

  useEffect(() => {
    // if(userdetails.username){
    console.log("useeffect called");
    // }
  }, []);

  const validationSchema = Yup.object().shape({
    username: Yup.string().required("Username shoud not be empty"),
    email: Yup.string().matches(/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/,"email is not valid").required("Email shoud not be empty"),
    age: Yup.number().min(18).required("Age shoud not be empty"),
    password: Yup.string().min(8).required("Password shoud not be empty")
  })

  function handleSubmit() {
    console.log("Username: ", userdetails.username);
    console.log("Password: ", userdetails.password);
  }
  return (
    <Formik
      initialValues={{ username: "", age: "", email: "", password: "" }}
      validationSchema={validationSchema}
      onSubmit={(values) => handleSubmit()}
    >
      {({ values, errors, setFieldValue, handleBlur }) => {
        console.log("error:", errors);
        return (
          <Form>
            <div className="form-demo">
              <Typography variant="h3" sx={{ color: "red" }}>
                Register here!
              </Typography>
              <TextField
                label="username"
                name="username"
                variant="outlined"
                error={errors.username}
                // value={userdetails.username}
                value={values.username}
                onChange={(e) =>
                  // setUserDetails((prev) => ({
                  //   ...prev,
                  //   username: e.target.value,
                  // }))
                  setFieldValue("username", e.target.value)
                }
                onBlur={handleBlur}
              />
              <FormHelperText error>
                <ErrorMessage name="username"></ErrorMessage>
              </FormHelperText>
              <TextField
                label="age"
                name="age"
                variant="outlined"
                value={values.age}
                onChange={(e) =>
                  setFieldValue("age", e.target.value)
                }
                onBlur={handleBlur} 
              />
              <FormHelperText error>
                <ErrorMessage name="age"></ErrorMessage>
              </FormHelperText>
              <TextField
                label="email"
                name="email"
                variant="outlined"
                value={values.email}
                onChange={(e) =>
                  setFieldValue("email", e.target.value)
                }
                onBlur={handleBlur}
              />
              <FormHelperText error>
                <ErrorMessage name="email"></ErrorMessage>
              </FormHelperText>
              <TextField
                label="password"
                name="password"
                variant="outlined"
                value={values.password}
                onChange={(e) =>
                  setFieldValue("password", e.target.value)
                }
              />
              <FormHelperText error>
                <ErrorMessage name="password"></ErrorMessage>
              </FormHelperText>
              <Button variant="contained" type="submmit">
                submit
              </Button>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};

export default Form1;
