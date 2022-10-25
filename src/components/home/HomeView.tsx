/** @format */

import { Container, Typography } from "@mui/material";
import { IFRedirect } from "hrms_types";
import { FC } from "react";
import TopBar from "../global/TopBar";
import AppListItem from "./AppListItem";

const HomeView: FC<{
  list: IFRedirect[];
  name: string;
}> = ({ list, name }) => {
  return (
    <Container>
      <TopBar name={name} />
      {!(list || []).length ? (
        <Typography variant={`h5`} component={"h2"}>
          No app found!
        </Typography>
      ) : (
        (list || []).map((item: IFRedirect, index: number) => {
          return (
            <AppListItem
              item={item}
              isOdd={index % 2 !== 0}
              key={`redirect-item-${item.id}`}
            />
          );
        })
      )}
    </Container>
  );
};

export default HomeView;
