import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PhaffiiNet",
  description: "A virtual and physical network of *Komagataella phaffii* strains (AKA *Pichia pastoris*) with gold-standard documentation. ",
  icons: {
    icon: '/favicon.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased font-sans" style={{ fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}>
        {children}
      </body>
    </html>
  );
}
