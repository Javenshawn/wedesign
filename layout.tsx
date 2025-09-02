import "./globals.css";
import { ReactNode } from "react";

export const metadata = {
  title: "WeDesign",
  description: "Logo design service",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}