import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
const BooksList = () => {
    const navigate = useNavigate()

  const handleButtonClick = () => {
    navigate("/")
  }
  return (
    <>
      <div>This is bookslist component</div>
      {/* <button onClick={handleButtonClick}>Go to Homepage</button> */}
      <Button variant="contained" color="info" onClick={handleButtonClick}>Go to Homepage</Button>
    </>
  )
}

export default BooksList;
