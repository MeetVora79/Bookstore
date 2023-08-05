/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { Formik, Form, ErrorMessage } from "formik";
import { Typography, TextField, Button, FormHelperText } from "@mui/material";
import * as Yup from "yup";
import authService from "../services/authService";
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const Form1 = () => {
  // const [username, setUserName] = useState("");
  // const [password, setPassword] = useState("");
  const [userdetails, setUserDetails] = useState({
    username: "",
    password: "",
  });

  const [userData, setUserData] = useState();

  const getData = async() => {
    await axios
      .get(`https://book-e-sell-node-api.vercel.app/api/user/byId?id=${645}`)
      .then((response) => setUserData(response.data.result));
  }

  useEffect(() => {
    getData();
  }, []);
  console.log(userData);


  const validationSchema = Yup.object().shape({
    username: Yup.string().required("Username shoud not be empty"),
    email: Yup.string().matches(/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/, "email is not valid").required("Email shoud not be empty"),
    age: Yup.number().min(18).required("Age shoud not be empty"),
    password: Yup.string().min(8).required("Password shoud not be empty"),
  })

  const handleSubmit = async (values) => {
    console.log("Username: ", userdetails.username);
    console.log("Password: ", userdetails.password);

    const payload = {
      "firstName": values.username,
      "lastName": "teest",
      "email": values.email,
      "roleId": 2,
      "password": values.password
    }
  
   authService.Register(payload)
      .then((response) => {
        if(response && response.status === 200){
          toast.success("Data Submitted Succesfully!",{
            position: "bottom-right" ,
          });
        }
      })
      .catch((error)=>{
        toast.error("Unable to submit the data",{position: "bottom-right"});
      })
  };

return (
  <Formik
    initialValues={{ username: "", age: "", email: "", password: "" }}
    validationSchema={validationSchema}
    onSubmit={(values) => handleSubmit(values)}
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
                setFieldValue("username", e.target.value)
              }
              onBlur={handleBlur}
            />
            <FormHelperText error>
              <ErrorMessage name="username"/>
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
              <ErrorMessage name="age"/>
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
              <ErrorMessage name="email"/>
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
              <ErrorMessage name="password"/>
            </FormHelperText>
            <Button variant="contained" type="submit">
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