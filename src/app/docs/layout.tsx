import React from "react";
import DetailLayout from "@/layouts/DetailLayout";

const Layout = ({ children }: { children: React.ReactNode }) => (
  <DetailLayout>{children}</DetailLayout>
);

export default Layout;
