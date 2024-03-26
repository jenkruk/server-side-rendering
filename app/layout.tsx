import type { Metadata } from "next";
import { Comfortaa } from "next/font/google";
import "./globals.css";
import Providers from "./util/Providers";
import { Nav } from "./components/Nav";

const inter = Comfortaa({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "The People Project",
  description: "Server Side Rendering with Next.js and React Query",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning={true}>
        <Nav />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
