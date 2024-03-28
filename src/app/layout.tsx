import "./globals.css";

import { Figtree } from "next/font/google";
import local from "next/font/local";
import { Footer, Header, Notifications } from "./_components";
import { QueryProvider } from "@/providers";
import { Metadata } from "next";
import NextTopLoader from "nextjs-toploader";
export const metadata:Metadata={
  title:"trainProject",
description:"courseTrain",
}

const figtree = Figtree({
  display: "swap",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-figtree",
});
const yekanFont = local({
  src: [
    {
      path: "../../public/fonts/yekan/iranyekanwebregularfanum.woff",
      weight: "100",
      style: "normal",
    },
    {
      path: "../../public/fonts/yekan/IRANYekanWebBold.woff",
      weight: "800",
      style: "bold",
    },
    {
      path: "../../public/fonts/yekan/iranyekanweblightfanum.woff",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/yekan/iranyekanwebthinfanum.woff",
      weight: "100",
      style: "normal",
    },
    {
      path: "../../public/fonts/yekan/IRANYekanX-DemiBold.woff",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/yekan/IRANYekanWebBlack.woff",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-yekan",
});
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      dir="ltr"
      className={` dark ${figtree.variable} ${yekanFont.variable}`}
    >
      <body className="min-h-screen grid grid-rows-[80px_1fr_auto]  dark:bg-base-100 dark:text-base-content">
        <NextTopLoader showSpinner={false} color="var(--color-primary)"/>
        <Notifications/>
        <QueryProvider>
        <Header />
        <main>{children}</main>
        <Footer />
        </QueryProvider>
   
      </body>
    </html>
  );
}
