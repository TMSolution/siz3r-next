import { useStyles } from "../../styles";
import { useContext } from "react";
import { Grid, Typography } from "@mui/material";
import SystemContext from "../../context/SystemContext";
export default function Text({
  md = 4,
  xs = 12,
  title = null,
  subtitle = null,
  text = null,
  icon,
  titleSize = 30,
  subtitleSize = 24,
  textSize = 16,
  textAlign = "center",
  textAlignSubtitle = "center",
  textAlignTitle = "center",
  gridProps = {},
  gridStyle = {},
}) {
  const classes = useStyles();
  const { isMobile } = useContext(SystemContext);
  return (
    <Grid
      item
      className={classes.gridPanel}
      style={{
        alignItems: (!icon || isMobile) && "center",
        alignSelf: "start",
        flexDirection: (!icon || isMobile) && "column",
        ...gridStyle,
      }}
      md={md}
      xs={xs}
      {...gridProps}>
      {title && (
        <Typography
          gutterBottom
          className={classes.textPanelTitle}
          style={{
            textAlign: textAlignTitle,
            fontSize: titleSize,
            fontFamily: "Nunito",
            fontWeight: "600",
          }}>
          {title}
        </Typography>
      )}
      {subtitle && (
        <Typography
          className={classes.textPanelSubtitle}
          style={{
            textAlign: textAlignSubtitle,
            fontSize: subtitleSize,
          }}>
          {subtitle}
        </Typography>
      )}

      {text &&
        (Array.isArray(text) ? (
          text.map((textItem, textItemIndex) => (
            <Typography
              key={textItemIndex}
              className={classes.textPanelContent}
              style={{
                textAlign: textAlign,
                fontSize: textSize,
                //width: "100%",
                color: "#BDBDBC",
              }}>
              {textItem}
            </Typography>
          ))
        ) : (
          <Typography
            className={classes.textPanelContent}
            style={{
              textAlign: textAlign,
              fontSize: textSize,
              color: "#BDBDBC",
            }}>
            {text}
          </Typography>
        ))}
    </Grid>
  );
}
