import { useStyles } from "../../styles";
import { useContext } from "react";
import { Grid } from "@mui/material";
import SystemContext from "../../context/SystemContext";

export default function Image({
  md = 4,
  xs = 12,
  src = "",
  alt = "",
  height = "100%",
  maxWidth = "100%",
  width,
  gridProps = {},
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
      }}
      md={md}
      xs={xs}
      {...gridProps}
    >
      <img
        loading="eager"
        src={src}
        alt={alt}
        style={{
          maxHeight: height,
          maxWidth: !width && maxWidth,
          width: width && width,
        }}
      />
    </Grid>
  );
}
