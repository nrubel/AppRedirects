import { Android, Apple } from "@mui/icons-material";
import { Box, Button, Stack, Typography } from "@mui/material";
import { IFRedirect } from "hrms_types";
import { FC } from "react";
import Endpoints from "../../utils/Endpoints";
import LazyImage from "../global/lazyImage";

const AppListItem: FC<IFRedirect> = ({ path, android, cover, ios, name }) => {
  return (
    <Stack direction={"row"} spacing={2} alignItems={"center"}>
      <LazyImage
        sx={{ width: 100, height: 100 }}
        alt={path}
        src={!!cover ? Endpoints.baseUrl + cover : "/flyhub.png"}
      />
      <Box>
        <Typography variant={`h5`} component={"h2"} gutterBottom>
          {name}
        </Typography>
        <Stack direction={"row"} spacing={2}>
          {!!android && (
            <Button
              variant="outlined"
              size={"small"}
              onClick={() => window.open(android, "_self")}
              startIcon={<Android sx={{ mt: -0.2 }} />}
              sx={{
                textTransform: "none",
                transition: "all 300ms linear 0s",
                "> span": {
                  color: "#a4c639",
                  transition: "all 300ms linear 0s",
                },
                "&:hover": {
                  backgroundColor: "#a4c639",
                  color: "#FFF",
                  borderColor: "#a4c639",
                  "> span": {
                    color: "#FFF",
                  },
                },
              }}
            >
              Android
            </Button>
          )}
          {!!ios && (
            <Button
              variant="outlined"
              size={"small"}
              onClick={() => window.open(ios, "_self")}
              startIcon={<Apple sx={{ mt: -0.5 }} />}
              sx={{
                textTransform: "none",
                transition: "all 300ms linear 0s",
                "> span": {
                  transition: "all 300ms linear 0s",
                },
                "&:hover": {
                  backgroundColor: "#000",
                  color: "#FFF",
                },
              }}
            >
              iOS
            </Button>
          )}
        </Stack>
      </Box>
    </Stack>
  );
};

export default AppListItem;
