"use client";

import { usePathname } from "next/navigation";
import CategorySingle from "./CategorySingle";
import { useEffect, useState } from "react";
import { getAllCategories } from "@/api/categories";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import SectionTitle from "../SectionTitle/SectionTitle";

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
      <SectionTitle sectionTitle={'Categories'}/>
      <Carousel
        autoPlay={true}
        infinite={true}
        arrows={true}
        responsive={responsive}
        transitionDuration={500}
      >
        {categories.map((item, i) => (
          <CategorySingle
            key={i}
            label={item.label}
            image={item.image}
            selected={category === item.label}
          ></CategorySingle>
        ))}
      </Carousel>


    </div>
  );
};

export default Categories;
