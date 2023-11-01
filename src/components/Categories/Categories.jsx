"use client";

import { usePathname } from "next/navigation";
import { categories } from "./categoriesData";
import CategorySingle from "./CategorySingle";

const Categories = () => {
  const pathName = usePathname();
  const category = pathName.split("/")[2];
  console.log(category);

  return (
    <div className="pt-4 flex flex-row gap-1 items-center justify-between  overflow-x-auto">
      {categories.map((item) => (
        <CategorySingle
          key={item.label}
          label={item.label}
          icon={item.icon}
          selected={category === item.label}
        ></CategorySingle>
      ))}
    </div>
  );
};

export default Categories;
