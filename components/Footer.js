import {
  Box,
  Divider,
  Grid,
  IconButton,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import Block from "./Layout/Block";
import Component from "./Layout/Component";
import Image from "./Layout/Image";
import {
  Facebook,
  Instagram,
  Twitter,
  YouTube,
  LinkedIn,
  Language,
} from "@mui/icons-material";
import { ArrowDown, ChevronDown, Play } from "lucide-react";
import Link from "next/link";
import Button from "./Interface/Button";
import TranslationContext from "@/context/TranslationContext";
import { useContext } from "react";
const languages = { pl: "Polski", en: "English" };
export default function Footer({ isMobile }) {
  const { dictionary, lang, changeLanguage } = useContext(TranslationContext);
  const socials = [
    { icon: Facebook, href: "https://facebook.com" },
    { icon: Instagram, href: "https://instagram.com" },
    { icon: Twitter, href: "https://twitter.com" },
    { icon: LinkedIn, href: "https://linkedin.com" },
    { icon: YouTube, href: "https://youtube.com" },
  ];
  const links = [
    { label: dictionary.footer.home, href: "/" },
    { label: dictionary.footer.business, href: "/business" },
    { label: dictionary.footer.contact, href: "/contact" },
  ];
  return (
    <Block
      style={{
        display: "flex",
        alignItems: "flex-start",

        position: "relative",
      }}
      gridProps={{ spacing: 3, paddingTop: 3, paddingBottom: 0 }}>
      <Image
        md={12}
        xs={12}
        src="/logo.png"
        style={{ maxWidth: 250, alignSelf: "center", paddingBottom: 1 }}
        gridStyle={{ display: "flex" }}
      />

      <Component
        md={12}
        xs={12}
        gridStyle={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          gap: 2,
        }}>
        <Box
          sx={{
            display: "flex",
            gap: 2,
            width: "100%",
            justifyContent: "center",
            alignSelf: { md: "center", xs: "center" },
            alignItems: { md: "center", xs: "center" },
            flexDirection: { md: "row", xs: "column" },
          }}>
          <Button
            variant="contained"
            style={{
              whiteSpace: "nowrap",
              padding: 0,
              backgroundColor: "transparent",
            }}>
            <img height={58} src="/google-play-badge.png" />
            {/* Pobierz z google store */}
          </Button>
          <Button
            variant="contained"
            style={{
              whiteSpace: "nowrap",
              padding: 0,
              width: "max-content",
              backgroundColor: "transparent",
            }}>
            <Box
              component={"img"}
              src="/apple-store-badge.svg"
              sx={{ height: { md: 58, xs: 66 } }}
            />

            {/* Pobierz z google store */}
          </Button>
        </Box>
      </Component>

      <Component
        md={12}
        xs={12}
        gridStyle={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          gap: 2,
        }}>
        {socials.map((social, index) => (
          <a href={social.href}>
            <IconButton size="small" key={index}>
              <social.icon sx={{ fontSize: { xs: 35, md: 45 } }} />
            </IconButton>
          </a>
        ))}
      </Component>
      <Component
        md={12}
        xs={12}
        gridStyle={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          gap: 2,
        }}>
        {links.map((link, index) => (
          <Link href={link.href} style={{ color: "inherit" }}>
            <Button
              key={index}
              variant="text"
              color="inherit"
              style={{ fontSize: 16, opacity: 0.8 }}>
              {link.label}
            </Button>
          </Link>
        ))}
      </Component>
      <Component
        xs={12}
        md={12}
        gridStyle={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
        }}>
        <Select
          onChange={(e) => {
            console.log(e.target.value);
            changeLanguage(e.target.value).then(() => {
              window.location.replace(window.location.href);
            });
          }}
          value={lang}
          size="small"
          sx={{
            width: { xs: "100%", md: "unset" },
            ".MuiSelect-select": {
              paddingLeft: { xs: undefined, md: 1 },
              paddingRight: { xs: undefined, md: 1 },
            },
          }}
          renderValue={(value) => (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}>
              <Language />
              <Typography style={{ paddingLeft: 8, paddingRight: 4 }}>
                {languages[value]}
              </Typography>
            </div>
          )}>
          {Object.entries(languages).map((item) => (
            <MenuItem key={item[0]} value={item[0]}>
              {item[1]}
            </MenuItem>
          ))}
        </Select>
      </Component>
      <Grid xs={12} container item direction={"row"}>
        <Divider style={{ width: "100%" }} />
        <div
          style={{
            position: "relative",
            top: 12,
            display: "flex",
            gap: 24,
            fontSize: 12,
            opacity: 0.7,

            justifyContent: "center",
            width: "100%",
          }}>
          <Link style={{ color: "unset", textDecoration: "none" }} href={"/"}>
            {dictionary.footer.terms}
          </Link>
          <Link
            prefetch={false}
            style={{ color: "unset", textDecoration: "none" }}
            href={"/"}>
            {dictionary.footer.privacyPolicy}
          </Link>
        </div>
      </Grid>
    </Block>
  );
}
