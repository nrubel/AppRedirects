/** @format */

import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import { FC } from "react";
import logo from "../../../public/logo.svg";

const TopBar: FC<{ name: string }> = ({ name }) => {
  return (
    <AppBar
      position="static"
      sx={{
        my: 2,
        boxShadow: "none",
      }}
      color={`transparent`}
    >
      <Toolbar
        variant="dense"
        sx={{
          justifyContent: "space-between",
          px: "0 !important",
        }}
      >
        <Box
          component={"img"}
          src={logo}
          alt={"flyhub.com"}
          width={117}
          height={39}
          loading={"lazy"}
          style={{ cursor: "pointer" }}
          onClick={() => window.open("https://flyhub.com", "_self")}
        />
        <Typography variant="h6" color="inherit" component="div">
          {name}
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;
