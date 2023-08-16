import Link from "next/link";
import React from "react";

const NavbarTop = () => {
  return (
    <div>
      <ul className="flex justify-center">
        <li className="list-none flex gap-4 items-center text-neutral-300 text-base font-semibold">
          <Link href="/" className="hover:text-neutral-100">
            Home
          </Link>
          <Link href="/products" className="hover:text-neutral-100">
            Products
          </Link>
          <Link href="/about" className="hover:text-neutral-100">
            About
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavbarTop;
