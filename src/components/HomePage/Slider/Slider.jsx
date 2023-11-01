"use client";

import Link from 'next/link';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const Slider = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 1
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  }


  const images = [
    'http://localhost:3000/images/banner/1.jpg',
    'http://localhost:3000/images/banner/2.jpg',
    'http://localhost:3000/images/banner/2.jpg',
    'http://localhost:3000/images/banner/3.jpg',
    'http://localhost:3000/images/banner/4.jpg',
    'http://localhost:3000/images/banner/5.jpg',
    'http://localhost:3000/images/banner/6.jpg',
    'http://localhost:3000/images/banner/7.jpg',
  ]

  return (
    <div className='w-full md:mt-6 mt-8'>
      <div className='w-full flex flex-wrap md:gap-8'>
        <div className='w-full'>
          <Carousel
            autoPlay={true}
            infinite={true}
            arrows={true}
            showDots={true}
            responsive={responsive}
          >
            {
              images.map((img, i) => <Link href={'#'} className='md:h-[440px] h-auto w-full block' key={i} to='#'>
                <img src={img} alt="slider image" />
              </Link>)
            }
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Slider;
