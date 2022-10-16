/** @format */

import { Box, SxProps } from "@mui/material";
import { FC, SyntheticEvent } from "react";
import { theme } from "../../utils/theme";

const LazyImage: FC<{
  src?: string;
  fallbackSrc?: string;
  alt: string;
  sx?: SxProps;
}> = ({ src, alt, sx, fallbackSrc }) => {
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
          onError={(e: SyntheticEvent<HTMLImageElement, Event>) => {
            e.currentTarget.onerror = null;
            e.currentTarget.src = fallbackSrc || "/flyhub.png";
          }}
        />
      ) : (
        alt
      )}
    </Box>
  );
};

export default LazyImage;
