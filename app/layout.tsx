import type { Metadata } from "next";
import "./globals.css";
import Navigation from "./components/Navigation";
import { LanguageProvider } from "./contexts/LanguageContext";

export const metadata: Metadata = {
  title: "FX Studio - Images, with intention.",
  description: "Images, with intention.",
  keywords: ["photography", "commercial photography", "FX Studio", "portfolio"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <LanguageProvider>
          <Navigation />
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
