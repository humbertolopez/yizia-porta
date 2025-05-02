import type { Metadata } from "next";
import { Signika, Poppins } from "next/font/google";
import "./globals.css";

const signika = Signika({
  variable: "--font-signika",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Yizia Portfolio",
  description: "Just a cool portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${signika.variable} ${poppins.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
