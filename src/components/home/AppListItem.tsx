/** @format */

import {
  Box,
  CircularProgress,
  Grid,
  Stack,
  Theme,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { IFRedirect } from "hrms_types";
import { FC, Suspense } from "react";
import appStore from "../../../public/appStore.svg";
import playStore from "../../../public/playStore.svg";
import Endpoints from "../../utils/Endpoints";

const AppListItem: FC<{ item: IFRedirect; isOdd: boolean }> = ({
  item,
  isOdd,
}) => {
  const { path, android, cover, ios, name, coverMeta, country } = item;
  const mdMatch = useMediaQuery(useTheme().breakpoints.up("md"));

  return (
    <Box
      sx={(theme: Theme) => ({
        backgroundColor: "#FFFFFF",
        borderRadius: 4,
        mb: 3.75,
        p: mdMatch ? 10 : 5,
      })}
    >
      <Grid
        columnSpacing={mdMatch ? 10 : 2}
        container
        alignItems={"center"}
        flexDirection={isOdd ? "row" : "row-reverse"}
      >
        <Grid
          item
          xs={12}
          md={5}
          sx={(theme: Theme) => ({
            [theme.breakpoints.down("md")]: {
              textAlign: "center",
            },
          })}
        >
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
            sx={(theme: Theme) => ({
              mb: 2,
              fontSize: mdMatch ? 44 : 32,
              fontWeight: 700,
              lineHeight: 1.23,
              [theme.breakpoints.down("md")]: {
                mt: 2,
                textAlign: "center",
              },
            })}
          >
            {name}
          </Typography>
          {!!country?.code && (
            <Stack
              direction={"row"}
              alignItems={"center"}
              sx={(theme: Theme) => ({
                mb: mdMatch ? 5 : 3,
                [theme.breakpoints.down("md")]: {
                  justifyContent: "center",
                },
              })}
            >
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
          <Stack
            direction={"row"}
            spacing={2}
            sx={(theme: Theme) => ({
              img: {
                maxWidth: "47%",
              },
              [theme.breakpoints.down("md")]: {
                justifyContent: "center",
              },
            })}
          >
            {!!android && (
              <Box
                component={"img"}
                src={playStore}
                alt={"install app"}
                loading={"lazy"}
                sx={{ cursor: "pointer" }}
                onClick={() => window.open(android, "_self")}
              />
            )}
            {!!ios && (
              <Box
                component={"img"}
                src={appStore}
                alt={"get app"}
                loading={"lazy"}
                sx={{ cursor: "pointer", ml: 2 }}
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
