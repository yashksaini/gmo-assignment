import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { Link, useNavigate } from "react-router-dom";
import { user } from "../interfaces";
import AllPosts from "../components/AllPosts";
import Departments from "../components/Departments";

const Posts = () => {
  const defaultForm: user = {
    name: "",
    email: "",
    phoneNumber: "",
  };
  const [isValidUser, setIsValidUser] = useState(false);
  const [user, setUser] = useState(defaultForm);
  const navigate = useNavigate();

  const checkUserExists = () => {
    if (localStorage.getItem("details")) {
      setUser(JSON.parse(localStorage.getItem("details")!));
      setIsValidUser(true);
    } else {
      setTimeout(() => {
        navigate("/");
      }, 2000);
    }
  };
  useEffect(() => {
    checkUserExists();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Box>
      {isValidUser && user ? (
        <Box>
          <Navbar userData={user} />
          <div style={{ paddingTop: "72px" }}>
            <AllPosts />
            <Departments />
          </div>
        </Box>
      ) : (
        <Box sx={{ mt: 5, textAlign: "center", fontWeight: 300 }}>
          <Typography sx={{ mb: 1 }}>
            Fill out the details to access this page
          </Typography>
          <Typography sx={{ mb: 2, fontSize: "14px" }}>
            Redirecting to home page....
          </Typography>
          <Link
            to="/"
            style={{
              textDecoration: "none",
              color: "blue",
            }}
          >
            Go to home
          </Link>
        </Box>
      )}
    </Box>
  );
};

export default Posts;
