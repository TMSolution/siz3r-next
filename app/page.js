"use client";
import Block from "@/components/Layout/Block";
import Text from "@/components/Layout/Text";
import Image from "@/components/Layout/Image";

import Component from "@/components/Layout/Component";
import { useContext } from "react";
import SystemContext from "@/context/SystemContext";
import Button from "@/components/Interface/Button";

import HexagonBackground from "@/components/Background/HexagonBackground";
import Hero from "@/components/Home/Hero";
import { Container } from "postcss";
import { Typography } from "@mui/material";

export default function Home() {
  const { isMobile, theme } = useContext(SystemContext);
  return (
    <main style={{ display: "flex", flexDirection: "column" }}>
      <Hero />
      <Block
        background="transparent"
        style={{ display: "flex", alignItems: "center", minHeight: "60vh" }}
        gridProps={{
          justifyContent: "center",
          alignItems: "stretch",
          paddingTop: 10,
          paddingBottom: 10,
        }}>
        <Text
          md={6}
          titleSize={62}
          textSize={20}
          title={"Branże i zastosowania"}
          text={
            "Siz3r znajduje zastosowanie w różnych branżach, takich jak e-commerce, sklepy tradycyjne, fitness, dietetyka oraz rozrywka. Nasze rozwiązania pomagają zwiększyć konkurencyjność, zredukować koszty i zmniejszyć ilość zwrotów towarów."
          }
        />
      </Block>
      <Block
        background="transparent"
        style={{ display: "flex", alignItems: "center" }}
        gridProps={{
          justifyContent: "space-between",
          alignItems: "stretch",
          paddingBottom: 10,
        }}>
        <Text
          titleSize={30}
          textSize={20}
          textAlign="left"
          textAlignTitle="left"
          title={"Innowacyjne rozwiązania"}
          text={`Dzięki tworzeniu zwymiarowanego modelu 3D ciała klienta, Siz3r rekomenduje najlepiej dopasowane ubrania z oferty sprzedawców. \n\nNasza platforma umożliwia również wizualizację klienta w wybranych strojach w formie trójwymiarowych modeli, co pomaga w dokonaniu trafnego wyboru`}
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
    </main>
  );
}
