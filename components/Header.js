import {
  AppBar,
  Box,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
  Paper,
  Slide,
  Toolbar,
} from "@mui/material";
import Button from "./Interface/Button";
import { useContext, useEffect, useState } from "react";
import SystemContext from "@/context/SystemContext";
import { Menu } from "lucide-react";
import TranslationContext from "@/context/TranslationContext";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const path = usePathname();

  const { dictionary } = useContext(TranslationContext);
  const [visible, setVisible] = useState(false);
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
  useEffect(() => {
    document.addEventListener("scroll", (e) => {
      if (window.scrollY > 0) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    });
  }, []);
  return (
    <>
      <AppBar
        style={{
          background: visible
            ? "linear-gradient(rgba(0,0,0,0.7), transparent)"
            : "transparent",
          width: "100vw",
          boxShadow: "none",
          flexDirection: "row",
        }}>
        <IconButton
          onClick={() => setOpen(true)}
          size="large"
          sx={{
            position: "fixed",
            left: 16,top:7,
            display: { md: "none", xs: "flex" },
          }}>
          <Menu />
        </IconButton>
        <Toolbar
          sx={{
            padding: { md: "0 calc(10% + 17px)", xs: "0 12px 0 12px" },
            width: "100%",
          }}>
          <Slide direction="down" in={visible}>
            <Box
              component={"img"}
              src={"/logo.png"}
              height={24}
              sx={{
                marginRight: "auto",
                marginLeft: { md: "0px", xs: "auto" },
              }}
            />
          </Slide>
          <Box
            sx={{
              display: { xs: "none", md: "flex", gap: 8 },
              marginLeft: "auto",
            }}>
            {paths.map((item, index) => (
              <Link
                prefetch={false}
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
              prefetch={false}
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
