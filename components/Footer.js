import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
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
import Text from "./Layout/Text";
import {
  ArrowDownward,
  Facebook,
  Instagram,
  Language,
  Padding,
  Twitter,
} from "@mui/icons-material";
import { ArrowDown, ChevronDown, Linkedin, Play } from "lucide-react";
import Link from "next/link";
import Button from "./Interface/Button";
import TranslationContext from "@/context/TranslationContext";
import { useContext } from "react";
const languages = { pl: "Polski", en: "English" };
export default function Footer({ isMobile }) {
  const { dictionary, lang, changeLanguage } = useContext(TranslationContext);
  const LinkList = ({ children, title }) => {
    return (
      <Accordion
        expanded={isMobile ? undefined : true}
        disabled={!isMobile}
        style={{ background: "transparent", boxShadow: "none" }}>
        <AccordionSummary
          style={{ opacity: 1, paddingRight: 7 }}
          expandIcon={isMobile && <ChevronDown />}>
          <Typography variant="h5">{title}</Typography>
        </AccordionSummary>
        <AccordionDetails
          style={{
            gap: 12,
            display: "flex",
            flexDirection: "column",
            paddingTop: 0,
          }}>
          {children}
        </AccordionDetails>
      </Accordion>
    );
  };

  return (
    <Block
      style={{
        display: "flex",
        alignItems: "flex-start",

        position: "relative",
        left: { xs: "-24px", md: "-10vw" },
        width: {
          xs: "calc(100vw - 48px)",
          md: "calc(100vw - (20% + 36px + 36px))",
        },
        padding: { xs: "24px", md: "24px calc(10% + 36px)" },
      }}
      gridProps={{ spacing: 2 }}>
      <Grid
        md={3}
        xs={12}
        container
        item
        //justifyContent={{ xs: "center", md: undefined }}
        spacing={2}>
        <Image
          src="/logo.png"
          xs={12}
          md={6}
          height={"32px"}
          gridStyle={{
            display: { xs: "flex", md: undefined },
          }}
          style={{ alignSelf: { xs: undefined, md: "baseline" } }}
        />

        <Text
          text={dictionary.footer.description}
          xs={12}
          md={10}
          textAlign={{ xs: "justify", md: "left" }}
        />

        <Grid
          item
          container
          spacing={2}
          // direction={"row"}
          justifyContent={isMobile && "center"}
          alignItems={isMobile ? "center" : "space-between"}>
          <Grid item>
            <IconButton>
              <Facebook />
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton>
              <Instagram />
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton>
              <Linkedin />
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton>
              <Twitter />
            </IconButton>
          </Grid>
        </Grid>
        <Grid
          item
          //md={6}
          xs={12}
          justifyContent={"center"}
          alignItems={"center"}
          sx={{ display: { xs: "flex", md: "unset" }, paddingTop: 12 }}>
          <Button
            variant="contained"
            style={{
              padding: 0,
              margin: "auto",
            }}>
            <img height={58} src="/google-play-badge.png" />
            {/* Pobierz z google store */}
          </Button>
        </Grid>
        <Grid item xs={12} md={12}>
          <Select
            onChange={(e) => {
              console.log(e.target.value);
              changeLanguage(e.target.value).then(() => {
                // window.location.replace(window.location.href);
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
        </Grid>
      </Grid>

      <Grid md={3} xs={12} container item direction={"column"} spacing={2}>
        <LinkList title={dictionary.footer.technology}>
          {["Lorem", "Ipsum", "Dolor", "Amet"].map((item) => (
            <Grid item key={item}>
              <Link
                prefetch={false}
                style={{
                  color: "unset",
                  textDecoration: "none",
                  opacity: 0.7,
                }}
                href={"/"}>
                {item}
              </Link>
            </Grid>
          ))}
        </LinkList>
      </Grid>
      <Grid md={3} xs={12} container item direction={"column"} spacing={2}>
        <LinkList title={dictionary.footer.business}>
          {["Lorem", "Ipsum", "Dolor", "Amet"].map((item) => (
            <Grid item key={item}>
              <Link
                prefetch={false}
                style={{ color: "unset", textDecoration: "none", opacity: 0.7 }}
                href={"/"}>
                {item}
              </Link>
            </Grid>
          ))}
        </LinkList>
      </Grid>
      <Grid md={3} xs={12} container item direction={"column"} spacing={2}>
        <LinkList title={dictionary.footer.products}>
          {["Lorem", "Ipsum", "Dolor", "Amet"].map((item) => (
            <Grid item key={item}>
              <Link
                prefetch={false}
                style={{ color: "unset", textDecoration: "none", opacity: 0.7 }}
                href={"/"}>
                {item}
              </Link>
            </Grid>
          ))}
        </LinkList>
      </Grid>
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
