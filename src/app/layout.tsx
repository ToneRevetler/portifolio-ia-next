import "./globals.css";
import { Inter } from "next/font/google";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const mainFont = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={mainFont.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
