"use client"

import { getCategoryProducts } from "@/api/products";
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

  console.log(slug);

  return (
    <div className="h-full">
      <h1>Products in Category: {slug}</h1>
      {products.length > 0 ? (
        <ul>
          {
            products.map(product => (
              <li
                key={product._id}
              >
                {product.name}
              </li>
            ))
          }
        </ul>
      ) : (
        <p>No products available in this category</p>
      )}
    </div>
  );
};

export default CategoryProductsPage;
