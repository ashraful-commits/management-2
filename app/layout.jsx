"use client";
import { Saira, Russo_One } from "next/font/google";
import { usePathname } from "next/navigation";

import "./globals.css";
import { AuthProvider } from "@/components/providers/auth-provider";
import { Toaster } from "react-hot-toast";
import WelcomePopup from "./../components/model/WelcomePopup";
import ProfileModel from "./../components/model/ProfileModel";

const saira = Saira({
  weight: ["400", "500", "600"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-saira",
});

const russo_one = Russo_One({
  weight: ["400"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-russo-one",
});

export default function RootLayout({
  children,
  params: { session, ...restParams },
}) {
  const pathname = usePathname();
  return (
    <html lang="en">
      <body className={`${saira.variable} ${russo_one.variable}`}>
        <AuthProvider session={session}>{children}</AuthProvider>
        <Toaster position="bottom-center" />
        {/* <WelcomePopup /> */}
        {/* <ProfileModel /> */}
      </body>
    </html>
  );
}
