import Link from "next/link";
import React from "react";

const NavbarTop = () => {
    // TODO: Admin have to dynamic
    const user = true;
    const isAdmin = true;

    console.log(isAdmin);

  return (
    <div>
      <ul className="flex justify-center">
        <li className="list-none flex gap-4 items-center text-neutral-300 text-sm font-semibold">
          <Link href="/" className="hover:text-neutral-100">
            Home
          </Link>
          <Link href="/products" className="hover:text-neutral-100">
            Products
          </Link>
          <Link href="/about" className="hover:text-neutral-100">
            About
          </Link>

          {
            isAdmin && <Link href="/dashboard" className="hover:text-neutral-100">
            Dashboard
          </Link>
          }

        </li>
      </ul>
    </div>
  );
};

export default NavbarTop;
