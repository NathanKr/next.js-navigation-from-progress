"use client";

import FromPageLoader from "@/components/from-page-loader";
import "./globals.css";
import useNavigationStore from "@/store/navigation-store";
import { useEffect } from "react";
import { isDevelopment } from "@/logic/gen-utils";

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
    /*  without children in the dependency array , the loader appear on the target page 
        even after endNavigation ,so i have to add to the dependency array */
  }, [children, endNavigation ]);

 

  return (
    <html lang="en">
      <body>
        {!isDevelopment() && <FromPageLoader />}
        {children}
      </body>
    </html>
  );
}
