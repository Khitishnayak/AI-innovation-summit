import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI Innovation Summit 2025 | The Great LPU's Hackathon",
  description: "Empowering the Green Revolution through AI. Join the 14-day hackathon with ₹45L seed funding, featuring industry leaders from Microsoft and SMG Electric Scooters.",
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
