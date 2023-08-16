import React from "react";
import { FiSearch } from "react-icons/fi";

const SearchBox = ({ placeholder }) => {
  return (
    <>
      <div className="relative">
        <input
          className="py-1 px-4 w-full rounded-full border-2 border-[#24A3B5] focus:outline-[#24A3B5] border-opacity-50"
          type="text"
          name="search"
          id="searchText"
          placeholder={placeholder}
        />
        <FiSearch
          className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer text-neutral-300 hover:text-neutral-700"
          size={20}
        />
      </div>
    </>
  );
};

export default SearchBox;
