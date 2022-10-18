import { Box, CircularProgress } from "@mui/material";
import { FC } from "react";

const FullPageLoader: FC<{ text?: string }> = ({ text }) => (
  <Box
    sx={{
      display: `flex`,
      width: `100%`,
      height: `calc(100vh - 74px - 56px)`,
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    <CircularProgress color={"info"} sx={{ mr: 2 }} />
    <span>{text || `Loading...`}</span>
  </Box>
);

export default FullPageLoader;
