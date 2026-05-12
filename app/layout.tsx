import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Update this part to change what people see in the browser tab
export const metadata: Metadata = {
  title: "Mutahir Hussain | AI & Systems Engineer",
  description: "Official Portfolio of Syed Mutahir Hussain - AI, MLOps, and Core Systems Architecture.",
  icons: {
    icon: "/favicon.ico", // Ensure your new icon is named this in the public/app folder
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}
    >
      <body className="bg-[#0B0F19] antialiased selection:bg-blue-500/30">
        {children}
      </body>
    </html>
  );
}