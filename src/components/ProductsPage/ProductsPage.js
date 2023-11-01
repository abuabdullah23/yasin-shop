"use client"

import SectionTitle from "../SectionTitle/SectionTitle";
import ProductSlider from "./ProductSlider";
import ProductsCard from "./ProductsCard";

const ProductsPage = () => {
  return <div className='w-[100%] flex flex-wrap mx-auto my-12'>
    <div className="w-full">
      <SectionTitle sectionTitle={'Feature Products'} />

      <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
        {
          [1, 2, 3, 4, 5, 6, 7].map((product, i) =>
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
              <ProductSlider title='Latest Products' />
            </div>

            <div className='overflow-hidden border-r'>
              <ProductSlider title='Top Rated Products' />
            </div>

            <div className='overflow-hidden border-r'>
              <ProductSlider title='Discount Product' />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>;
};

export default ProductsPage;
