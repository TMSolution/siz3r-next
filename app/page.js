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

export default function Home(props) {
  const { dictionary, lang } = useContext(TranslationContext);

  const { isMobile, theme } = useContext(SystemContext);
  return (
    <main style={{ display: "flex", flexDirection: "column" }}>
      <Hero dictionary={dictionary} />
      {/* <Block
        //color="black"
       // background="linear-gradient(5deg, transparent 5%, gray 5.2%, gray 94.8%, black 95%)"
        style={{ display: "flex", alignItems: "center", minHeight: "60vh" }}
        gridProps={{
          justifyContent: "center",
          alignItems: "stretch",
        }}>
        <Text
          md={6}
          titleSize={{ xs: 45, md: 60 }}
          textSize={23}
          title={dictionary.block1.title}
          text={dictionary.block1.description}
        />
      </Block> */}

      <Block
        background="transparent"
        style={{ display: "flex", alignItems: "center" }}
        gridProps={{
          justifyContent: "center",
          alignItems: "stretch",

          spacing: 12,
          paddingTop: 15,
          paddingBottom: 15,
        }}>
        <Text
          titleSize={70}
          textSize={20}
          textAlign="center"
          textAlignTitle="center"
          title={
            <>
              In{" "}
              <span style={{ color: theme.palette.secondary.main }}>Your</span>{" "}
              size
            </>
          }
          text={dictionary.block1.description}
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
            flexDirection: "row",
          }}>
          <Component xs={12} md={5} gridStyle={{ alignSelf: "center" }}>
            <Text
              titleSize={30}
              textSize={20}
              textAlign={{ xs: "justify", md: "left" }}
              textAlignTitle={{ xs: "center", md: "left" }}
              title={dictionary.block1.image1.title}
              text={dictionary.block1.image1.description}
              md={12}
              xs={12}
            />
          </Component>
          <Image
            xs={12}
            md={7}
            src={"https://picsum.photos/1600/600"}
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
              titleSize={30}
              textSize={20}
              textAlign={{ xs: "justify", md: "right" }}
              textAlignTitle={{ xs: "center", md: "right" }}
              title={dictionary.block1.image2.title}
              text={dictionary.block1.image2.description}
              md={12}
              xs={12}
            />
          </Component>
          <Image
            xs={12}
            md={7}
            src={"https://picsum.photos/1600/600"}
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
              titleSize={30}
              textSize={20}
              textAlign={{ xs: "justify", md: "left" }}
              textAlignTitle={{ xs: "center", md: "left" }}
              title={dictionary.block1.image3.title}
              text={dictionary.block1.image3.description}
              md={12}
              xs={12}
            />
          </Component>
          <Image
            xs={12}
            md={7}
            src={"https://picsum.photos/1600/600"}
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
        background="transparent"
        style={{ display: "flex", alignItems: "center" }}
        gridProps={{
          justifyContent: "center",
          alignItems: "stretch",

          spacing: 12,
          paddingTop: 15,
          paddingBottom: 15,
        }}>
        <Text
          titleSize={30}
          textSize={20}
          textAlign="center"
          textAlignTitle="center"
          title={dictionary.block4.title}
          text={dictionary.block4.description}
          md={9}
        />
        <Component md={6}>
          <Image
            md={12}
            src={"https://picsum.photos/550/300"}
            // height={"40vh"}
            width={"100%"}
            gridStyle={{
              alignItems: "center",
              justifyContent: "center",
              display: "flex",
              width: "100%",
            }}
          />
          <Text
            textSize={20}
            textAlign="left"
            textAlignSubtitle="left"
            subtitle={dictionary.block4.image1.title}
            text={dictionary.block4.image1.description}
            md={12}
          />
        </Component>
        <Component md={6}>
          <Image
            md={12}
            src={"https://picsum.photos/550/300"}
            // height={"40vh"}
            width={"100%"}
            gridStyle={{
              alignItems: "center",
              justifyContent: "center",
              display: "flex",
              width: "100%",
            }}
          />
          <Text
            textSize={20}
            textAlign="left"
            textAlignSubtitle="left"
            subtitle={dictionary.block4.image2.title}
            text={dictionary.block4.image2.description}
            md={12}
          />
        </Component>
        <Component md={6}>
          <Image
            md={12}
            src={"https://picsum.photos/550/300"}
            // height={"40vh"}
            width={"100%"}
            gridStyle={{
              alignItems: "center",
              justifyContent: "center",
              display: "flex",
              width: "100%",
            }}
          />
          <Text
            textSize={20}
            textAlign="left"
            textAlignSubtitle="left"
            subtitle={dictionary.block4.image3.title}
            text={dictionary.block4.image3.description}
            md={12}
          />
        </Component>
        <Component md={6}>
          <Image
            md={12}
            src={"https://picsum.photos/550/300"}
            // height={"40vh"}
            width={"100%"}
            gridStyle={{
              alignItems: "center",
              justifyContent: "center",
              display: "flex",
              width: "100%",
            }}
          />
          <Text
            textSize={20}
            textAlign="left"
            textAlignSubtitle="left"
            subtitle={dictionary.block4.image4.title}
            text={dictionary.block4.image4.description}
            md={12}
          />
        </Component>
      </Block>
    </main>
  );
}
