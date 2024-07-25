import "./globals.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import LayoutBody from "@/components/LayoutBody.js";
import getDictionary from "@/components/dictionary";

export const metadata = {
  title: "Boilerplate app",
  description: "Generated by create next app",
};

export default async function RootLayout(props) {
  let dictionary = await getDictionary();
  return (
    <html lang="en" className="dark">
      <LayoutBody dictionary={dictionary}>{props.children}</LayoutBody>
    </html>
  );
}
