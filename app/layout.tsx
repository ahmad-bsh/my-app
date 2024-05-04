import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import UnderConstruction from "./_lotties/animations/UnderConstruction";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kode Znippets",
  description: "Documenting the Koding Journey",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(inter.className, "min-h-dvh flex flex-col")}>
        {process.env.NEXT_PUBLIC_CONSTRUCTION_STATUS === "IN_PROGRESS" ? (
          <div className="flex-1 flex flex-col h-full w-full items-center justify-center text-2xl text-yellow-400">
            <UnderConstruction />
          </div>
        ) : (
          children
        )}
      </body>
    </html>
  );
}
