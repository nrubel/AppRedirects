import { AppBar, Toolbar, Typography } from "@mui/material";
import { FC } from "react";
import LazyImage from "./lazyImage";

const TopBar: FC<{ name: string }> = ({ name }) => {
  return (
    <AppBar position="static" sx={{ mb: 2, mt: -3 }} color={`transparent`}>
      <Toolbar
        variant="dense"
        sx={{
          justifyContent: "space-between",
        }}
      >
        <LazyImage alt={"flyhub.com"} src={"/logo.svg"} />
        <Typography variant="h6" color="inherit" component="div">
          {name}
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;
