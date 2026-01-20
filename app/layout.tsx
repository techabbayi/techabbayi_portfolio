import type { Metadata } from "next";
import "./globals.css";
import AuthProvider from "@/components/AuthProvider";

export const metadata: Metadata = {
  title: "Portfolio | Full Stack Developer & Designer",
  description: "Premium portfolio showcasing full-stack development, UI/UX design, and cybersecurity expertise. Built with Next.js, TypeScript, and Framer Motion.",
  keywords: ["portfolio", "developer", "designer", "full-stack", "UI/UX", "cybersecurity"],
  authors: [{ name: "Your Name" }],
  openGraph: {
    title: "Portfolio | Full Stack Developer & Designer",
    description: "Premium portfolio showcasing full-stack development and design expertise",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="antialiased">
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
