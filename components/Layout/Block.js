import SystemContext from "@/context/SystemContext";
import { useStyles } from "../../styles";
import { Paper, Grid } from "@mui/material";
import clsx from "clsx";
import { useContext } from "react";
export default function Block(props) {
  const classes = useStyles();
  const { theme } = useContext(SystemContext);
  return (
    <Paper
      className={clsx(classes.heroPanel, props.className && props.className)}
      style={{
        backgroundColor: props.background || theme.palette.background.paper,
        borderRadius: 0,
        backgroundImage: "unset",
       // border:"1px solid gray",
        // color: props.color || theme.palette.primary.contrastText,
        ...(props.style || {}),
      }}>
      <Grid
        container
        // spacing={2}
        justifyContent={"center"}
        alignItems={"flex-start"}
        className={classes.systemWidth}
        {...(props.gridProps || {})}>
        {props.children}
      </Grid>
    </Paper>
  );
}
