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
    'https://res.cloudinary.com/dtapzz2mi/image/upload/v1700387073/Yasin%20Shop/banner/banner_1_tctwdq.jpg',
    'https://res.cloudinary.com/dtapzz2mi/image/upload/v1700387072/Yasin%20Shop/banner/banner_2_gonlkc.jpg',
    'https://res.cloudinary.com/dtapzz2mi/image/upload/v1700387115/Yasin%20Shop/banner/banner_4_aac2vm.jpg',
    'https://res.cloudinary.com/dtapzz2mi/image/upload/v1700387072/Yasin%20Shop/banner/banner_5_yrzdgb.jpg',
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
