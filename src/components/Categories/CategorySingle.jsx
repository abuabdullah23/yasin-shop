"use client";

import { useRouter } from "next/navigation";

const CategorySingle = ({ label, icon, selected }) => {
  const router = useRouter();

  const handleCategoryData = () => {
    router.push(`/products/${label}`);
  };

  return (
    <div
      className={`px-4 py-2 mb-2 rounded-md flex flex-col gap-1 items-center justify-center border-b-2 border-transparent hover:text-neutral-800 text-neutral-500 cursor-pointer hover:bg-gray-200 hover:border-b-2 hover:border-b-gray-400 ease-in-out duration-200
      ${selected && "bg-gray-200 border-b-2 border-b-gray-500 text-black"}
      `}
      onClick={handleCategoryData}
    >
      <div>
        <img
          src={icon}
          className="lg:h-7 lg:w-7 w-5 h-5"
          alt="Category Image"
        />
      </div>
      <div>{label}</div>
    </div>
  );
};

export default CategorySingle;
