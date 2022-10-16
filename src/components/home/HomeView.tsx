import { Grid, Typography } from "@mui/material";
import { IFRedirect } from "hrms_types";
import { FC } from "react";
import TopBar from "../global/TopBar";
import AppListItem from "./AppListItem";

const HomeView: FC<{
  list: IFRedirect[];
  name: string;
}> = ({ list, name }) => {
  return (
    <>
      <TopBar name={`${name} Apps`.trim().toUpperCase()} />
      <Grid
        container
        spacing={2}
        justifyContent={list.length < 3 ? `center` : "flex-start"}
      >
        {!list.length ? (
          <Grid item xs={12} md={6} lg={4} sx={{ textAlign: `center` }}>
            <Typography variant={`h5`} component={"h2"}>
              No app found!
            </Typography>
          </Grid>
        ) : (
          list.map((item: IFRedirect) => {
            return (
              <Grid item xs={12} md={6} lg={4} key={`redirect-item-${item.id}`}>
                <AppListItem {...item} />
              </Grid>
            );
          })
        )}
      </Grid>
    </>
  );
};

export default HomeView;
