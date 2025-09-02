import type { Metadata } from "next";
import "./globals.css";
import Footer from "./components/common/footer";
import "../styles/fonts.css";
import Navigation from "./components/home/navigation";

export const metadata: Metadata = {
  title: "SoulWork | Root into SOUL and branch into WORK that serves the world",
  description:
    "SoulWork | Root into SOUL and branch into WORK that serves the world",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
