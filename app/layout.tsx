import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./components/Providers";

export const metadata: Metadata = {
  title: "Onchain Poker Hub",
  description: "Fully onchain poker gameplay with trustless, gasless settlement on Base",
  openGraph: {
    title: "Onchain Poker Hub",
    description: "Fully onchain poker gameplay with trustless, gasless settlement on Base",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
