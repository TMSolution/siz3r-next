import { Button as MuiButton } from "@mui/material";

export default function Button({ children, color, variant, size }) {
  return (
    <MuiButton
      color={color}
      variant={variant}
      sx={{
        textTransform: "unset",
        py: size,
        px: size * 2.5,
        fontSize: size * 8 * 1.6,
        borderRadius:2
      }}>
      {children}
    </MuiButton>
  );
}
