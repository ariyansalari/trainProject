import "./globals.css";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
  
      <body className="min-h-screen flex flex-col">
        <header className="bg-gray-200 p-4">
          <nav className="text-center font-bold">
            Header
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
