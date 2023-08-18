"use client";

import { useRouter } from "next/navigation";

const CategorySingle = ({ label, icon }) => {
  const router = useRouter();

  const handleCategoryData = () => {
    router.push(`/products/${label}`);
  };

  return (
    <div
      className="px-4 py-2 rounded-md flex flex-col gap-3 items-center justify-center border-b-2 border-transparent hover:text-neutral-800 text-neutral-500 cursor-pointer hover:bg-neutral-200"
      onClick={handleCategoryData}
    >
      <div>
        <img
          src={icon}
          className="lg:h-10 lg:w-10 w-8 h-8"
          alt="Category Image"
        />
      </div>
      <div>{label}</div>
    </div>
  );
};

export default CategorySingle;
