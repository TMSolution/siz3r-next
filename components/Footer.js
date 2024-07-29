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
const languages = { pl: "Polski" };
export default function Footer({ isMobile }) {
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

        //margin: isMobile ? "0 24px 0 24px" : "0 10% 0 10%",
        position: "relative",
        left: !isMobile ? "-10vw" : "-24px",
        width: isMobile ? "calc(100vw - 48px)" : "calc(100vw - (20% + 48px))",
        padding: isMobile ? "24px" : "24px calc(10% + 24px)",
      }}
      gridProps={{ spacing: 2 }}>
      <Grid
        md={3}
        xs={12}
        container
        item
        justifyContent={isMobile && "center"}
        spacing={2}>
        <Image
          src="/logo.png"
          xs={12}
          md={6}
          height={"32px"}
          gridStyle={{ display: isMobile && "flex" }}
        />

        <Text
          text={
            "Siz3r to innowacyjna platforma technologiczna wspierająca zakupy odzieżowe na platformach e-commerce."
          }
          xs={11}
          md={10}
          textAlign={isMobile ? "justify" : "left"}
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
          style={{ display: isMobile && "flex" }}>
          <Button
            variant="contained"
            style={{
              padding: 0,
              margin: "auto",
            }}>
            <img height={52} src="/google-play-badge.png" />
            {/* Pobierz z google store */}
          </Button>
        </Grid>
        <Grid item xs={12} md={12}>
          <Select
            fullWidth={isMobile}
            value="pl"
            size="small"
            sx={{
              ".MuiSelect-select": {
                paddingLeft: isMobile ? undefined : 1,
                paddingRight: isMobile ? undefined : 1,
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
            {Object.keys(languages).map((item) => (
              <MenuItem value={item}>Polski</MenuItem>
            ))}
          </Select>
        </Grid>

        {/* <Grid
          xs={12}
          md={6}
          direction={"column"}
          style={{ display: "flex", paddingTop: !isMobile && 16 }}
          justifyContent={"center"}
          alignItems={"center"}>
          <Image
            src="/qr-code.png"
            xs={12}
            md={6}
            width={"100%"}
            maxWidth="200px"
            gridStyle={{ display: isMobile && "flex" }}
          />
          <Text
            gridStyle={{ alignSelf: "center" }}
            xs={12}
            md={6}
            text="Zeskanuj kod by pobrać aplikację!"
          />
        </Grid> */}
      </Grid>

      <Grid md={3} xs={12} container item direction={"column"} spacing={2}>
        <LinkList title={"Technologia"}>
          {["Lorem", "Ipsum", "Dolor", "Amet"].map((item) => (
            <Grid item>
              <Link
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
        <LinkList title={"Business"}>
          {["Lorem", "Ipsum", "Dolor", "Amet"].map((item) => (
            <Grid item>
              <Link
                style={{ color: "unset", textDecoration: "none", opacity: 0.7 }}
                href={"/"}>
                {item}
              </Link>
            </Grid>
          ))}
        </LinkList>
      </Grid>
      <Grid md={3} xs={12} container item direction={"column"} spacing={2}>
        <LinkList title={"Products"}>
          {["Lorem", "Ipsum", "Dolor", "Amet"].map((item) => (
            <Grid item>
              <Link
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
            Regulamin
          </Link>
          <Link style={{ color: "unset", textDecoration: "none" }} href={"/"}>
            Polityka prywatności
          </Link>
        </div>
      </Grid>
    </Block>
  );
}
