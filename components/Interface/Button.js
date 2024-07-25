import { Button as MuiButton } from "@mui/material";

export default function Button({ children, color, variant }) {
  return (
    <MuiButton
      color={color}
      variant={variant}
      style={{ textTransform: "unset" }}>
      {children}
    </MuiButton>
  );
}
