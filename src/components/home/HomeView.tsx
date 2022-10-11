import { Avatar, Stack } from "@mui/material";
import { IFRedirect } from "hrms_types";
import { FC } from "react";
import Endpoints from "../../utils/Endpoints";

const HomeView: FC<{
  list: IFRedirect[];
}> = ({ list }) => {
  return (
    <>
      {list.map(({ path, id, android, cover }: IFRedirect) => {
        console.log("====================================");
        console.log(cover);
        console.log("====================================");
        
        return (
          <Stack key={`redirect-item-${id}`} direction={"row"}>
            {!!cover && <Avatar alt={path} src={Endpoints.baseUrl + cover} />}

            <></>
            {id}
            <></>
          </Stack>
        );
      })}
    </>
  );
};

export default HomeView;
