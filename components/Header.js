import {
  AppBar,
  Box,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
  Paper,
  Toolbar,
} from "@mui/material";
import Button from "./Interface/Button";
import { useContext, useState } from "react";
import SystemContext from "@/context/SystemContext";
import { Menu } from "lucide-react";
import TranslationContext from "@/context/TranslationContext";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const path = usePathname();

  const { dictionary } = useContext(TranslationContext);

  const [open, setOpen] = useState(false);
  const paths = [
    { path: "/", name: dictionary.header.home },
    { path: "/business", name: dictionary.header.business },
    { path: "/contact", name: dictionary.header.contact },
    {
      path: "https://play.google.com/store",
      name: dictionary.header.downloadApp,
      variant: "contained",
      color: "primary",
    },
  ];
  return (
    <>
      <AppBar
        style={{
          background: "linear-gradient(black,black,transparent)",

          boxShadow: "none",
        }}>
        <Toolbar sx={{ padding: { md: "0 10% 0 10%", xs: "0 12px 0 12px" } }}>
          <IconButton
            onClick={() => setOpen(true)}
            size="large"
            sx={{
              position: "absolute",
              display: { md: "none", xs: "flex" },
            }}>
            <Menu />
          </IconButton>

          <Box
            component={"img"}
            src={"/logo.png"}
            height={24}
            sx={{
              marginRight: "auto",
              marginLeft: { md: "0px", xs: "auto" },
            }}
          />

          <Box sx={{ display: { xs: "none", md: "flex", gap: 8 } }}>
            {paths.map((item, index) => (
              <Link
                key={index}
                href={item.path}
                style={{ color: "inherit", textDecoration: "none" }}>
                <Button
                  color={item.color || "inherit"}
                  variant={item.variant || "outlined"}
                  style={{
                    borderColor: item.path === path ? "inherit" : "transparent",
                  }}>
                  {item.name}
                </Button>
              </Link>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer open={open} onClose={() => setOpen(false)}>
        <Paper
          style={{
            height: 56,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}>
          <img src={"/logo.png"} height={24} />
        </Paper>
        <List style={{ minWidth: 250, maxWidth: "100vw" }}>
          {paths.map((item, index) => (
            <Link
              key={index}
              href={item.path}
              style={{ color: "inherit", textDecoration: "none" }}>
              <ListItemButton
                divider
                onClick={() => setOpen(false)}
                color={item.color || "inherit"}
                selected={item.path === path}>
                <ListItemText primary={item.name} />
              </ListItemButton>
            </Link>
          ))}
        </List>
      </Drawer>
    </>
  );
}
