"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavbarTop = ({ setOpen }) => {
  // TODO: Admin have to dynamic
  const user = true;
  const isAdmin = true;

  // console.log(isAdmin);

  const urlPath = usePathname();

  return (
    <div>
      <div className="flex lg:justify-center">
        <ul className="list-none flex flex-col lg:flex-row gap-4 items-start lg:items-center text-sm text-neutral-200 font-semibold">
          <li onClick={() => setOpen(false)}>
            <Link
              href="/"
              className={`hover:text-[#35b5ff] transition ${urlPath === "/" ? "border-b-2 border-gray-200" : ""
                }`}
            >
              Home
            </Link>
          </li>

          <li onClick={() => setOpen(false)}>
            <Link
              href="/products"
              className={`hover:text-[#35b5ff] transition ${urlPath === "/products" ? "border-b-2 border-gray-200" : ""
                }`}
            >
              Products
            </Link>
          </li>

          <li onClick={() => setOpen(false)}>
            <Link
              href="/about"
              className={`hover:text-[#35b5ff] transition ${urlPath === "/about" ? "border-b-2 border-gray-200" : ""
                }`}
            >
              About
            </Link>
          </li>

          {isAdmin && (
            <Link
              href="/dashboard"
              className={`hover:text-[#35b5ff] transition ${urlPath === "/dashboard" ? "border-b-2 border-gray-200" : ""
                }`}
            >
              Dashboard
            </Link>
          )}
        </ul>
      </div>
    </div>
  );
};

export default NavbarTop;
