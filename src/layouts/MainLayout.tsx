import React from "react";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const MainLayout = ({ children }: { children: React.ReactNode }) => (
  <html lang="en" className={"dark"}>
    <body className={`${inter.className} container h-[100vh]`}>{children}</body>
  </html>
);

export default MainLayout;
