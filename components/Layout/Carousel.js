import { useStyles } from "../../styles";
import { useContext, useState, Fragment } from "react";
import { Grid, IconButton, MobileStepper } from "@mui/material";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";
import { Carousel } from "react-responsive-carousel";
import SystemContext from "../../context/SystemContext";
export default function Text({
  md = 4,
  xs = 12,
  items = [],
  autoPlay = false,
  hideStepper = false,
  children = null,
  slidesInView = 1,
  gridProps = {},
  steps = 0,
}) {
  const classes = useStyles();
  const [sliderValue, setSliderValue] = useState(0);
  const { isMobile } = useContext(SystemContext);
  return (
    <Grid
      item
      className={classes.gridPanel}
      style={{
        alignItems: "center",
        alignSelf: "center",
        flexDirection: "column",
      }}
      md={md}
      xs={xs}>
      <div className={classes.gridPanel}>
        {!autoPlay && !isMobile && (
          <IconButton
            size={"large"}
            onClick={() => setSliderValue(sliderValue - 1)}>
            <KeyboardArrowLeft />
          </IconButton>
        )}

        <Carousel
          className={classes.gridPanel}
          showArrows={false}
          showStatus={false}
          showIndicators={false}
          showThumbs={false}
          emulateTouch={false}
          infiniteLoop
          centerMode={!isMobile}
          autoPlay={autoPlay}
          selectedItem={sliderValue}
          centerSlidePercentage={isMobile ? 100 : 100 / slidesInView}
          onChange={(value) => setSliderValue(value)}>
          {items.map((item, index) => (
            <div style={{ maxHeight: 200 }} key={index}>
              {item}
            </div>
          ))}
          {children}
        </Carousel>
        {!autoPlay && !isMobile && (
          <IconButton
            size={"large"}
            onClick={() => setSliderValue(sliderValue + 1)}>
            <KeyboardArrowRight />
          </IconButton>
        )}
      </div>
      {!hideStepper && steps && (
        <MobileStepper
          steps={steps}
          position="static"
          variant="dots"
          activeStep={sliderValue}
          style={{ backgroundColor: "transparent" }}
          classes={{
            dots: classes.stepper,
            dot: classes.stepperDot,
            dotActive: classes.stepperDotActive,
          }}
        />
      )}
    </Grid>
  );
}
