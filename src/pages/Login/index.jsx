import React from "react";
import { Formik, Form, ErrorMessage } from "formik";
import { Button, FormHelperText, TextField, Typography } from "@mui/material";
import css from "./style";
import * as Yup from "yup";
import AuthService from "../../services/authService";
import { toast } from "react-toastify";
import { Navigate, useNavigate } from "react-router-dom";


const login = () => {

    const validationSchema = Yup.object().shape({
        email: Yup.string().email().required("Please enter a valid email"),
        password: Yup.string().min(8).required("Please enter a valid Password"),
    });

    const handleSubmit = async (values) => {

        const payload={
            email:values.email,
            password:values.password,
        };

       await AuthService.Login(payload).then((response) => {
            if (response && response.status === 200) {
                toast.success("Login successful", {
                    position: "bottom-right",
                });
            // useNavigate("/home");
            }
        }).catch((error) => {
            toast.error(error.message);
            toast("unauthorized Login");
        })
    }
    
    return (
        <div>
            <div>
                <Typography variant="h2">Login Here!</Typography>

                <Formik initialValues={{ email: "", password: "" }}
                    validationSchema={validationSchema}
                    onSubmit={(values) => { handleSubmit(values) }}>
                    {
                        ({ values, setFieldValue, handleBlur, errors }) => {
                            console.log(errors);
                            return (
                                <Form>
                                    <div>
                                        <div style={css.loginforminput}>
                                            <TextField
                                                id="email"
                                                name="email"
                                                label="Email Address"
                                                autoComplete="off"
                                                variant="outlined"
                                                value={values.email}
                                                onChange={(e) => setFieldValue("email", e.target.value)}
                                                onBlur={handleBlur} />
                                        </div>
                                        <FormHelperText style={css.loginforminput} error>
                                            <ErrorMessage name="email" />
                                        </FormHelperText>
                                        <div style={css.loginforminput}>
                                            <TextField
                                                id="password"
                                                name="password"
                                                label="password"
                                                autoComplete="off"
                                                variant="outlined"
                                                value={values.password}
                                                onChange={(e) => setFieldValue("password", e.target.value)}
                                                onBlur={handleBlur} />
                                        </div>
                                        <FormHelperText style={css.loginforminput} error>
                                            <ErrorMessage name="password" />
                                        </FormHelperText>
                                        <Button style={css.loginforminput} variant="contained" type="submit" >Submit</Button>
                                    </div>
                                </Form>
                            )
                        }
                    }
                </Formik>

            </div>

        </div>
    )
};

export default login;
