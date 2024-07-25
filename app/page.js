"use client";
import Block from "@/components/Layout/Block";
import Text from "@/components/Layout/Text";
import Image from "@/components/Layout/Image";

import Component from "@/components/Layout/Component";
import { useContext } from "react";
import SystemContext from "@/context/SystemContext";
import Button from "@/components/Interface/Button";

import HexagonBackground from "@/components/Background/HexagonBackground";

export default function Home() {
  const { isMobile, theme } = useContext(SystemContext);
  return (
    <main style={{ display: "flex", flexDirection: "column" }}>
      <HexagonBackground />
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
          md={4}
          xs={12}
          gridProps={{ justifyContent: "space-between", alignItems: "stretch" }}
          gridStyle={{ alignSelf: "center" }}
          customBottom={
            <div style={{ display: "flex", gap: 16, width: "100%" }}>
              <Button size={1.3} variant="contained">
                Get started
              </Button>
              <Button size={1.3} color="secondary" variant="outlined">
                Learn more
              </Button>
            </div>
          }>
          <Text
            title={"In your size"}
            text={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            }
            titleSize={70}
            textSize={20}
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
            height: "40vh",
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
              height: "80vh",
              padding: 48,
              filter: "drop-shadow(1px 1px 60px rgba(255,255,255,0.5))",
            }}
            height="80vh"
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
