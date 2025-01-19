import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Books",
  description: "App keeping track of the books I read this year",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
