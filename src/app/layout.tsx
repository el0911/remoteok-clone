import "@/styles/globals.css";
import type { Metadata } from "next";

import { nunito, pacifico } from "@/styles/fonts";
import AuthProvider from "../context/AuthProvider";

export const metadata: Metadata = {
  title: "Get comfy Jobs",
  description: "Find ComfyUi Jobs.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${nunito.className} ${pacifico.variable} bg-color-bg`}>
        <AuthProvider>
          <main className="relative min-h-screen">{children}</main>
        </AuthProvider>
      </body>
    </html>
  );
}
