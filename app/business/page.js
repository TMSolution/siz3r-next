"use client";
import Block from "@/components/Layout/Block";
import Text from "@/components/Layout/Text";
import Image from "@/components/Layout/Image";
import Component from "@/components/Layout/Component";
import { useContext } from "react";
import SystemContext from "@/context/SystemContext";
import TranslationContext from "@/context/TranslationContext";
import Hero from "@/components/Business/Hero";
import { Badge } from "@mui/material";
import { colorText } from "@/components/functions";
import { alignProperty } from "@mui/material/styles/cssUtils";
export default function Business(props) {
  const { dictionary, lang } = useContext(TranslationContext);
  const { isMobile, theme } = useContext(SystemContext);
  return (
    <main
      style={{
        display: "flex",
        flexDirection: "column",
        background: "linear-gradient(-45deg, #00D278, #3C1992, #00D278)",
      }}>
      <Hero dictionary={dictionary} />

      <Block
        background="transparent"
        style={{ display: "flex", alignItems: "center" }}
        gridProps={{
          justifyContent: "center",
          alignItems: "stretch",

          spacing: 10,
          paddingTop: 5,
          paddingBottom: 15,
        }}>
        <Text
          titleSize={{ md: 70, xs: 50 }}
          textSize={25}
          textAlign="center"
          textAlignTitle="center"
          gutter={false}
          title={dictionary.block1business.title}
          text={dictionary.block1business.description}
          md={9}
          gridStyle={{ marginBottom: -30 }}
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
              title={colorText(dictionary.block1business.image1.title)}
              text={dictionary.block1business.image1.description}
              md={12}
              xs={12}
            />
          </Component>
          <Image
            xs={12}
            md={7}
            src={"/functions/f1.png"}
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
              title={colorText(dictionary.block1business.image2.title)}
              text={dictionary.block1business.image2.description}
              md={12}
              xs={12}
            />
          </Component>
          <Image
            xs={12}
            md={7}
            src={"/functions/f2.png"}
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
              title={colorText(dictionary.block1business.image3.title)}
              text={dictionary.block1business.image3.description}
              md={12}
              xs={12}
            />
          </Component>
          <Image
            xs={12}
            md={7}
            src={"/functions/f3.jpg"}
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
              title={colorText(dictionary.block1business.image4.title)}
              text={dictionary.block1business.image4.description}
              md={12}
              xs={12}
            />
          </Component>
          <Image
            xs={12}
            md={7}
            src={"/functions/f4.jpg"}
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
        background="linear-gradient(10deg, rgba(0, 210, 120,0.3), rgba(0, 210, 120,0.6))"
        style={{ display: "flex", alignItems: "center" }}
        gridProps={{
          justifyContent: "center",
          alignItems: "stretch",

          spacing: 8,
          paddingTop: 8,
          paddingBottom: 18,
        }}>
        <Text
          titleSize={{ md: 70, xs: 50 }}
          textSize={25}
          textAlign="center"
          textAlignTitle="center"
          title={dictionary.block2business.title}
          text={dictionary.block2business.description}
          md={9}
          gutter={false}
          gridStyle={{ marginBottom: -12 }}
        />
        <Component
          md={4}
          gridStyle={{ alignProperty: "start", display: "flex" }}>
          <Image
            md={12}
            src={"/benefits/k1.jpg"}
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
            titleSize={31}
            textSize={20}
            textAlign="left"
            textAlignTitle="left"
            title={colorText(dictionary.block2business.image1.title)}
            text={dictionary.block2business.image1.description}
            md={12}
            gridStyle={{ marginTop: 24, display: "flex", alignItems: "start" }}
          />
        </Component>
        <Component md={4}>
          <Image
            md={12}
            src={"/benefits/k2.jpg"}
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
            titleSize={31}
            textSize={20}
            textAlign="left"
            textAlignTitle="left"
            title={colorText(dictionary.block2business.image2.title)}
            text={dictionary.block2business.image2.description}
            md={12}
            gridStyle={{ marginTop: 24, display: "flex", alignItems: "start" }}
          />
        </Component>
        <Component md={4}>
          <Image
            md={12}
            src={"/benefits/k3.jpg"}
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
            titleSize={31}
            textSize={20}
            textAlign="left"
            textAlignTitle="left"
            title={colorText(dictionary.block2business.image3.title)}
            text={dictionary.block2business.image3.description}
            md={12}
            gridStyle={{ marginTop: 24, display: "flex", alignItems: "start" }}
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
          paddingTop: 5,
          paddingBottom: 15,
        }}>
        <Text
          titleSize={{ md: 70, xs: 50 }}
          textSize={25}
          textAlign="center"
          textAlignTitle="center"
          gutter={false}
          title={dictionary.block3business.title}
          text={dictionary.block3business.description}
          md={9}
          gridStyle={{ marginBottom: -48 }}
        />
        <Component md={6}>
          <Image
            md={12}
            src={"/app/a1.jpg"}
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
            titleSize={31}
            textSize={20}
            textAlign="center"
            textAlignTitle="center"
            title={dictionary.block3business.image1.title}
            text={dictionary.block3business.image1.description}
            md={12}
            gridStyle={{ width: "100%" }}
          />
        </Component>
        <Component md={6}>
          <Image
            md={12}
            src={"/app/a2.jpg"}
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
            titleSize={31}
            textSize={20}
            textAlign="center"
            textAlignTitle="center"
            title={dictionary.block3business.image2.title}
            text={dictionary.block3business.image2.description}
            md={12}
            gridStyle={{ width: "100%" }}
          />
        </Component>
        <Component md={6}>
          <Badge
            badgeContent="Soon"
            color="primary"
            sx={{
              ".MuiBadge-badge": {
                padding: 3,
                fontSize: 25,
                fontWeight: "bold",
                right: 18,
                //color:"white"
              },
            }}>
            <Image
              md={12}
              src={"/app/a3.jpg"}
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
          </Badge>
          <Text
            titleSize={31}
            textSize={20}
            textAlign="center"
            textAlignTitle="center"
            title={dictionary.block3business.image3.title}
            text={dictionary.block3business.image3.description}
            md={12}
            gridStyle={{ width: "100%" }}
          />
        </Component>
        <Component md={6}>
          <Badge
            badgeContent="Soon"
            color="primary"
            sx={{
              ".MuiBadge-badge": {
                padding: 3,
                fontSize: 25,
                fontWeight: "bold",
                right: 18,
                //color:"white"
              },
            }}>
            <Image
              md={12}
              src={"/app/a4.jpg"}
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
          </Badge>
          <Text
            titleSize={31}
            textSize={20}
            textAlign="center"
            textAlignTitle="center"
            title={dictionary.block3business.image4.title}
            text={dictionary.block3business.image4.description}
            md={12}
            gridStyle={{ width: "100%" }}
          />
        </Component>
      </Block>
    </main>
  );
}
