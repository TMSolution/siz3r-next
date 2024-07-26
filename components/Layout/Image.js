import { useStyles } from "../../styles";
import { useContext } from "react";
import { Grid } from "@mui/material";
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
}) {
  const classes = useStyles();
  const isMobile = useContext(SystemContext);
  return (
    <Grid
      item
      className={classes.gridPanel}
      style={{
        alignItems: "center",
        alignSelf: "center",
        flexDirection: isMobile && "column",
        ...gridStyle,
      }}
      md={md}
      xs={xs}
      {...gridProps}>
      <img
        loading="eager"
        src={src}
        alt={alt}
        style={{
          maxHeight: maxHeight,
          maxWidth: !width && maxWidth,
          width: width && width,
          height: height && height,//opacity:0.1
        }}
      />
    </Grid>
  );
}
