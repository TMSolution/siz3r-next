import { useStyles } from "../../styles";
import { useContext } from "react";
import { Grid } from "@mui/material";
import mobileContext from "../../context/SystemContext";
export default function Component({
  md = 4,
  xs = 12,
  children,
  gridProps = {},
  gridStyle = {},
  customTop,
  customBottom,
}) {
  const classes = useStyles();
  const isMobile = useContext(mobileContext);
  return (
    <Grid
      
      container item
      className={classes.gridPanel}
      style={{
        display: "flex",
        alignItems: "center",
        alignSelf: "start",
        flexDirection: "column",
        ...gridStyle,
      }}
      md={md}
      xs={xs}
      {...gridProps}>
      {customTop}
      {children}
      {customBottom}
    </Grid>
  );
}
