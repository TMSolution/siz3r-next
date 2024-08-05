"use client";
import HexagonBackground from "@/components/Background/HexagonBackground";
import ContactPage from "@/components/Contact/page";
export default function Contact() {
  return (
    <main
      style={{
        display: "flex",
        flexDirection: "column",
        background: "linear-gradient(-45deg, #3C1992, #3C1992,#00D278,)",
        marginTop: 15,
      }}>
      <HexagonBackground
        position={{
          xs: "linear-gradient(green, black, black)",
          md: `radial-gradient(circle at center, green, black, black)`,
        }}
        lightPos="0%"
        maskHeight={"100vh"}
      />
      <ContactPage />
    </main>
  );
}
