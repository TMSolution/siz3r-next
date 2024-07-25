"use client";
import Block from "@/components/Layout/Block";
import Text from "@/components/Layout/Text";
import Image from "@/components/Layout/Image";
import Carousel from "@/components/Layout/NewCarousel";
import Component from "@/components/Layout/Component";
import { useContext } from "react";
import SystemContext from "@/context/SystemContext";
import { Button } from "@mui/material";

export default function Home() {
  const { isMobile, theme } = useContext(SystemContext);
  return (
    <main style={{ display: "flex", flexDirection: "column" }}>
      <Block
        background="transparent"
        style={{ minHeight: "100vh", display: "flex", alignItems: "center" }}
        gridProps={{
          justifyContent: "space-between",
          alignItems: "stretch",
          style: {
            minHeight: "80vh",
          },
        }}>
        <Component
          md={6}
          xs={12}
          gridProps={{ justifyContent: "space-between", alignItems: "stretch" }}
          gridStyle={{ alignSelf: "center" }}
          customBottom={
            <div style={{ display: "flex", gap: 16, width: "100%" }}>
              <Button variant="contained">Get started</Button>
              <Button
                style={{ color: "lightgray", borderColor: "lightgray" }}
                variant="outlined">
                Learn more
              </Button>
            </div>
          }>
          <Text
            title={"Discover the Power of 3D Modeling in Our "}
            text={
              "Transform your digital self into a captivating 3D model with our cutting-edge app. Explore a dynamic world of possibilities and unleash your creativity like never "
            }
            titleSize={58}
            textSize={20}
            md={12}
            gridStyle={{ paddingTop: 48, paddingBottom: 48 }}
            textAlign="left"
            textAlignTitle="left"
          />
        </Component>
        <Component md={6} xs={0} gridStyle={{ alignSelf: "center" }}>
          <Image
            src="https://new.tmsolution.pl/wp-content/uploads/2016/11/saving-money.png"
            alt=""
            gridStyle={{ alignSelf: "end" }}
            //height="100%"
            //maxWidth="100%"
            // width={"100%"}
            md={12}
            xs={12}
          />
        </Component>
      </Block>
    </main>
  );
}
