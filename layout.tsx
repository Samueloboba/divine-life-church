import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Divine Life - Giving Church Worldwide | Christ Covenant Church",
  description: "Welcome to Divine Life - Giving Church Worldwide, Christ Covenant Church, led by Apostle Uzoh Atisele.",
  applicationName: "Divine Life Church"
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}