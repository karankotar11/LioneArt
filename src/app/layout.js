import { Inter } from "next/font/google";
import "./globals.css";
import Layout from "@/components/common-layout/Layout";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "LioneArt",
  description: "Web Designer and Graphics Designer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Layout>{children}</Layout></body>
    </html>
  );
}
