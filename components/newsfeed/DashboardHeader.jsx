"use client";
import React, { useEffect, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Bell, Search, Menu, X } from "lucide-react";
import Image from "next/image";
import { useSession } from "next-auth/react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import Sidebar from "./Sidebar";
import { signOut } from "next-auth/react";

export default function DashboardHeader() {
  const [isActive, setIsActive] = useState(false);
  const [userData, setUserData] = useState({});
  const { data: session } = useSession();

  useEffect(() => {
    if (session && session.user) {
      const { user } = session;
      setUserData({ ...user });
    }
  }, [session]);

  const handleClick = () => {
    setIsActive(!isActive); // Toggle the state on each click
  };

  return (
    <header className="py-2 bg-lightblue border-b-2 border-[#292932] fixed w-full">
      <div className="px-16 w-full">
        <div className="flex justify-between items-center">
          <div
            className={`transform delay-300 fixed -left-[100%] top-0 z-40 w-[240px] h-[100%] ${isActive ? "sidebar-active" : "sidebar-inactive"
              }`}
          >
            <div className="absolute right-5 top-5" onClick={handleClick}>
              <X />
            </div>
            <Sidebar />
          </div>

          <div className="lg:w-7/12 w-4/12 flex items-center">
            <div
              className="w-[40px] justify-center mr-2 flex xl:hidden"
              onClick={handleClick}
            >
              <Menu />
            </div>
            <div className="flex items-center max-sm:hidden">
              <Link href="/">
                <Image
                  width={75}
                  height={75}
                  src="/Logo.svg"
                  alt="logo"
                  placeholder="blur"
                  blurDataURL="data:..."
                />
              </Link>
              <h4 className="font-lg text-white ml-2 font-russo_one max-lg:hidden">
                INRANGE SMASH GOLF TOUR
              </h4>
            </div>
          </div>
          <div className="max-xl:mr-5 lg:w-4/12 w-4/12 flex justify-end items-center">
            <div className="relative">
              <div className="absolute left-4 top-2">
                <Search />
              </div>
              <Input
                type="search"
                placeholder="Search..."
                className="pl-14 w-[300px] lg:w-[300px] max-sm:w-[180px] bg-black border-black focus-visible:ring-offset-0 text-white placeholder:text-white"
              />
            </div>
          </div>
          <div className="lg:w-1/12 w-4/12 flex items-center justify-end">
            <div className="mr-4">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <div className="relative cursor-pointer">
                    <span className="absolute right-0 w-2 h-2 bg-red-500 rounded-full inline-block top-0"></span>
                    <Bell className="text-white" />
                  </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>Notification</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Profile</DropdownMenuItem>
                  <DropdownMenuItem>Billing</DropdownMenuItem>
                  <DropdownMenuItem>Team</DropdownMenuItem>
                  <DropdownMenuItem>Subscription</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <div className="relative rounded-full cursor-pointer">
                  <Avatar>
                    <AvatarImage src="/user.png" alt="@shadcn" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" align="end" forceMount>
                <DropdownMenuLabel className="font-normal">
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-medium leading-none">
                      {userData.username || "User"}
                    </p>
                    <p className="text-xs leading-none text-muted-foreground">
                      {userData.email}
                    </p>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuItem>Profile</DropdownMenuItem>
                  <DropdownMenuItem>Settings</DropdownMenuItem>
                  <DropdownMenuItem>Create An Event</DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                  onClick={() => signOut({ callbackUrl: "/signin" })}
                >
                  Log out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </header>
  );
}
