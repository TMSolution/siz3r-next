"use client";
import Block from "@/components/Layout/Block";
import Text from "@/components/Layout/Text";
import Image from "@/components/Layout/Image";
import Carousel from "@/components/Layout/NewCarousel";
import Component from "@/components/Layout/Component";
import { useContext } from "react";
import SystemContext from "@/context/SystemContext";
import { Grid } from "@mui/material";
export default function Home() {
  const { isMobile, theme } = useContext(SystemContext);
  return (
    <main style={{ display: "flex", flexDirection: "column" }}>
      <Block background={theme.palette.primary.main} color="#fff" style={{}}>
        <Component
          md={4}
          xs={12}
          gridProps={{}}
          gridStyle={{ padding: 24 }}
          customTop={"Element górny"}
          customBottom={"Element dolny"}>
          <Text
            title={"Tytuł"}
            text={"Tekst"}
            subtitle={"Podtytuł"}
            textAlign="center"
            textAlignTitle="center"
            textAlignSubtitle="center"
            titleSize={30}
            subtitleSize={24}
            textSize={16}
            gridStyle={{}}
            gridProps={{}}
            icon={false}
            md={12}
            xs={12}
          />
        </Component>
        <Component
          md={4}
          customTop={"Element górny"}
          customBottom={"Element dolny"}>
          <Image
            src="https://new.tmsolution.pl/wp-content/uploads/2016/11/saving-money.png"
            alt=""
            height="100%"
            maxWidth="100%"
            width={"100%"}
            gridProps={{}}
            md={12}
            xs={12}
          />
        </Component>
      </Block>
      <Block background={theme.palette.secondary.main} color="#fff" style={{}}>
        <Component
          md={4}
          customTop={"Element górny"}
          customBottom={"Element dolny"}>
          <Text title={"Tytuł"} text={"Tekst"} subtitle={"Podtytuł"} />
        </Component>
        <Component
          md={4}
          customTop={"Element górny"}
          customBottom={"Element dolny"}>
          <Text title={"Tytuł"} text={"Tekst"} subtitle={"Podtytuł"} />
        </Component>{" "}
        <Component
          md={4}
          customTop={"Element górny"}
          customBottom={"Element dolny"}>
          <Text title={"Tytuł"} text={"Tekst"} subtitle={"Podtytuł"} />
        </Component>
      </Block>
      <Block style={{}}>
        <Component
          md={4}
          customTop={"Element górny"}
          customBottom={"Element dolny"}>
          <Image
            src="https://new.tmsolution.pl/wp-content/uploads/2016/11/saving-money.png"
            alt=""
            height="100%"
            maxWidth="100%"
            width={"100%"}
            gridProps={{}}
            md={12}
            xs={12}
          />
        </Component>
        <Grid md={4} />
        <Component
          md={4}
          customTop={"Element górny"}
          customBottom={"Element dolny"}>
          <div>
            <Carousel autoPlay md={8} steps={10}>
              {[...Array(10)].map((item, index) => (
                <div style={{ height: 100, width: 100 }}>
                  <Text text={`Karuzela slajd ${index + 1}`} md={12} />
                </div>
              ))}
            </Carousel>
          </div>
        </Component>
      </Block>
    </main>
  );
}
