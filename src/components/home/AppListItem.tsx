/** @format */

import { Box, CircularProgress, Grid, Stack, Typography } from "@mui/material";
import { IFRedirect } from "hrms_types";
import { FC, Suspense } from "react";
import Endpoints from "../../utils/Endpoints";
import appStore from "../../../public/appStore.svg";
import playStore from "../../../public/playStore.svg";

const AppListItem: FC<{ item: IFRedirect; isOdd: boolean }> = ({
  item,
  isOdd,
}) => {
  const { path, android, cover, ios, name, coverMeta, country } = item;

  return (
    <Box
      sx={{
        backgroundColor: "#FFFFFF",
        borderRadius: 4,
        mb: 3.75,
        p: 10,
      }}
    >
      <Grid
        columnSpacing={10}
        container
        alignItems={"center"}
        flexDirection={isOdd ? "row" : "row-reverse"}
      >
        <Grid item xs={12} md={5}>
          <Suspense
            fallback={
              <Box sx={coverMeta}>
                <CircularProgress />
              </Box>
            }
          >
            <Box
              component={"img"}
              src={!!cover ? Endpoints.baseUrl + cover : "/flyhub.png"}
              alt={path}
              sx={{ borderRadius: 4, maxWidth: "100%" }}
              loading={"lazy"}
            />
          </Suspense>
        </Grid>

        <Grid item xs={12} md={7}>
          <Typography
            component={"h2"}
            sx={{
              mb: 2,
              fontSize: 44,
              fontWeight: 700,
              lineHeight: 1.23,
            }}
          >
            {name}
          </Typography>
          {!!country?.code && (
            <Stack direction={"row"} alignItems={"center"} sx={{ mb: 5 }}>
              <Suspense
                fallback={
                  <Box sx={{ width: 36, height: 26 }}>
                    <CircularProgress />
                  </Box>
                }
              >
                <Box
                  component={"img"}
                  src={
                    Endpoints.baseUrl +
                    `/assets/image/flags/${country.code.toLowerCase()}.svg`
                  }
                  alt={country.code}
                  loading={"lazy"}
                  sx={{ width: 36, borderRadius: 0.6 }}
                />
              </Suspense>
              <Typography
                component={"h2"}
                sx={{
                  fontSize: 24,
                  fontWeight: 700,
                  lineHeight: 1.23,
                  ml: 3,
                }}
              >
                {country?.name}
              </Typography>
            </Stack>
          )}
          <Stack direction={"row"} spacing={2}>
            {!!android && (
              <Box
                component={"img"}
                src={playStore}
                alt={"install app"}
                loading={"lazy"}
                width={189}
                height={56}
                style={{ cursor: "pointer" }}
                onClick={() => window.open(android, "_self")}
              />
            )}
            <Box sx={{ ml: 2 }} />
            {!!ios && (
              <Box
                component={"img"}
                src={appStore}
                alt={"get app"}
                loading={"lazy"}
                width={189}
                height={56}
                style={{ cursor: "pointer" }}
                onClick={() => window.open(ios, "_self")}
              />
            )}
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AppListItem;
