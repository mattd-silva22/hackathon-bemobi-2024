import type { Metadata } from "next";
import "./globals.css";
import { Poppins, Inter } from 'next/font/google';
import SideMenu from "@/components/SideMenu";
import Menu from "@/components/Menu";

const poppins = Poppins({
  subsets: ['latin'],
  variable: "--font-poppins",
  weight: ['400', '700'], // Selecione os pesos que você deseja
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})
 
 

export const metadata: Metadata = {
  title: "Bemobi AI",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body>
        <SideMenu></SideMenu>
        <Menu/>
        {children}
      </body>
    </html>
  );
}