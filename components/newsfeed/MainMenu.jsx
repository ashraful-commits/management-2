"use client";
import React from "react";
import {
  Globe,
  Trophy,
  CalendarDays,
  Gift,
  Flag,
  BarChart4,
  PlaySquare,
  Cog,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import menuItems from "../../public/data/menuItem.json";

const iconComponents = {
  Globe,
  Trophy,
  CalendarDays,
  Gift,
  Flag,
  BarChart4,
  PlaySquare,
  Cog,
};

export default function MainMenu() {
  const pathname = usePathname();
  return (
    <div className="mt-10">
      <ul className="[&>li]:mb-8">
        {menuItems.map((menuItem, index) => {
          const IconComponent = iconComponents[menuItem.icon];
          return (
            <li key={index}>
              <Link
                href={`${menuItem.url}`}
                className={`flex items-center hover:text-[#f20093] ${
                  pathname == menuItem.url ? "menu-active" : ""
                }`}
              >
                <div className="mx-5">{IconComponent && <IconComponent />}</div>
                <span className="font-medium font-Saira">{menuItem.name}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
