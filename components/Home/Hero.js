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
          paddingTop: { xs: "50px", md: undefined },
          minHeight: "80vh",
        },
      }}>
      <HexagonBackground isMobile={isMobile} />
      <Component
        md={4}
        xs={12}
        gridProps={{ justifyContent: "space-between", alignItems: "stretch" }}
        gridStyle={{ alignSelf: "center" }}
        customTop={
          <Box
            component={"img"}
            src={"/logo.png"}
            height={120}
            sx={{
              marginRight: "auto",
              marginLeft: { md: "0px", xs: "auto" },
            }}
          />
        }
        customBottom={
          <div style={{ display: "flex", gap: 16, width: "100%" }}>
            <Button
              size={1.3}
              variant="contained"
              style={{ whiteSpace: "unset" }}>
              {dictionary.hero.button}
            </Button>
            <Button
              size={1.3}
              color="secondary"
              variant="outlined"
              style={{ whiteSpace: "unset" }}>
              {dictionary.hero.button2}
            </Button>
          </div>
        }>
        <Text
          // subtitle={
          //   <span style={{fontFamily:"Nunito",color:"#00D278"}}>
          //     <span style={{}}>in</span> <span style={{}}>your</span>{" "}
          //     <span style={{}}>size</span>
          //   </span>
          // }
          text={dictionary.hero.description}
          titleSize={{ xs: 50, md: 100 }}
          subtitleSize={70}
          textSize={26}
          md={12}
          gridStyle={{ paddingTop: "48px", paddingBottom: "48px" }}
          textAlign="left"
          textAlignSubtitle="left"
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
          src="/phone_left.png"
          alt=""
          gridStyle={{
            alignSelf: { xs: "center", md: "end" },
            justifyContent: "center",
            display: "flex",
            height: "70vh",
            //padding: "48px",
            filter: "drop-shadow(1px 1px 60px rgba(255,255,255,0.5))",
          }}
          // height="80vh"
          //maxWidth="100%"
          //width={300}
          md={12}
          xs={0}
        />
      </Component>
    </Block>
  );
}
