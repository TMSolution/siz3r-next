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
import zIndex from "@mui/material/styles/zIndex";

export default function Hero({ dictionary }) {
  const { isMobile, theme } = useContext(SystemContext);
  return (
    <Block
      //color="black"
      background="transparent"
      style={{
        display: "flex",
        alignItems: "center",
        minHeight: "100vh",
      }}
      gridProps={{
        justifyContent: "center",
        alignItems: "stretch",
      }}>
      <Text
        md={6}
        titleSize={{ xs: 45, md: 70 }}
        textSize={25}
        title={dictionary.businessHero.title}
        text={dictionary.businessHero.description}
        gridStyle={{ zIndex: 100, paddingBottom: 48 }}
      />
      <HexagonBackground
        isMobile={isMobile}
        position={{
          xs: "linear-gradient(green, black, black)",
          md: `radial-gradient(circle at center, green, black, black)`,
        }}
        lightPos="0%"
        maskHeight={"100vh"}
      />
    </Block>
  );
}
