import { Button, TextField, Grid, Box, Typography } from "@mui/material";
import { useState } from "react";
import { user } from "../interfaces";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const defaultForm: user = {
    name: "",
    email: "",
    phoneNumber: "",
  };
  const [form, setForm] = useState(defaultForm);
  const navigate = useNavigate();

  const loginUser = async () => {
    if (form.email && form.name && form.phoneNumber) {
      localStorage.setItem("details", JSON.stringify(form));
      setForm(defaultForm);
      navigate("/posts");
    } else {
      alert("All details are required");
    }
  };
  return (
    <Box sx={{ m: "auto", mt: 2, width: "600px", maxWidth: "100%" }}>
      <Grid
        container
        p={2}
        spacing={{ md: 3, sm: 2, xs: 0 }}
        rowSpacing={{ xs: 2 }}
        color={"var(--dark)"}
      >
        <Grid item xs={12}>
          <Typography
            variant="h3"
            textAlign={"center"}
            pb={2}
            fontWeight={"bold"}
          >
            Welcome
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <TextField
            sx={{ mb: 4 }}
            fullWidth
            label="Name *"
            type="email"
            value={form.name}
            onChange={(e) => {
              setForm({ ...form, name: e.target.value });
            }}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            sx={{ mb: 4 }}
            fullWidth
            label="Phone Number *"
            type="number"
            value={form.phoneNumber}
            onChange={(e) => {
              setForm({
                ...form,
                phoneNumber: parseInt(e.target.value) || undefined,
              });
            }}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            sx={{ mb: 4 }}
            fullWidth
            label="Email *"
            type="email"
            value={form.email}
            onChange={(e) => {
              setForm({ ...form, email: e.target.value });
            }}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <Button
            variant="contained"
            sx={{ py: 2, mb: 2 }}
            fullWidth
            onClick={loginUser}
          >
            Save Details
          </Button>
        </Grid>
        <Box
          sx={{ mt: 5, textAlign: "center", fontWeight: 300, width: "100%" }}
        >
          <Link
            to="/posts"
            style={{
              textDecoration: "none",
              color: "blue",
              fontSize: "14px",
            }}
          >
            Go to posts page
          </Link>
        </Box>
      </Grid>
    </Box>
  );
};

export default Home;
