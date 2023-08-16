import React from "react";
import { BiCart } from "react-icons/bi";

const CartBadge = () => {
  return (
    <div className="relative" title="Your Cart">
      <BiCart size={24} className="hover:text-[#24A3B5]"/>
      <span className="absolute -top-3 -right-3 bg-[#24A3B5] bg-opacity-80 px-2 rounded-full">
        <small className="text-white">0</small>
      </span>
    </div>
  );
};

export default CartBadge;
