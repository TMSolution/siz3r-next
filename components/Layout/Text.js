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
  subtitleSize = 31,
  textSize = 16,
  textAlign = "center",
  textAlignSubtitle = "center",
  textAlignTitle = "center",
  gridProps = {},
  gridStyle = {},
  color = "white",
  gutter = true,
}) {
  const classes = useStyles();
  const { isMobile } = useContext(SystemContext);
  return (
    <Grid
      item
      className={classes.gridPanel}
      style={{
        color: "inherit",
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
          gutterBottom={gutter}
          className={classes.textPanelTitle}
          sx={{
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
          sx={{
            textAlign: textAlignSubtitle,
            fontSize: subtitleSize,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexWrap: "wrap",
            lineHeight:1.1,
            //fontWeight: "600",
            gap: 1,
            marginBottom: 1,
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
              sx={{
                textAlign: textAlign,
                fontSize: textSize,
                whiteSpace: "pre-line",
                //width: "100%",
                color: color,
              }}>
              {textItem}
            </Typography>
          ))
        ) : (
          <Typography
            className={classes.textPanelContent}
            sx={{
              textAlign: textAlign,
              fontSize: textSize,
              whiteSpace: "pre-line",
              color: color,
            }}>
            {text}
          </Typography>
        ))}
    </Grid>
  );
}
