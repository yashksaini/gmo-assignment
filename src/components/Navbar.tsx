import { AppBar, Toolbar, Button, Typography } from "@mui/material";
import { user } from "../interfaces";

const Navbar = (props: { userData: user }) => {
  const { userData } = props;
  return (
    <AppBar component="nav">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          {userData.name.toUpperCase()}
        </Typography>
        <Button sx={{ color: "#fff" }}>{userData.email}</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
