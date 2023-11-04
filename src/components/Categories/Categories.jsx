"use client";

import { usePathname } from "next/navigation";
import CategorySingle from "./CategorySingle";
import { useEffect, useState } from "react";
import { getAllCategories } from "@/api/categories";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import SectionTitle from "../SectionTitle/SectionTitle";
import Link from "next/link";

const Categories = () => {
  const pathName = usePathname();
  const category = pathName.split("/")[2];
  const [categories, setCategories] = useState([]);

  // get categories
  useEffect(() => {
    getAllCategories()
      .then(data => {
        setCategories(data)
      })
  }, []);

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 7
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 7
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 6
    },
    mdTablet: {
      breakpoint: { max: 991, min: 464 },
      items: 5
    },
    mobile: {
      breakpoint: { max: 768, min: 0 },
      items: 4
    },
    smmobile: {
      breakpoint: { max: 640, min: 0 },
      items: 3
    },
    xsmobile: {
      breakpoint: { max: 440, min: 0 },
      items: 2
    },
  }

  return (
    <div className="pt-2">
      <SectionTitle sectionTitle={'Categories'} />
      {
        categories?.length > 0
          ? <><Carousel
            autoPlay={true}
            infinite={true}
            arrows={true}
            responsive={responsive}
            transitionDuration={500}
          >
            {categories.map((item, i) => (
              <CategorySingle
                key={i}
                item={item}
                selected={category === item.title}
              ></CategorySingle>
            ))}
          </Carousel></>
          :
          <div className="flex items-center justify-center py-3 border-2">
            <div className="text-center flex flex-col items-center gap-3">
              <p>Categories Not Found! Server Error!</p>
              <Link href='/shop' className='py-2 px-4 rounded-md bg-slate-200 hover:bg-slate-300 w-fit'>Go to shop</Link>
            </div>
          </div>
      }
    </div>
  );
};

export default Categories;
