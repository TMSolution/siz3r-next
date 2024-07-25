export default function Hexagon({
  offset = false,
  size = 100,
  margin = 0.1,
  color = "#0d121c",
  id,
}) {
  const _margin = size * margin;
  return (
    <div
      style={{
        width: size,
        margin: _margin,
        height: size * 1.1547,
        display: "inline-block",
        fontSize: "initial",
        clipPath: `polygon(0% 25%, 0% 75%, 50% 100%, 100% 75%, 100% 25%, 50% 0%)`,
        marginBottom: `calc(${_margin}px - ${size}px * 0.2886)`,
        background: color,
        backgroundBlendMode: "overlay",
        position: "relative",
        overflow: "hidden",

        left: offset ? `calc(${size / 2}px + ${_margin}px)` : 0,
        top: -size / 2,
      }}></div>
  );
}
