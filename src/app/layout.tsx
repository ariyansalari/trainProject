import "./globals.css";

import {Figtree} from "next/font/google"
import local from 'next/font/local'
const figtree=Figtree({
  display:"swap",
  subsets:['latin'],
  weight:['300','400','500','600','700','800','900'],
  variable:"--font-figtree"
})
const yekanFont=local({
  src:[{
    path:'../../public/fonts/yekan/iranyekanwebregularfanum.woff',
    weight:"100",
    style:"normal"
  },
  {
    path:'../../public/fonts/yekan/IRANYekanWebBold.woff',
    weight:"800",
    style:"bold"
  },
  {
    path:'../../public/fonts/yekan/iranyekanweblightfanum.woff',
    weight:"300",
    style:"normal"
  },
  {
    path:'../../public/fonts/yekan/iranyekanwebthinfanum.woff',
    weight:"100",
    style:"normal"
  },
  {
    path:'../../public/fonts/yekan/IRANYekanX-DemiBold.woff',
    weight:"600",
    style:"normal"
  },  {
    path:'../../public/fonts/yekan/IRANYekanWebBlack.woff',
    weight:"900",
    style:"normal"
  },
],
variable:'--font-yekan'
})
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html  dir="ltr" className={` dark ${figtree.variable} ${yekanFont.variable}`}>
  
      <body className="min-h-screen flex flex-col  dark:bg-base-100 dark:text-base-content">
        <header className="bg-gray-200 p-4">
          <nav className="text-center font-bold">
            دوره معماری ری اکت
          </nav>
        </header>
        <main className=" flex-1 flex">
        {children}

        </main>
        <footer className="bg-gray-200 text-center p-4 font-bold">Footer</footer>
        </body>
    </html>
  );
}
