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
        gridStyle={{ alignSelf: "center" }}
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
            }}>
            <Button
              size={1.3}
              variant="contained"
              style={{ whiteSpace: "nowrap" }}>
              {dictionary.hero.button}
            </Button>
            <Button
              size={1.3}
              color="secondary"
              variant="outlined"
              style={{ whiteSpace: "nowrap" }}>
              {dictionary.hero.button2}
            </Button>
          </Box>
        }>
        <Text
          //title={dictionary.hero.title}
          text={dictionary.hero.description}
          color="white"
          titleSize={{ xs: 50, md: 70 }}
          textSize={23}
          gridProps={{ lg: 8, md: 12, sm: 12 }}
          gridStyle={{ paddingTop: "48px", paddingBottom: "48px" }}
          textAlign="left"
          textAlignTitle="left"
        />
      </Component>
      <Component
        md={6}
        xs={0}
        gridStyle={{
          //height: "40vh",
          alignSelf: "center",
          height: "80vh",
        }}>
        <Image
          src="/phone.png"
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
