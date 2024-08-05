"use client";
import Block from "@/components/Layout/Block";
import Text from "@/components/Layout/Text";
import Image from "@/components/Layout/Image";

import Component from "@/components/Layout/Component";
import { useContext } from "react";
import SystemContext from "@/context/SystemContext";

import Hero from "@/components/Home/Hero";

import TranslationContext from "@/context/TranslationContext";
import { Directions } from "@mui/icons-material";
import { Badge, Chip } from "@mui/material";

function colorText(text) {
  let array = text
    .split(" ")
    .map((word, index) => (
      <span style={{ color: index % 2 === 0 && "#00D278" }}>{word} </span>
    ));
  return array;
}

export default function Home(props) {
  const { dictionary, lang } = useContext(TranslationContext);

  const { isMobile, theme } = useContext(SystemContext);
  return (
    <main style={{ display: "flex", flexDirection: "column" }}>
      <Hero dictionary={dictionary} />

      <Block
        background="transparent"
        style={{ display: "flex", alignItems: "center" }}
        gridProps={{
          justifyContent: "center",
          alignItems: "stretch",

          spacing: 10,
          //paddingTop: 5,
          paddingBottom: 15,
        }}>
        <Text
          titleSize={70}
          textSize={25}
          textAlign="center"
          textAlignTitle="center"
          gutter={false}
          title={
            <>
              In{" "}
              <span style={{ color: theme.palette.secondary.main }}>Your</span>{" "}
              size
            </>
          }
          // text={dictionary.block1.description}
          md={12}
        />
        <Component
          xs={12}
          md={12}
          gridProps={{ spacing: 4 }}
          gridStyle={{
            display: "flex",
            alignItems: "center",
            justifyContent: "start",
            flexDirection: "row-reverse",
          }}>
          <Component xs={12} md={5} gridStyle={{ alignSelf: "center" }}>
            <Text
              titleSize={31}
              textSize={20}
              textAlign={{ xs: "justify", md: "right" }}
              textAlignTitle={{ xs: "center", md: "right" }}
              title={colorText(dictionary.block1.image1.title)}
              text={dictionary.block1.image1.description}
              md={12}
              xs={12}
            />
          </Component>
          <Image
            xs={12}
            md={7}
            src={"/photos/download2.png"}
            width="100%"
            gridStyle={{
              alignItems: "end",
              justifyContent: "center",
              display: "flex",
            }}
          />
        </Component>
        <Component
          xs={12}
          md={12}
          gridProps={{ spacing: 4 }}
          gridStyle={{
            display: "flex",
            alignItems: "center",
            justifyContent: "start",
            flexDirection: "row",
          }}>
          <Component xs={12} md={5} gridStyle={{ alignSelf: "center" }}>
            <Text
              titleSize={31}
              textSize={20}
              textAlign={{ xs: "justify", md: "left" }}
              textAlignTitle={{ xs: "center", md: "left" }}
              title={colorText(dictionary.block1.image2.title)}
              text={dictionary.block1.image2.description}
              md={12}
              xs={12}
            />
          </Component>
          <Image
            xs={12}
            md={7}
            src={"/photos/photo.png"}
            width="100%"
            gridStyle={{
              alignItems: "end",
              justifyContent: "center",
              display: "flex",
            }}
          />
        </Component>
        <Component
          xs={12}
          md={12}
          gridProps={{ spacing: 4 }}
          gridStyle={{
            display: "flex",
            alignItems: "center",
            justifyContent: "start",
            flexDirection: "row-reverse",
          }}>
          <Component xs={12} md={5} gridStyle={{ alignSelf: "center" }}>
            <Text
              titleSize={31}
              textSize={20}
              textAlign={{ xs: "justify", md: "right" }}
              textAlignTitle={{ xs: "center", md: "right" }}
              title={colorText(dictionary.block1.image3.title)}
              text={dictionary.block1.image3.description}
              md={12}
              xs={12}
            />
          </Component>
          <Image
            xs={12}
            md={7}
            src={"/photos/shopping.png"}
            width="100%"
            gridStyle={{
              alignItems: "end",
              justifyContent: "center",
              display: "flex",
            }}
          />
        </Component>
      </Block>
    </main>
  );
}
