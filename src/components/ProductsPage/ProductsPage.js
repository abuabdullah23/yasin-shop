"use client"

import { getAllProducts } from "@/api/products";
import SectionTitle from "../SectionTitle/SectionTitle";
import ProductSlider from "./ProductSlider";
import ProductsCard from "./ProductsCard";
import { useState } from "react";
import { useEffect } from "react";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import Pagination from "../Pagination/Pagination";

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [totalProducts, setTotalProducts] = useState();
  const [pageNumber, setPageNumber] = useState(1);
  const [perPage, setPerPage] = useState(16);

  // get all products
  useEffect(() => {
    getAllProducts('', '', pageNumber, perPage)
      .then(data => {
        setProducts(data.result);
        setTotalProducts(data.total);
      })
  }, [pageNumber, perPage]);

  // latest, top, discount products
  const latestProducts = products?.slice(0, 3);
  const topRatedProducts = products?.slice(0, 3).filter((r) => r.price <= 20); // TODO: have to change to top rated
  const discountProducts = products?.slice(0, 3).filter((d) => d.discount >= 10);


  return <div className='w-[100%] flex flex-wrap mx-auto my-12'>
    <div className="w-full">
      <SectionTitle sectionTitle={'Feature Products'} />

      {
        totalProducts > 0 ?
          <>
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

            {/* pagination */}
            <div className='flex items-center justify-end gap-8 mt-12'>
              <div className='flex items-center gap-3'>
                <div><p>Per Page</p></div>
                <select onChange={(e) => setPerPage(parseInt((e.target.value)))} className='px-4 py-1 border border-slate-700 focus:border-gray-500 outline-none bg-gray-200 rounded-md text-slate-600'>
                  <option value={perPage}>{perPage}</option>
                  <option value="4">4</option>
                  <option value="8">8</option>
                  <option value="12">12</option>
                  <option value="16">16</option>
                  <option value="20">20</option>
                  <option value="28">28</option>
                  <option value="48">48</option>
                  <option value="60">60</option>
                  <option value="80">80</option>
                  <option value="100">100</option>
                </select>
              </div>
              {
                totalProducts > perPage && <Pagination
                  pageNumber={pageNumber}
                  setPageNumber={setPageNumber}
                  totalItem={totalProducts}
                  perPage={perPage}
                  showItem={(Math.floor(totalProducts / perPage)) + 2} />
              }
            </div>
          </>
          :
          <div className='flex justify-center items-start py-12 lg:col-span-3'>
            <LoadingSpinner />
          </div>
      }

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
