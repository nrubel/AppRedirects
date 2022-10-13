/** @format */

import { Box, SxProps } from "@mui/material";
import { FC } from "react";
import { theme } from "../../utils/theme";

const LazyImage: FC<{
  src?: string;
  alt: string;
  sx?: SxProps;
}> = ({ src, alt, sx }) => {
  let styles: SxProps = {
    color: "white",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    ...(sx || {}),
  };

  if (!src) {
    styles = {
      ...styles,
      backgroundColor: theme.palette.primary.main,
    };
  }

  return (
    <Box component={"object"} data={src} sx={styles}>
      {!!src ? (
        <Box
          component={"img"}
          src={src}
          alt={alt}
          loading={"lazy"}
          sx={styles}
        />
      ) : (
        alt
      )}
    </Box>
  );
};

export default LazyImage;
