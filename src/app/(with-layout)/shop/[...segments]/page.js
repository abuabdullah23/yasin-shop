"use client"

import { useParams } from "next/navigation";


const CategoryProductsPage = () => {
  const { segments } = useParams();
  const category = segments[0];

  return (
    <div className="h-full">
      Category wise data will be display here
    </div>
  );
};

export default CategoryProductsPage;
