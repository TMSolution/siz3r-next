import { useContext } from "react";
import HexagonBackground from "../Background/HexagonBackground";
import Button from "../Interface/Button";
import Block from "../Layout/Block";
import Component from "../Layout/Component";
import Image from "../Layout/Image";
import Text from "../Layout/Text";
import SystemContext from "@/context/SystemContext";
import { Android, PhoneAndroid } from "@mui/icons-material";
import { Play } from "lucide-react";
import { Box } from "@mui/material";

export default function Hero({ dictionary }) {
  const { isMobile, theme } = useContext(SystemContext);
  return (
    <Block
      background="transparent"
      style={{ minHeight: "100vh", display: "flex", alignItems: "center" }}
      gridProps={{
        justifyContent: { xs: "center", md: "space-between" },
        alignItems: "stretch",
        sx: {
          paddingTop: { xs: "50px", md: 0 },
          minHeight: "100vh",
        },
      }}>
      <HexagonBackground isMobile={isMobile} />
      <Component
        md={6}
        xs={12}
        gridProps={{ justifyContent: "space-between", alignItems: "stretch" }}
        gridStyle={{ alignSelf: "center", paddingBottom: "24px", zIndex: 100 }}
        customTop={
          <Box
            component={"img"}
            src={"/logo.png"}
            height={{ md: "95px", xs: "70px" }}
            sx={{
              marginRight: "auto",
              marginLeft: { md: "0px", xs: "auto" },
            }}
          />
        }
        customBottom={
          <Box
            sx={{
              display: "flex",
              gap: 2,
              width: { md: "100%" },
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
        }>
        <Text
          //title={dictionary.hero.title}
          text={dictionary.hero.description}
          color="white"
          titleSize={{ xs: 50, md: 70 }}
          textSize={25}
          gridProps={{ lg: 8, md: 12, sm: 12 }}
          gridStyle={{ paddingTop: "48px", paddingBottom: "48px" }}
          textAlign={{ xs: "center", md: "left" }}
          textAlignTitle={{ xs: "center", md: "left" }}
        />
      </Component>
      <Component
        md={6}
        xs={0}
        gridStyle={{
          //height: "40vh",
          alignSelf: "center",
          height: { xs: undefined, md: "80vh" },
        }}>
        <Image
          src="/phone2.png"
          alt=""
          gridStyle={{
            alignSelf: { xs: "center", md: "end" },
            justifyContent: "center",
            display: "flex",
            height: "70vh",
            padding: { xs: "48px", md: "0px" },
            filter: {
              xs: "drop-shadow(1px 1px 50px rgba(255,255,255,0.5))",
              md: "drop-shadow(1px 1px 60px rgba(255,255,255,0.5))",
            },
            maxWidth: "100%",
          }}
          // height="80vh"
          maxWidth="100%"
          //width={300}
          md={12}
          xs={0}
        />
      </Component>
    </Block>
  );
}
