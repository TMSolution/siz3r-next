"use client";
import Block from "@/components/Layout/Block";
import Text from "@/components/Layout/Text";
import Image from "@/components/Layout/Image";
import Component from "@/components/Layout/Component";
import { useContext } from "react";
import SystemContext from "@/context/SystemContext";
import TranslationContext from "@/context/TranslationContext";
import Hero from "@/components/Business/Hero";
export default function Business(props) {
  const { dictionary, lang } = useContext(TranslationContext);
  const { isMobile, theme } = useContext(SystemContext);
  return (
    <main
      style={{
        display: "flex",
        flexDirection: "column",
        background: "linear-gradient(-45deg, #3C1992, #00D278, #3C1992)",
      }}>
      <Hero dictionary={dictionary} />

      <Block
        // background="transparent"
        style={{ display: "flex", alignItems: "center" }}
        gridProps={{
          justifyContent: "space-between",
          alignItems: "stretch",
          paddingTop: 15,
          paddingBottom: 15,
        }}>
        <Text
          titleSize={30}
          textSize={20}
          textAlign="left"
          textAlignTitle="left"
          title={dictionary.block2.title}
          text={dictionary.block2.description}
          md={3}
        />
        <Image
          md={8.5}
          src={"/photos/businessShop.png"}
          // height={"40vh"}
          width={"100%"}
          gridStyle={{
            alignItems: "center",
            justifyContent: "center",
            display: "flex",
          }}
        />
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
          title={dictionary.block2business.title}
          text={dictionary.block2business.description}
          md={9}
        />
        <Component md={6}>
          <Image
            md={12}
            src={"/photos/returns.jpg"}
            // height={"40vh"}
            width={"100%"}
            gridStyle={{
              alignItems: "center",
              justifyContent: "center",
              display: "flex",
              width: "100%",
              marginBottom: 3,
            }}
          />
          <Text
            textSize={20}
            textAlign="center"
            textAlignSubtitle="center"
            subtitle={dictionary.block2business.image1.title}
            text={dictionary.block2business.image1.description}
            md={12}
            gridStyle={{ width: "100%" }}
          />
        </Component>
        <Component md={6}>
          <Image
            md={12}
            src={"/photos/shops.jpg"}
            // height={"40vh"}
            width={"100%"}
            gridStyle={{
              alignItems: "center",
              justifyContent: "center",
              display: "flex",
              width: "100%",
              marginBottom: 3,
            }}
          />
          <Text
            textSize={20}
            textAlign="center"
            textAlignSubtitle="center"
            subtitle={dictionary.block2business.image2.title}
            text={dictionary.block2business.image2.description}
            md={12}
            gridStyle={{ width: "100%" }}
          />
        </Component>
        <Component md={6}>
          <Image
            md={12}
            src={"/photos/fitness.jpg"}
            // height={"40vh"}
            width={"100%"}
            gridStyle={{
              alignItems: "center",
              justifyContent: "center",
              display: "flex",
              width: "100%",
              marginBottom: 3,
            }}
          />
          <Text
            textSize={20}
            textAlign="center"
            textAlignSubtitle="center"
            subtitle={dictionary.block2business.image3.title}
            text={dictionary.block2business.image3.description}
            md={12}
            gridStyle={{ width: "100%" }}
          />
        </Component>
        <Component md={6}>
          <Image
            md={12}
            src={"/photos/gaming.jpg"}
            // height={"40vh"}
            width={"100%"}
            gridStyle={{
              alignItems: "center",
              justifyContent: "center",
              display: "flex",
              width: "100%",
              marginBottom: 3,
            }}
          />
          <Text
            textSize={20}
            textAlign="center"
            textAlignSubtitle="center"
            subtitle={dictionary.block2business.image4.title}
            text={dictionary.block2business.image4.description}
            md={12}
            gridStyle={{ width: "100%" }}
          />
        </Component>
      </Block>
    </main>
  );
}
