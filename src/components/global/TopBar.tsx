import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import { FC } from "react";

const TopBar: FC<{ name: string }> = ({ name }) => {
  return (
    <AppBar position="static" sx={{ mb: 2, mt: -3 }} color={`transparent`}>
      <Toolbar
        variant="dense"
        sx={{
          justifyContent: "space-between",
        }}
      >
        <Box component={"img"} src={`/logo.svg`} alt={`Flyhub.com`} />
        <Typography variant="h6" color="inherit" component="div">
          {name}
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;
