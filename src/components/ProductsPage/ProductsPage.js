"use client"

import { getAllProducts } from "@/api/products";
import SectionTitle from "../SectionTitle/SectionTitle";
import ProductSlider from "./ProductSlider";
import ProductsCard from "./ProductsCard";
import { useState } from "react";
import { useEffect } from "react";

const ProductsPage = () => {

  const [products, setProducts] = useState([]);

  // get all products
  useEffect(() => {
    getAllProducts()
      .then(data => {
        setProducts(data)
      })
  }, []);

  // latest, top, discount products
  const latestProducts = products.slice(0, 3);
  const topRatedProducts = products.slice(0, 3).filter((r) => r.price <= 20); // TODO: have to change to top rated
  const discountProducts = products.slice(0, 3).filter((d) => d.discount >= 10);


  return <div className='w-[100%] flex flex-wrap mx-auto my-12'>
    <div className="w-full">
      <SectionTitle sectionTitle={'Feature Products'} />

      <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
        {
          products?.map((product, i) =>
            <ProductsCard
              key={i}
              product={product}
            />
          )
        }
      </div>

      {/* Latest, Top rated and Discount Products */}
      <div className='py-16'>
        <SectionTitle sectionTitle={'Special Products'} />
        <div className='w-full flex flex-wrap mx-auto'>
          <div className="grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            <div className='overflow-hidden border-r'>
              <ProductSlider specialProducts={latestProducts} title='Latest Products' />
            </div>

            <div className='overflow-hidden border-r'>
              <ProductSlider specialProducts={topRatedProducts} title='Top Rated Products' />
            </div>

            <div className='overflow-hidden border-r'>
              <ProductSlider specialProducts={discountProducts} title='Discount Product' />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>;
};

export default ProductsPage;
