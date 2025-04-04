import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "signup-Facebook - connect with your friends and world around you",
  description: "signup-Facebook is a social media platform launched in 2004 by Mark Zuckerberg."
};

export default function AdminLayout({ children }) {
  return (
    <>
    <div>this is signup navbar</div>
    {children}
    </>
  );
}
