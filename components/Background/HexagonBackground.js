import { Paper } from "@mui/material";

import Hexagon from "./Hexagon";
function hexToHexa(hex, alpha = 255) {
  return hex + alpha.toString(16);
}
export default function HexagonBackground({ isMobile }) {
  const size = 50;
  const height = parseInt((isMobile ? 500 : 1080) / size);
  const width = parseInt((isMobile ? 1000 : 1920) / size);
  const margin = 0.03;
  const color = "#000000";
  const fillColor = "#74368C";
  const lightPos = !isMobile && "30%";
  return (
    <Paper
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100vw",
        backgroundColor: color,
        //transition: "all 1s ease-in-out 0s",
        flexDirection: "column",
        overflow: "hidden",
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: -1,
      }}>
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          height: "100vh",
          width: "100vw",
          background: "black",
        }}
      />
      <div
        style={{
          left: lightPos,
          position: "absolute",
          //background: `radial-gradient(closest-side, rgba(100,200,100,0.1), rgba(100,100,100,0.05), transparent)`,
          background: `radial-gradient(circle at center, ${hexToHexa(
            fillColor,
            255
          )}, transparent, transparent)`,
          height: "100vh",
          width: "100vw",
          overflow: "hidden",
          opacity: 0.3,
          //filter: "blur(20px)",
        }}
      />
      <div
        style={{
          position: "relative",
          overflow: "visible",
          height: "100vh",
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
                margin={margin}
                offset={index % 2 == 1 && true}
                color={hexToHexa(color, 255)}
              />
            ))}
          </div>
        ))}
      </div>
      <div
        style={{
          left: lightPos,
          position: "absolute",
          background: `radial-gradient(circle at center, ${hexToHexa(
            fillColor,
            255
          )},${hexToHexa(fillColor, 255)},${hexToHexa(
            fillColor,
            64
          )}, transparent,transparent,transparent)`,
          height: "100vh",
          width: "100vw",
          overflow: "hidden",
          opacity: 0.3,
          //filter: "blur(10px)",
        }}
      />
    </Paper>
  );
}
