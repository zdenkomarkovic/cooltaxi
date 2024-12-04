import localFont from "next/font/local";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

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

export const metadata = {
  title: "Cool Taxi Nis",
  description:
    "Cool Taksi Nis, uvek tu za vas, brzi, pouzdani, u najkracem roku dolaze do vas i voze na zeljenu adresu.",
  icons: {
    icon: "/cool_logo.png",
  },
  keywords: [
    "taksi",
    "taksi nis",
    "taxi",
    "taxi nis",
    "cool",
    "cool taxi",
    "cool taksi",
    "taxi cool",
    "taksi cool",
  ],
  robots: "index, follow",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
