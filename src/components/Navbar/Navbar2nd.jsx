"use client";

import Link from "next/link";
import { BiHeart } from "react-icons/bi";
import SearchBox from "../SearchBox/SearchBox";
import { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import NavbarTop from "./NavbarTop";
import { Divide as Hamburger } from "hamburger-react";
import CartBadge from "../CartBadge/CartBadge";
import FavoriteButton from "../FavoriteButton/FavoriteButton";

const Navbar2nd = () => {
  // TODO: user have to dynamic
  const user = true;

  //   for mobile responsive
  const [open, setOpen] = useState(false);

  return (
    <div>
      {/* 2nd Nav */}
      <div className="relative flex justify-end lg:justify-between items-center py-0 md:py-3">
        {/* Left Nav Item */}
        <Link href="/" className=" hidden lg:block w-1/3">
          <h3 className="text-xl">
            Yasin<span className="font-bold text-[#24A3B5]">Shop</span>
          </h3>
        </Link>

        {/* Center Nav Item */}
        <div className="hidden lg:block w-1/3">
          <div className="lg:flex justify-center">
            <SearchBox placeholder={"Search Here"} />
          </div>
        </div>

        {/* Right Nav Item */}
        <div className="hidden lg:block w-1/3">
          <div className="flex items-center gap-5 justify-end">
            <Link href="/my-cart">
              <CartBadge />
            </Link>
            <Link href="/my-favorite">
              <FavoriteButton />
            </Link>
            {user ? (
              <>
                {/* TODO: Have to dynamic */}
                <div className="flex items-center gap-4">
                  <img
                    className="w-8 h-8"
                    src="https://cdn-icons-png.flaticon.com/512/3177/3177440.png"
                    alt="User Photo"
                  />
                  <button className="py-1 px-4 rounded-full border-2 border-[#24A3B5] hover:bg-[#181818] hover:text-white">
                    Logout
                  </button>
                </div>
              </>
            ) : (
              <>
                <Link
                  href="/login"
                  className="py-1 px-4 rounded-full border-2 border-[#24A3B5] hover:bg-[#24A3B5] hover:text-white"
                >
                  Login
                </Link>
              </>
            )}
          </div>
        </div>

        <div className="lg:hidden flex items-center gap-4">
          <Link href="/my-cart" className="flex items-center gap-4">
            <CartBadge />
          </Link>

          <div>
            {user ? (
              <>
                {/* TODO: Have to dynamic */}
                <div className="flex items-center gap-4">
                  <img
                    className="w-6 h-6"
                    src="https://cdn-icons-png.flaticon.com/512/3177/3177440.png"
                    alt="User Photo"
                  />
                </div>
              </>
            ) : (
              <>
                <Link
                  href="/login"
                  className="py-1 px-4 rounded-full border-2 border-[#24A3B5] hover:bg-[#24A3B5] hover:text-white"
                >
                  Login
                </Link>
              </>
            )}
          </div>
        </div>

        {/* Hamburger Menu */}
        <div
          onClick={() => setOpen(!open)}
          className="lg:hidden block ease-in duration-300 z-10"
        >
          <span className="hidden md:block ml-3">
            {open === true ? (
              <IoClose className="cursor-pointer" size={24} />
            ) : (
              <HiMenuAlt3 className="cursor-pointer" size={24} />
            )}
          </span>
          <span className="md:hidden sm:block -my-2">
            <Hamburger
              toggled={open}
              toggle={setOpen}
              size={20}
              duration={0.3}
              distance="lg"
              easing="ease-in"
              label="Show menu"
            />
          </span>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden bg-neutral-800 h-screen w-screen text-neutral-100 absolute lg:static ease-in duration-500 mt-6 p-4  ${
          open ? "top-[24px] md:top-[24px] left-0" : "left-[-100%]"
        }`}
      >
        <div className="w-full flex flex-col gap-4">
          <Link href="/">
            <h3 className="text-xl text-white">
              Yasin<span className="font-bold text-[#24A3B5]">Shop</span>
            </h3>
          </Link>

          <NavbarTop />

          {/* Center Nav Item */}
          <div className="text-neutral-600">
            <SearchBox placeholder={"Search Here"} />
          </div>

          {/* Right Nav Item */}
          <div className="flex flex-col gap-4">
            <Link href="/my-cart" className="flex items-center gap-4">
              <CartBadge />
              My Cart
            </Link>
            <Link href="/my-favorite" className="flex items-center gap-4">
              <FavoriteButton />
              My Favorite
            </Link>
            {user ? (
              <>
                {/* TODO: Have to dynamic */}
                <div className="flex items-center gap-4">
                  <img
                    className="w-8 h-8"
                    src="https://cdn-icons-png.flaticon.com/512/3177/3177440.png"
                    alt="User Photo"
                  />
                  <button className="py-1 px-4 rounded-full border-2 border-[#24A3B5] hover:bg-[#181818] hover:text-white">
                    Logout
                  </button>
                </div>
              </>
            ) : (
              <>
                <Link
                  href="/login"
                  className="py-1 px-4 rounded-full border-2 border-[#24A3B5] hover:bg-[#24A3B5] hover:text-white"
                >
                  Login
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar2nd;
