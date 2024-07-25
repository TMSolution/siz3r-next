import { AppBar, Toolbar } from "@mui/material";
import Button from "./Interface/Button";

export default function Header() {
  return (
    <>
      <AppBar style={{ background: "transparent",boxShadow:"none" }}>
        <Toolbar style={{ padding: "0 10% 0 10%" }}>
          <img src={"/logo.png"} height={24} style={{ marginRight: "auto" }} />
          <div style={{ display: "flex", gap: 16 }}>
            <Button color="inherit">Home</Button>
            <Button color="inherit">About</Button>
            <Button color="inherit">Products</Button>
            <Button color="inherit">Contact</Button>
            <Button variant="contained">Try now</Button>
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
}
