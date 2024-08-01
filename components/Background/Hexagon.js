import { Box } from "@mui/material";

export default function Hexagon({
  offset = false,
  size = 100,
  sizeMobile = 100,
  margin = 0.1,
  color = "#0d121c",
  id,
}) {
  const _margin = size * margin;
  return (
    <Box
      sx={{
        width: { xs: sizeMobile, md: size },
        margin: _margin + "px",
        height: { xs: sizeMobile * 1.1547, md: size * 1.1547 },
        display: "inline-block",
        fontSize: "initial",
        clipPath: `polygon(0% 25%, 0% 75%, 50% 100%, 100% 75%, 100% 25%, 50% 0%)`,
        marginBottom: {
          xs: `calc(${_margin}px - ${sizeMobile}px * 0.2886)`,
          md: `calc(${_margin}px - ${size}px * 0.2886)`,
        },
        background: color,
        backgroundBlendMode: "overlay",
        position: "relative",
        overflow: "hidden",

        left: {
          xs: offset ? `calc(${sizeMobile / 2}px + ${_margin}px)` : 0,
          md: offset ? `calc(${size / 2}px + ${_margin}px)` : 0,
        },
        top: { xs: -sizeMobile / 2, md: -size / 2 },
      }}></Box>
  );
}
