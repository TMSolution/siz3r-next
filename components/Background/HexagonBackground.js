import { Box, Paper } from "@mui/material";

import Hexagon from "./Hexagon";
function hexToHexa(hex, alpha = 255) {
  return hex + alpha.toString(16);
}
export default function HexagonBackground({
  isMobile,
  position = {
    xs: "linear-gradient(to top ,green, black, black)",
    md: `linear-gradient(to left, green, black, black)`,
  },
  lightPos = "25%",
  maskHeight = "110vh",
}) {
  const size = 100;
  const sizeMobile = 50;
  const height = parseInt(2000 / size);
  const width = parseInt(1920 / size);
  const margin = 0.03;
  const color = "#000000";
  const fillColor = "#74368C";

  return (
    <Paper
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: maskHeight,
        width: "100vw",
        backgroundColor: color,
        //transition: "all 1s ease-in-out 0s",
        flexDirection: "column",
        overflow: "hidden",
        position: "absolute",
        top: 0,
        left: 0,
        //  zIndex: -1,
        maskImage: `linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0) 95%)`,
      }}>
      <Box
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          height: maskHeight,
          width: "100vw",
          opacity: 0.1,
          background:
            "linear-gradient(#3C1992 1%, transparent, transparent, black 99%)",
          zIndex: 1,
        }}
      />
      <Box
        sx={{
          left: { xs: undefined, md: lightPos },
          position: "absolute",
          //background: `radial-gradient(closest-side, rgba(100,200,100,0.1), rgba(100,100,100,0.05), transparent)`,
          background: `radial-gradient(circle at center, ${hexToHexa(
            fillColor,
            255
          )}, black)`,
          height: maskHeight,
          width: "100vw",
          overflow: "hidden",
          opacity: 1,
          //filter: "blur(20px)",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          height: maskHeight,
          width: "100vw",
          opacity: 1,

          background: position,
        }}
      />
      <Box
        sx={{
          left: { xs: undefined, md: lightPos },
          position: "absolute",
          background: `radial-gradient(circle at center, ${hexToHexa(
            fillColor,
            255
          )},${hexToHexa(fillColor, 255)},${hexToHexa(
            fillColor,
            64
          )}, black, black, black)`,
          height: maskHeight,
          width: "100vw",
          overflow: "hidden",
          opacity: 0.3,
          //filter: "blur(10px)",
        }}
      />
      <div
        style={{
          position: "relative",
          overflow: "visible",
          height: maskHeight,
          width: "100vw",
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
        }}>
        {[...Array(height)].map((_, index) => (
          <div style={{ display: "flex" }} key={index}>
            {[...Array(width)].map((__, _index) => (
              <Hexagon
                key={index + "-" + _index}
                id={index + "-" + _index}
                size={size}
                sizeMobile={sizeMobile}
                margin={margin}
                offset={index % 2 == 1 && true}
                color={hexToHexa(color, 255)}
              />
            ))}
          </div>
        ))}
      </div>
    </Paper>
  );
}
