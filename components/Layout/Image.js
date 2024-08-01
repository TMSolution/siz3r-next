import { useStyles } from "../../styles";
import { useContext } from "react";
import { Box, Grid } from "@mui/material";
import SystemContext from "../../context/SystemContext";

export default function Image({
  md = 4,
  xs = 12,
  src = "",
  alt = "",
  height,
  maxHeight = "100%",
  maxWidth = "100%",
  width,
  gridProps = {},
  gridStyle = {},
  style = {},
}) {
  const classes = useStyles();
  const isMobile = useContext(SystemContext);
  return (
    <Grid
      item
      className={classes.gridPanel}
      sx={{
        alignItems: "center",
        alignSelf: "center",
        flexDirection: isMobile && "column",
        ...gridStyle,
      }}
      md={md}
      xs={xs}
      {...gridProps}>
      <Box
        component="img"
        loading="eager"
        src={src}
        alt={alt}
        sx={{
          borderRadius: 4,
          maxHeight: maxHeight,
          //maxWidth: !width && maxWidth,
          width: width && width,
          height: height && height,
          ...style, //opacity:0.1
        }}
      />
    </Grid>
  );
}
