import React, { useState } from "react";
import { Typography, TextField, Button } from "@mui/material";

const Form = () => {
  // const [username, setUserName] = useState("");
  // const [password, setPassword] = useState("");
  const [userdetails, setUserDetails] = useState({
    username: "",
    password: "",
  });

  const handleSubmit = () => {
    console.log("Username: ", userdetails.username);
    console.log("Password: ", userdetails.password);
  };
  return (
    <div className="form-demo">
      <Typography variant="h3" sx={{ color: "red" }}>
        Login here!
      </Typography>
      <TextField
        label="username"
        variant="outlined"
        value={userdetails.username}
        onChange={(e) => setUserDetails({ username: e.target.value })}
      />
      <TextField
        label="password"
        variant="outlined"
        value={userdetails.password}
        onChange={(e) => setUserDetails({ password: e.target.value })}
      />
      <Button variant="contained" type="submmit" onClick={handleSubmit}>
        submit
      </Button>
    </div>
  );
};

export default Form;
