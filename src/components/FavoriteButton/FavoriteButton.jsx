import React from "react";
import { BiHeart } from "react-icons/bi";

const FavoriteButton = () => {
  return (
    <>
      <BiHeart size={24} className="hover:text-[#24A3B5]" title="Your Favorite Products"/>
    </>
  );
};

export default FavoriteButton;
