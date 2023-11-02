"use client";

import { useRouter } from "next/navigation";

const CategorySingle = ({ item, selected }) => {
  const router = useRouter();
  const { title, bn_title, image } = item;

  const handleCategoryData = () => {
    router.push(`/shop/${title}`);
  };

  return (
    <div
      title={bn_title}
      className={`px-2 py-2 mb-2 rounded-md flex flex-col gap-1 items-center justify-center border-b-2 border-transparent hover:text-neutral-800 text-neutral-500 cursor-pointer hover:bg-gray-200 hover:border-b-2 hover:border-b-gray-400 ease-in-out duration-200
      ${selected && "bg-gray-200 border-b-2 border-b-gray-500 text-black"}
      `}
      onClick={handleCategoryData}
    >
      <div className="h-[124px] w-full relative">
        <img
          src={image}
          className="h-full w-full object-cover"
          alt={`${title} image`}
        />
      </div>
      <p className="text-center">{title}</p>
    </div>
  );
};

export default CategorySingle;
