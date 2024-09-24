import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./(components)/navbar";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { connectToMongoDB } from "@/lib/db";

config.autoAddCss = false;

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
     title: "Ticket app",
     description: "My app",
};

export default function RootLayout({
     children,
}: Readonly<{
     children: React.ReactNode;
}>) {
     connectToMongoDB();
     return (
          <html lang="en">
               <body
                    className={`${geistSans.variable} ${geistMono.variable} antialiased`}
               >
                    <div className="flex flex-col h-screen max-h-screen">
                         <Navbar />
                         <div className="flex-grow overflow-y-auto bg-page text-default-text">
                              {children}
                         </div>
                    </div>
               </body>
          </html>
     );
}
