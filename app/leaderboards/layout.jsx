"use client";
import { useSession } from "next-auth/react"

import React from "react";
import DashboardHeader from "@/components/newsfeed/DashboardHeader";
import Sidebar from "@/components/newsfeed/Sidebar";
import Header from "@/components/homepage/Header";

export default function RootDashboardLayout({ children }) {
  const { data: session } = useSession()
  return (
    <>
      {session &&
        <div className="flex h-screen overflow-hidden bg-black">
          <div className="z-50">
            <DashboardHeader />
          </div>
          <section className="flex w-full justify-between">
            <div className="z-40 basis-2">
              <Sidebar />
            </div>
            <div className="overflow-y-auto pt-[93px] pb-16 w-full hide-scrollbar">
              {children}
            </div>
          </section>
        </div>
      }
      {!session &&
        <div className="homepage py-28">
          <Header title="About The Tour" />
          <div className="container">
            {children}
          </div>
        </div>
      }
    </>
  );
}
