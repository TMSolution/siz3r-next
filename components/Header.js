import { AppBar, IconButton, Toolbar } from "@mui/material";
import Button from "./Interface/Button";
import { useContext } from "react";
import SystemContext from "@/context/SystemContext";
import { Menu } from "lucide-react";

export default function Header() {
  const { isMobile, theme } = useContext(SystemContext);
  return (
    <>
      <AppBar
        style={{
          background: "linear-gradient(black,black,transparent)",

          boxShadow: "none",
        }}>
        <Toolbar
          style={{ padding: isMobile ? "0 12px 0 12px" : "0 10% 0 10%" }}>
          <IconButton size="large" style={{ marginRight: 12 }}>
            <Menu />
          </IconButton>
          <img src={"/logo.png"} height={24} style={{ marginRight: "auto" }} />
          {!isMobile && (
            <div style={{ display: "flex", gap: 16 }}>
              <Button color="inherit">Home</Button>
              <Button color="inherit">About</Button>
              <Button color="inherit">Products</Button>
              <Button color="inherit">Contact</Button>
              <Button variant="contained">Try now</Button>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
}
