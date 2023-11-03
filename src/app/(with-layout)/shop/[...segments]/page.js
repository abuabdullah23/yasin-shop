"use client"

import { getCategoryProducts } from "@/api/products";
import ProductsCard from "@/components/ProductsPage/ProductsCard";
import SectionTitle from "@/components/SectionTitle/SectionTitle";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const CategoryProductsPage = () => {
  const { segments } = useParams();
  const slug = segments[0];
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getCategoryProducts(slug)
      .then(data => {
        setProducts(data)
      })
  }, [slug]);

  return (
    <div className="py-16">


      {products.length > 0 ? (
        <>
          <SectionTitle sectionTitle={`${slug.split('-').join(' ').toLocaleUpperCase()} Products`} />
          <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
            {
              products.map((product, i) =>
                <ProductsCard
                  key={i}
                  product={product}
                />
              )
            }
          </div>
        </>
      ) : (
        <div className="h-[calc(100vh-200px)] flex items-center justify-center">
          <div className="flex flex-col items-center gap-3">
            <p className="text-lg font-semibold text-center">No products available in this category</p>
            <Link href={'/'} className="w-fit py-2 px-5 rounded-md bg-gray-700 text-white hover:bg-gray-600">Back to Home</Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default CategoryProductsPage;
