import type { Metadata } from "next";
import { Inter, IBM_Plex_Serif, } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: '--font-enter' });
const ibmPlesSerif = IBM_Plex_Serif({
  subsets: ["latin"],
  variable: '--font-ibm',
  weight: ['400', '700'],
});

export const metadata: Metadata = {
  title: "Horizon",
  description: "send, get payments with horizon",
  icons: {
    icon: '/icons/logo.svg'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${ibmPlesSerif.variable}`}>{children}</body>
    </html>
  );
}
