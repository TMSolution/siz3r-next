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
import ContactPage from "@/components/Contact/page";
import {
  Bar,
  BarChart,
  Cell,
  Label,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";

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
  const charts = [
    { name: "Zakup z siz3r", value: 7, color: "#00D278" },
    { name: "Zakup i zwrot", value: 20, color: "grey" },
  ];
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
          // text={
          //   <>
          //     {dictionary.block1.description}{" "}
          //     <span style={{ color: theme.palette.secondary.main }}>free</span>!
          //   </>
          // }
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
      <Block
        background="linear-gradient(10deg, rgba(0, 210, 120,0.6), rgba(0, 210, 120,0.3))"
        style={{
          display: "flex",
          alignItems: "center",
          overflow: "visible",
          height: "40vh",
          marginBottom: 15,
          "&::before": {
            content: '""',
            background: "red",
          },
        }}
        gridProps={{
          justifyContent: "space-between",
          alignItems: "center",
          paddingTop: 5,
          paddingBottom: 5,
        }}>
        <Text
          titleSize={30}
          textSize={20}
          textAlign="left"
          textAlignTitle="left"
          title={dictionary.block3.title}
          text={dictionary.block3.description}
          md={3}
          gridStyle={{ alignSelf: "center" }}
        />
        <Image
          md={8.5}
          xs={0}
          src={"/photos/s.png"}
          height={"90vh"}
          maxHeight="unset"
          // width={"100%"}
          gridStyle={{
            maxHeight: "unset",
            alignItems: "center",
            justifyContent: "center",
            

            height: "50vh",
            display: { xs: "none", md: "flex" },
            //overflow:"hidden"
          }}
          style={{ rotate: "-30deg", filter: "brightness(0) invert(1)" }}
        />
        {/* <Image
          md={8.5}
          src={"https://picsum.photos/1600/600"}
          // height={"40vh"}
          width={"100%"}
          gridStyle={{
            alignItems: "center",
            justifyContent: "center",
            display: "flex",
          }}
        /> */}
      </Block>
      <ContactPage />
    </main>
  );
}
