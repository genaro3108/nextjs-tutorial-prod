import { Inter } from "next/font/google";
import NavBar from "@/components/NavBar";
import Providers from "./providers";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Next JS tutorial",
  description: "Next JS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={inter.className}
      >
        <NavBar />
        <main className="px-8 py-20 max-w-6xl mx-auto">
          <Providers>
            {children}
          </Providers>
        </main>
      </body>
    </html>
  );
}
