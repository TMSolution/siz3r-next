"use client";
import Block from "@/components/Layout/Block";
import Text from "@/components/Layout/Text";
import Image from "@/components/Layout/Image";
import Component from "@/components/Layout/Component";
import { useContext } from "react";
import SystemContext from "@/context/SystemContext";
import TranslationContext from "@/context/TranslationContext";
export default function Business(props) {
  const { dictionary, lang } = useContext(TranslationContext);
  const { isMobile, theme } = useContext(SystemContext);
  return (
    <main style={{ display: "flex", flexDirection: "column" }}>
      <Block
        background="transparent"
        style={{ display: "flex", alignItems: "center", minHeight: "60vh" }}
        gridProps={{
          justifyContent: "center",
          alignItems: "stretch",
          paddingTop: 15,
          paddingBottom: 15,
        }}>
        <Text
          md={6}
          titleSize={{ xs: 45, md: 60 }}
          textSize={23}
          title={dictionary.block1business.title}
          text={dictionary.block1business.description}
        />
      </Block>
      <Block
        background="transparent"
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
          title={dictionary.block2business.title}
          text={dictionary.block2business.description}
          md={3}
        />
        <Image
          md={8.5}
          src={
            isMobile
              ? "https://picsum.photos/400"
              : "https://picsum.photos/1600/600"
          }
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
          title={dictionary.block3business.title}
          text={dictionary.block3business.description}
          md={9}
        />
        <Component md={4}>
          <Image
            md={12}
            src={"https://picsum.photos/500/300"}
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
            subtitle={dictionary.block3business.image1.title}
            text={dictionary.block3business.image1.description}
            md={12}
          />
        </Component>
        <Component md={4}>
          <Image
            md={12}
            src={"https://picsum.photos/500/300"}
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
            subtitle={dictionary.block3business.image2.title}
            text={dictionary.block3business.image2.description}
            md={12}
          />
        </Component>
        <Component md={4}>
          <Image
            md={12}
            src={"https://picsum.photos/500/300"}
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
            subtitle={dictionary.block3business.image3.title}
            text={dictionary.block3business.image3.description}
            md={12}
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
          title={dictionary.block4business.title}
          text={dictionary.block4business.description}
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
            subtitle={dictionary.block4business.image1.title}
            text={dictionary.block4business.image1.description}
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
            subtitle={dictionary.block4business.image2.title}
            text={dictionary.block4business.image2.description}
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
            subtitle={dictionary.block4business.image3.title}
            text={dictionary.block4business.image3.description}
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
            subtitle={dictionary.block4business.image4.title}
            text={dictionary.block4business.image4.description}
            md={12}
          />
        </Component>
      </Block>
    </main>
  );
}
