import "./globals.css";
import { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Script from "next/script";

const mainFont = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Portifólio | Tone Revetler",
    template: "%s | Portifólio | Tone Revetler",
    absolute: "Portifólio | Tone Revetler",
  },
  robots: {
    follow: true,
    index: true,
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          id="clarity-script"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                c[a] = c[a] || function () { (c[a].q = c[a].q || []).push(arguments) };
                t = l.createElement(r); t.async = 1; t.src = "https://www.clarity.ms/tag/" + i;
                y = l.getElementsByTagName(r)[0]; y.parentNode.insertBefore(t, y);
              })(window, document, "clarity", "script", "sjcnue29o9");
            `,
          }}
        />
      </head>
      <body className={mainFont.className} >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
