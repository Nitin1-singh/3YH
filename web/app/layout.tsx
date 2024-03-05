import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import CustomNavbar from "@/components/navbar/CustomNavbar";

const inter = Poppins({ subsets: ["latin-ext"], weight: ["300", "500", "700", "900"] });

export const metadata: Metadata = {
  title: "3YH",
  description: "Ai ml hackathon platform for free",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <CustomNavbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
