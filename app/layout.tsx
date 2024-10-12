import type { Metadata } from "next";
import localFont from "next/font/local";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Band Name Generator",
  description: "Free band name generator with over 10 million combinations",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-900 text-white flex flex-col min-h-screen`}
      >
        <header className="p-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Band Name Generator</h1>
        </header>
        <main className="container mx-auto px-4 py-8 flex-grow">
          {children}
        </main>
        <footer className="mt-auto p-4 text-center text-sm text-gray-400">
          <div className="flex justify-center items-center space-x-4">
            <Link 
              href="https://github.com/aitoolbuilder/ai-band-name-generator" 
              className="flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="mr-2 text-lg" />
              <span>GitHub</span>
            </Link>
            <Link 
              href="https://aibandnamegenerator.com" 
              className="flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              <TbWorldWww className="mr-2 text-lg" />
              <span>Website</span>
            </Link>
          </div>
        </footer>
      </body>
    </html>
  );
}
