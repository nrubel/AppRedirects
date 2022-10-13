import { Android, Apple } from "@mui/icons-material";
import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import { IFRedirect } from "hrms_types";
import { FC } from "react";
import Endpoints from "../../utils/Endpoints";
import LazyImage from "../global/lazyImage";

const HomeView: FC<{
  list: IFRedirect[];
}> = ({ list }) => {
  return (
    <Grid
      container
      spacing={2}
      justifyContent={list.length < 3 ? `center` : "flex-start"}
    >
      {list.map(({ path, id, android, cover, ios, name }: IFRedirect) => {
        return (
          <Grid item xs={12} md={6} lg={4} key={`redirect-item-${id}`}>
            <Stack direction={"row"} spacing={2} alignItems={"center"}>
              <LazyImage
                sx={{ width: 100, height: 100 }}
                alt={path}
                src={!!cover ? Endpoints.baseUrl + cover : "/flyhub.png"}
              />
              <Box>
                <Typography variant={`h5`} component={"h2"}>
                  {name}
                </Typography>
                <Stack direction={"row"}>
                  {!!android && (
                    <Button
                      variant="text"
                      onClick={() => window.open(android, "_self")}
                      startIcon={<Android />}
                    >
                      Get android
                    </Button>
                  )}
                  {!!ios && (
                    <Button
                      variant="text"
                      onClick={() => window.open(ios, "_self")}
                      startIcon={<Apple />}
                    >
                      Get iOS
                    </Button>
                  )}
                </Stack>
              </Box>
            </Stack>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default HomeView;
