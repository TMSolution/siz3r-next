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
import { fontGrid } from "@mui/material/styles/cssUtils";

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
      <Component
        md={6}
        customBottom={
          <Box
            sx={{
              display: "flex",
              gap: 2,
              width: { md: "100%" },
              alignSelf: { md: "center", xs: "center" },
              alignItems: { md: "center", xs: "center" },
              flexDirection: { md: "row", xs: "column" },
              justifyContent: { md: "center", xs: "center" },
              zIndex: 100,
            }}>
            <Button
              size={1.3}
              variant="contained"
              color="secondary"
              style={{
                whiteSpace: "nowrap",
                fontSize: 21,
                width: "max-content",
              }}>
              Zarejestruj się już teraz!
              {/* Pobierz z google store */}
            </Button>
          </Box>
        }>
        <Text
          md={12}
          titleSize={{ xs: 45, md: 70 }}
          textSize={25}
          title={dictionary.businessHero.title}
          text={dictionary.businessHero.description}
          gridStyle={{ zIndex: 100, paddingBottom: 48 }}
        />
      </Component>

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
