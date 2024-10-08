import { Button as MuiButton } from "@mui/material";

export default function Button(props) {
  return (
    <MuiButton
      {...props}
      size="large"
      sx={{
        color: props.color === "secondary" && "white",
        textTransform: "unset",
        py: props?.size || undefined,
        px: props?.size ? props.size * 2.5 : undefined,
        fontSize: props?.size ? props.size * 8 * 1.6 : undefined,
        borderRadius: 2,
        whiteSpace: "nowrap",
        boxShadow:"none",
        ...(props?.style || {}),
      }}>
      {props?.children}
    </MuiButton>
  );
}
