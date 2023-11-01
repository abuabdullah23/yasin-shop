"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import navItems from "./navItems";

const NavbarTop = () => {
  // TODO: Admin have to dynamic
  const user = true;
  const isAdmin = true;

  const urlPath = usePathname();

  return (
    <div>
      <div className="flex lg:justify-center">
        <ul className="list-none flex flex-col lg:flex-row gap-4 items-start lg:items-center text-sm text-neutral-200 font-semibold">
          {
            navItems.map((item, i) => (
              <li key={i}>
                <Link
                  href={item.path}
                  className={`hover:text-[#35b5ff] transition ${urlPath === item.path ? "border-b-2 border-gray-200" : ""
                    }`}
                >
                  {item.title}
                </Link>
              </li>
            ))
          }

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
