import type { Metadata } from "next";
import { geistSans, geistMono } from "@/config/fonts";
import { Footer } from "@/components/ui/footer/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Educasem",
  description: "Pagina educativa de Cecasem",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <title>Educasem</title>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <main>{children}</main>

        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
