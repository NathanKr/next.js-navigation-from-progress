"use client"

import FromPageLoader from "@/components/from-page-loader";
import "./globals.css";
import useNavigationStore from "@/store/navigation-store";
import { useEffect } from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { endNavigation } = useNavigationStore();

  useEffect(() => {
    // Ensure navigation state is cleared whenever the layout mounts
    console.log("RootLayout mounted, ending navigation");
    endNavigation();
  }, [ children,endNavigation]);

  return (
    <html lang="en">
      <body>
        <FromPageLoader />
        {children}
      </body>
    </html>
  );
}
