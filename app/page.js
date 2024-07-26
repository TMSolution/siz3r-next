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
          paddingTop: 15,
          paddingBottom: 15,
        }}>
        <Text
          md={6}
          titleSize={isMobile ? 45 : 60}
          textSize={23}
          title={"Branże i zastosowania"}
          text={
            "Siz3r znajduje zastosowanie w różnych branżach, takich jak \ne-commerce, sklepy tradycyjne, fitness, dietetyka oraz rozrywka. Nasze rozwiązania pomagają zwiększyć konkurencyjność, zredukować koszty i zmniejszyć ilość zwrotów towarów."
          }
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
          title={"Produkty Siz3r i główne możliwości produktu"}
          text={`Dzięki tworzeniu zwymiarowanego modelu 3D ciała klienta, Siz3r rekomenduje najlepiej dopasowane ubrania z oferty sprzedawców. `}
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
            subtitle={"Zbieranie wymiarów"}
            text={`Przekształcanie zdjęć w wirtualne sylwetki 3D.`}
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
            subtitle={"Ubieranie modeli"}
            text={`Wirtualna przymierzalnia umożliwiająca wizualizację klienta w różnych strojach.`}
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
            subtitle={"Skanowanie ubrań"}
            text={`Dodawanie odzieży do systemu i prezentacja na modelach 3D.`}
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
          title={"Branże i zastosowania"}
          text={
            "Siz3r znajduje zastosowanie w różnych branżach, takich jak e-commerce, sklepy tradycyjne, fitness, dietetyka oraz rozrywka. Nasze rozwiązania pomagają zwiększyć konkurencyjność, zredukować koszty i zmniejszyć ilość zwrotów towarów."
          }
          
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
            subtitle={"E-commerce"}
            text={`Lepsze dopasowanie ubrań, zmniejszenie liczby zwrotów.`}
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
            subtitle={"Sklepy tradycyjne"}
            text={`Umożliwienie klientom przymierzania ubrań bez konieczności fizycznego kontaktu.`}
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
            subtitle={"Fitness i dietetyka"}
            text={`Monitorowanie zmian sylwetki w czasie.`}
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
            subtitle={"Rozrywka"}
            text={`Personalizacja awatarów w grach i wirtualnych światach.`}
            md={12}
          />
        </Component>
      </Block>
    </main>
  );
}
