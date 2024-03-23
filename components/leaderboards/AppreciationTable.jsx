"use client";

import React, { useState } from "react";
import UserCard from "./UserCard";
import data from "../../public/data/LeaderboardsData.json";
import Image from "next/image";
import trophy from "../../public//trophy.svg";
import User from "../../app/leaderboards/User.jsx";
import { Search, ArrowLeft, ArrowRight } from "lucide-react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";

import { Button } from "@/components/ui/button";

import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import GameCard from "./GameCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const columns = [
  {
    id: "rank",
    enableHiding: true,
    accessorKey: "rank",
    header: ({ column }) => {
      return (
        <div
          className="flex items-center cursor-pointer"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          <span className="pr-2">Rank</span>
          <svg
            width="6"
            height="9"
            viewBox="0 0 6 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.08711 4L4.91289 4C5.34007 4 5.57052 3.49894 5.29252 3.1746L3.37963 0.942899C3.18008 0.710094 2.81992 0.710094 2.62037 0.942899L0.707482 3.1746C0.429479 3.49894 0.659934 4 1.08711 4Z"
              fill="#fff"
            />
            <path
              d="M4.91289 5H1.08711C0.659934 5 0.429479 5.50106 0.707482 5.8254L2.62037 8.0571C2.81992 8.28991 3.18008 8.28991 3.37963 8.0571L5.29252 5.8254C5.57052 5.50106 5.34007 5 4.91289 5Z"
              fill="#fff"
            />
          </svg>
        </div>
      );
    },
    cell: ({ row }) => (
      <div className="text-center bg-[#292932] rounded-full px-6 py-2 w-[70px]">
        {row.getValue("rank")}
      </div>
    ),
  },
  {
    accessorKey: "name",
    header: "Name",
    cell: ({ row }) => <User user={row} />,
  },
  {
    accessorKey: "flight",
    header: "",
    cell: ({ row }) => (
      <div className="text-center hidden bg-[#292932] rounded-full px-6 py-2">
        {row.getValue("flight")}
      </div>
    ),
  },
  {
    accessorKey: "net",
    header: "Net",
    cell: ({ row }) => (
      <div className="text-center bg-[#292932] rounded-full px-6 py-2">
        {row.getValue("net")}
      </div>
    ),
  },

  {
    accessorKey: "gross",
    header: "Gross",
    cell: ({ row }) => (
      <div className="text-center bg-[#292932] rounded-full px-6 py-2">
        {row.getValue("gross")}
      </div>
    ),
  },
  {
    accessorKey: "handicap",
    header: "Handicap",
    cell: ({ row }) => (
      <div className="text-center bg-[#292932] rounded-full px-2 py-2">
        {row.getValue("handicap")}
      </div>
    ),
  },
  {
    accessorKey: "smash_cash",
    header: "Smash Cash",
    cell: ({ row }) => (
      <div className="text-center bg-[#292932] rounded-full px-6 py-2 inline-flex items-center">
        <Image src={trophy} alt="trofee" width={20} />
        <span className="ml-2">{row.getValue("smash_cash")}</span>
      </div>
    ),
  },
];

export default function DataTable(props) {
  const [activePage, setActivePage] = useState(1);
  const [net, setNet] = useState("gross");
  const [sorting, setSorting] = useState([]);
  const [columnFilters, setColumnFilters] = useState([]);
  const [columnVisibility, setColumnVisibility] = useState({});
  const [rowSelection, setRowSelection] = useState({});
  const table = useReactTable({
    data,
    columns: columns?.filter((item) => item.accessorKey !== net),
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      rowSelection,
    },
  });

  return (
    <div className="px-4 mb-4 rounded-lg w-ful bg-lightblue">
      <div className="flex items-center justify-between py-4">
        <h4 className="text-xl font-semibold">{props.title}</h4>
        <div>
          <Tabs
            defaultValue="net"
            className="w-[183px] h-[38px] bg-[#292932] text-[#1C1C24 rounded-xl"
          >
            <TabsList className="grid w-full grid-cols-2 p-0 bg-[#292932] rounded-xl">
              <TabsTrigger
                onClick={() => setNet("gross")}
                className={`h-full p-0 rounded-tl-xl rounded-bl-xl rounded-tr-0 rounded-br-0 bg-transparent rounded-0 `}
                value="net"
              >
                Net
              </TabsTrigger>
              <TabsTrigger
                onClick={() => setNet("net")}
                className={
                  "h-full p-0 rounded-tr-xl rounded-br-xl rounded-tl-0 rounded-bl-0 rounded-0 "
                }
                value="gross"
              >
                Gross
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
        <div className="bg-[#292932] rounded-lg flex w-[154px] items-center gap-x-2 px-3">
          <span className="text-[#92929D] capitalize inline-block">
            Flights:
          </span>
          <Select
            onValueChange={(value) => {
              table.getColumn("flight")?.setFilterValue(value),
                console.log(value);
            }}
          >
            <SelectTrigger className="w-[180px] bg-transparent  text-white border-none outline-none focus-visible:border-none">
              <SelectValue placeholder="Select a fruit" />
            </SelectTrigger>
            <SelectContent className="bg-[#292932] text-white">
              <SelectItem>All</SelectItem>
              <SelectItem value="A">A</SelectItem>
              <SelectItem value="B">B</SelectItem>
              <SelectItem value="C">C</SelectItem>
              <SelectItem value="D">D</SelectItem>
              <SelectItem value="E">E</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="relative">
          <div className="absolute left-4 top-2">
            <Search />
          </div>
          <Input
            placeholder="Search..."
            value={table.getColumn("name")?.getFilterValue() || ""}
            onChange={(event) =>
              table.getColumn("name")?.setFilterValue(event.target.value)
            }
            className="pl-14 w-[300px] lg:w-[300px] max-sm:w-[180px] bg-[#30303A] border-[#30303A] focus-visible:ring-offset-0 text-white placeholder:text-white"
          />
        </div>
      </div>

      <div className="rounded-md min-h-[831px]">
        <Table className="appreciation-table">
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
        <div className="flex items-center justify-end py-4 space-x-5">
          <Pagination>
            <PaginationContent className="flex justify-between">
              <PaginationItem
                className="flex items-center justify-center w-8 h-8 transition-all duration-500 ease-in-out rounded-md cursor-pointer hover:text-black hover:bg-white"
                onClick={() => {
                  if (activePage > 1) {
                    // Check if not already at the first page
                    table.previousPage();
                    setActivePage(activePage - 1);
                  }
                }}
                disabled={!table.getCanPreviousPage()}
              >
                <ArrowLeft />
              </PaginationItem>

              {/* Render pagination items dynamically */}
              {Array.from({ length: table.getPageCount() }).map((_, index) => {
                const pageNumber = index + 1;
                if (
                  pageNumber <= 3 || // Always show the first 3 pages
                  pageNumber === activePage || // Show the active page
                  (pageNumber === table.getPageCount() &&
                    table.getPageCount() > 3) || // Always show the last page
                  ((pageNumber === activePage - 1 ||
                    pageNumber === activePage + 1) &&
                    table.getPageCount() > 10) // Show nearby pages if total pages exceed 10
                ) {
                  return (
                    <PaginationItem
                      key={index}
                      className={`${
                        activePage === pageNumber
                          ? "border-2 rounded-md border-white"
                          : ""
                      } w-8 h-8 flex justify-center items-center`}
                      onClick={(e) => {
                        table.setPageIndex(index);
                        setActivePage(pageNumber);
                        e.preventDefault();
                      }}
                      disabled={!table.getCanNextPage()}
                    >
                      <PaginationLink href="#">{pageNumber}</PaginationLink>
                    </PaginationItem>
                  );
                } else if (index === 3 && table.getPageCount() > 3) {
                  return (
                    <PaginationItem key={index}>
                      <PaginationEllipsis />
                    </PaginationItem>
                  );
                }
                return null;
              })}

              <PaginationItem
                className="flex items-center justify-center w-8 h-8 transition-all duration-500 ease-in-out rounded-md cursor-pointer hover:text-black hover:bg-white"
                onClick={(e) => {
                  if (activePage < table.getPageCount()) {
                   e.preventDefault();
                    table.nextPage();
                    setActivePage(activePage + 1);
                  }
                }}
                disabled={!table.getCanNextPage()}
              >
                <ArrowRight />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </div>
    </div>
  );
}
