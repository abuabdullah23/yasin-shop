import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="text-center text-red-500 flex flex-col gap-4">
        <h1 className="text-4xl font-bold">404</h1>
        <h3 className="text-2xl">Not Found</h3>
        <Link
          href={"/"}
          className="py-2 px-4 rounded-md bg-gray-300 hover:bg-gray-200"
        >
          Back to home page
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
