import type { Metadata } from "next";
import "./globals.css";
import Navigation from "./components/Navigation";

export const metadata: Metadata = {
  title: "FX Studio - Images with a Point of View",
  description: "A minimal, high-end photography portfolio showcasing commercial photography with elegant design.",
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
        <Navigation />
        {children}
      </body>
    </html>
  );
}
