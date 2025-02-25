import { Cairo } from "next/font/google";
import Navbar from "./components/Navbar";
import "./globals.css";
const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["arabic", "latin"],
  weight: ["400", "700"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${cairo.variable} antialiased bg-[#2F2E35] w-screen overflow-x-hidden`}
      >
        <Navbar />

        {children}
      </body>
    </html>
  );
}
