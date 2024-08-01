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
      sx={{
        background: props.background || theme.palette.background.paper,

        borderRadius: 0,

        padding: { xs: "24px", md: "24px 10%" },
        //width: { xs: "calc(100% - 48px)", md: "80%" },
        color: props.color,
        width: { xs: "calc(100vw - 48px)", md: "calc(100vw - 20%)" },
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
