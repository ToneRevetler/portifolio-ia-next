import "./globals.css";
import { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Script from "next/script";

const mainFont = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Tone Revetler | Desenvolvedor Web — Shopify e E-commerce",
    template: "%s | Tone Revetler",
  },
  robots: {
    follow: true,
    index: true,
  },
  description:
    "Portfólio de Tone Revetler, desenvolvedor web com atuação em front-end, Shopify e Liquid. Projetos, experiência profissional e currículo.",
  applicationName: "Portfólio de Tone Revetler",
  authors: [{ name: "Tone Revetler" }],
  creator: "Tone Revetler",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <Script
          id="clarity-script"
          strategy="afterInteractive"
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
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-white focus:px-4 focus:py-2 focus:text-blue-800 focus:shadow-lg"
        >
          Pular para o conteúdo principal
        </a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
