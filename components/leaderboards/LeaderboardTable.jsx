"use client";

import React, { useState } from "react";
import Status from "./Status";

import Image from "next/image";
import coin from "../../public/coin.svg";
import User from "./User";
import Players from "./Players";
import { Clock10, Search, ArrowLeft, ArrowRight } from "lucide-react";

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
import Link from "next/link";

export const columns = [
  {
    id: "eventName",
    enableHiding: true,
    accessorKey: "eventName",
    header: ({ column }) => {
      return (
        <div
          className="flex items-center cursor-pointer"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          <span className="pr-2">Event Name</span>
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
      <div className="flex">
        <User user={row} />
      </div>
    ),
  },
  {
    id: "date",
    enableHiding: true,
    accessorKey: "date",
    header: ({ column }) => {
      return (
        <div
          className="flex items-center cursor-pointer"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          <span className="pr-2">Date</span>
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
      <div className="flex items-center">
        <Clock10 size={20} />
        <span className="ml-2">{row.getValue("date")}</span>
      </div>
    ),
  },
  {
    accessorKey: "players",
    header: "Players",
    cell: ({ row }) => <Players data={row} />,
  },
  {
    accessorKey: "smash_cash",
    header: "Smash Cash",
    cell: ({ row }) => (
      <div className="text-center bg-[#292932] rounded-full px-4 py-2 inline-flex items-center">
        <Image src={coin} alt="trofee" width={20} />
        <span className="ml-2 text-lg font-semibold font-Saira">
          {row.getValue("smash_cash")}
        </span>
      </div>
    ),
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => <Status data={row.getValue("status")} />,
  },
];

export default function LeaderboardTable(props) {
  const [activePage, setActivePage] = useState(1);

  const data = props.data;
  const title = props.title;
  const [sorting, setSorting] = useState([]);
  const [columnFilters, setColumnFilters] = useState([]);
  const [columnVisibility, setColumnVisibility] = useState({});
  const [rowSelection, setRowSelection] = useState({});

  const table = useReactTable({
    data,
    columns,
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

  function urlFriendlyString(string) {
    return string.toLowerCase().replace(/ /g, "-");
  }

  return (
    <div className="px-8 py-2 bg-[#0E0E12] rounded-md bg-opacity-60 shadow-lg relative">
      <div className="flex items-center justify-between py-4">
        <h4 className="text-xl font-semibold">{title}</h4>
        <div className="relative">
          <div className="absolute left-4 top-2">
            <Search />
          </div>
          <Input
            placeholder="Search..."
            value={table.getColumn("eventName")?.getFilterValue() || ""}
            onChange={(event) =>
              table.getColumn("eventName")?.setFilterValue(event.target.value)
            }
            className="pl-14 w-[300px] lg:w-[300px] max-sm:w-[180px] bg-[#30303A] border-[#30303A] focus-visible:ring-offset-0 text-white placeholder:text-white"
          />
        </div>
      </div>
      <div className="rounded-md  min-h-[831.66px]">
        <Table>
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
                <>
                  <TableRow
                    key={row.id}
                    data-state={row.getIsSelected() && "selected"}
                  >
                    {row.getVisibleCells().map((cell) => (
                      <TableCell key={cell.id}>
                        <Link
                          href={urlFriendlyString(
                            title + "/" + row.getValue("eventName")
                          )}
                          className="w-full contents"
                        >
                          {flexRender(
                            cell.column.columnDef.cell,
                            cell.getContext()
                          )}
                        </Link>
                      </TableCell>
                    ))}
                  </TableRow>
                </>
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
        <div className="flex items-center justify-end py-4 mt-20 space-x-2">
        <Pagination>
          <PaginationContent className="flex justify-between">
            <PaginationItem
              className="flex items-center justify-center w-8 h-8 transition-all duration-500 ease-in-out rounded-md cursor-pointer hover:text-black hover:bg-white"
              onClick={(e) => {
                if (activePage > 1) {
                  // Check if not already at the first page
                  table.previousPage();
                  setActivePage(activePage - 1);
                  e.preventDefault()
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
                  // Check if not already at the last page
                  table.nextPage();
                  setActivePage(activePage + 1);
                  e.preventDefault();
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
