import { Metadata } from "next";
import "@/styles/globals.css";
import Header from "@/components/header";

export const metadata: Metadata = {
  title: "Acus Dev",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="relative flex flex-col min-h-dvh">
        <Header />
        {children}
      </body>
    </html>
  );
}
