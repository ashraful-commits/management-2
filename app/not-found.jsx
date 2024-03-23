import React from "react";
import Link from "next/link"

const notFound = () => {
  return <div className="flex flex-col items-center justify-center min-h-screen text-red-400">
    <h1 className="text-xl font-bold uppercase">Page not found</h1>
    <Link className="inline-block px-5 py-2 mt-10 font-bold text-gray-500 border border-gray-600 rounded-md shadow-md hover:bg-gray-600 hover:text-white" href="/">Go to home</Link>
  </div>;
};

export default notFound;
