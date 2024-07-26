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

export default function Hero() {
  const { isMobile, theme } = useContext(SystemContext);
  return (
    <Block
      background="transparent"
      style={{ minHeight: "100vh", display: "flex", alignItems: "center" }}
      gridProps={{
        justifyContent: isMobile ? "center" : "space-between",
        alignItems: "stretch",
        style: {
          paddingTop: isMobile && "50px",
          minHeight: "80vh",
        },
      }}>
      <HexagonBackground isMobile={isMobile} />
      <Component
        md={4}
        xs={12}
        gridProps={{ justifyContent: "space-between", alignItems: "stretch" }}
        gridStyle={{ alignSelf: "center" }}
        customBottom={
          <div style={{ display: "flex", gap: 16, width: "100%" }}>
            <Button size={1.3} variant="contained">
              Pobierz aplikację 
            </Button>
            <Button size={1.3} color="secondary" variant="outlined">
              Learn more
            </Button>
          </div>
        }>
        <Text
          title={"In your size"}
          text={
            "Siz3r to innowacyjna platforma technologiczna wspierająca zakupy odzieżowe na platformach e-commerce."
          }
          titleSize={isMobile ? 50 : 70}
          textSize={23}
          md={12}
          gridStyle={{ paddingTop: 48, paddingBottom: 48 }}
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
            alignSelf: "end",
            justifyContent: "center",
            display: "flex",
            height: "70vh",
            padding: 48,
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
