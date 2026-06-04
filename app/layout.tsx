import "./globals.css";
import type { Metadata } from "next";
import CalProvider from "./components/providers/cal-provider";

export const metadata: Metadata = {
  title: "Nived",
  description: "Websites That Convert Visitors Into Clients",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}
        <CalProvider />
      </body>
    </html>
  );
}