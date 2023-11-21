"use client"

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { useEffect, useState } from 'react';
import { AiFillGithub, AiFillHeart, AiOutlineTwitter } from 'react-icons/ai';
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import { HiShoppingBag } from 'react-icons/hi2';
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import { Pagination } from 'swiper/modules'
import Ratings from '../Ratings/Ratings';
import Reviews from '../Reviews/Reviews';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { getAllProducts, getSingleProduct } from '@/api/products';


const ProductDetails = () => {
    const [imageLink, setImageLink] = useState('');
    const [state, setState] = useState('');
    const { id } = useParams();
    const productId = id[0];
    const [product, setProduct] = useState([]);
    const { _id, name, category, slug, price, description, image, stock, discount } = product;
    const [products, setProducts] = useState([]);
    const relatedProducts = products.filter((p) => slug === p.slug);


    // get single product for details
    useEffect(() => {
        getAllProducts()
            .then(data => setProducts(data.result))
    }, [])


    // get single product for details
    useEffect(() => {
        getSingleProduct(productId)
            .then(data => setProduct(data))
    }, [productId])


    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 5
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 4
        },
        mdTablet: {
            breakpoint: { max: 991, min: 464 },
            items: 4
        },
        mobile: {
            breakpoint: { max: 768, min: 0 },
            items: 4
        },
        smMobile: {
            breakpoint: { max: 640, min: 0 },
            items: 2
        },
        xsMobile: {
            breakpoint: { max: 440, min: 0 },
            items: 2
        }
    }

    return (
        <div>
            {/* Product name */}
            <section className='py-5 mb-5'>
                <div className='w-full h-full mx-auto'>
                    <div className='flex flex-wrap justify-start items-center text-base text-slate-600  w-full'>
                        <Link className='hover:underline ease-in duration-300 underline-offset-4' href='/'>Home</Link>
                        <span className='mt-1'><MdOutlineKeyboardArrowRight /></span>
                        <Link className='hover:underline ease-in duration-300 underline-offset-4' href='/shop'>Shop</Link>
                        <span className='mt-1'><MdOutlineKeyboardArrowRight /></span>
                        <Link href={`/shop/${slug}`} className='text-red-500 hover:underline ease-in duration-300 underline-offset-4'>{category}</Link>
                        <span className='mt-1'><MdOutlineKeyboardArrowRight /></span>
                        <span className='text-cyan-600'>{name}</span>
                    </div>
                </div>
            </section>

            <section className='w-full h-full mx-auto mb-16'>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
                    {/* show product images section */}
                    <div>
                        <div className='p-4 border mb-3'>
                            <img className='h-[240px] lg:h-[360px] w-full object-contain' src={imageLink ? imageLink : image} alt="product image" />
                        </div>
                        <div className='border'>
                            {image && <Carousel
                                autoPlay={true}
                                infinite={true}
                                responsive={responsive}
                                transitionDuration={500}
                            >
                                {image.map((img, i) => <div
                                    onClick={() => setImageLink(img)}
                                    key={i}
                                    className='hover:border-2 border-cyan-400'
                                >
                                    <img className='cursor-pointer h-full object-cover' src={img} alt="product image" />
                                </div>)
                                }
                            </Carousel>
                            }
                        </div>
                    </div>

                    {/* details */}
                    <div className='flex flex-col gap-5'>
                        <div className='text-3xl font-bold text-slate-600 '>
                            <h2>{name}</h2>
                        </div>
                        {/* <div className='flex justify-start items-center gap-4'>
                            <div className='flex text-xl'>
                                <Ratings ratings={4.5} />
                            </div>
                            <span className='text-green-500'>(23 reviews)</span>
                        </div> */}
                        <div className='text-2xl text-red-500 font-bold flex gap-3'>
                            {discount ? <>
                                <h2 className='line-through text-slate-500'>৳{price}</h2>
                                <h2>৳ {price - Math.floor((price * discount) / 100)} (-{discount}%)</h2>
                            </> : <h2>Price: ৳{price}</h2>}
                        </div>
                        <div className='text-slate-600 '>
                            <p>{description}</p>
                        </div>
                        <div className='flex gap-3 pb-8 border-b'>
                            {
                                stock ? <>
                                    <div className='flex justify-center items-center h-[50px] bg-slate-200 text-xl'>
                                        <div className='px-6 xs:px-4 select-none h-full text-center flex items-center justify-center cursor-pointer hover:bg-slate-300'>-</div>
                                        <div className='px-6 xs:px-4 select-none'>3</div>
                                        <div className='px-6 xs:px-4 select-none h-full text-center flex items-center justify-center cursor-pointer hover:bg-slate-300'>+</div>
                                    </div>
                                    <div>
                                        <button className='px-8 py-3 h-full font-semibold bg-cyan-500 hover:shadow-lg hover:shadow-cyan-500/40 text-white flex items-center gap-3'>
                                            <span><HiShoppingBag /></span>
                                            <span className='hidden md:block'>Add To Cart</span>
                                        </button>
                                    </div>
                                </> : ''
                            }
                            <div>
                                <div className='flex items-center justify-center h-[50px] w-[50px] cursor-pointer hover:shadow-lg bg-rose-500 hover:shadow-rose-500/50 text-white text-xl'>
                                    <AiFillHeart />
                                </div>
                            </div>
                        </div>

                        {/* availability, share */}
                        <div className='flex flex-col items-start py-5 gap-8'>
                            <div className=' text-black font-bold text-xl flex items-center justify-start gap-5'>
                                <span>Availability</span> <span className={`text-${stock ? 'green' : 'red'}-500 font-semibold`}>
                                    {stock ? `In Stock(${stock})` : 'Out of Stock'}
                                </span>
                            </div>
                            <div className='flex items-center justify-start gap-5'>
                                <span >Share on</span>
                                <div className='flex justify-start items-center gap-4'>
                                    <a className='w-[38px] h-[38px] rounded-full bg-indigo-500 hover:bg-[#7fad39] text-white flex items-center justify-center' href="#" title='facebook'> <FaFacebookF /> </a>
                                    <a className='w-[38px] h-[38px] rounded-full bg-cyan-500 hover:bg-[#7fad39] text-white flex items-center justify-center' href="#" title='twitter'> <AiOutlineTwitter /> </a>
                                    <a className='w-[38px] h-[38px] rounded-full bg-purple-500 hover:bg-[#7fad39] text-white flex items-center justify-center' href="#" title='linkedin'> <FaLinkedinIn /> </a>
                                    <a className='w-[38px] h-[38px] rounded-full bg-blue-500 hover:bg-[#7fad39] text-white flex items-center justify-center' href="#" title='github'> <AiFillGithub /> </a>
                                </div>
                            </div>
                            <div className='flex gap-3 items-center'>
                                {stock ? <button className='px-8 py-3 h-full font-semibold bg-emerald-500 hover:shadow-lg hover:shadow-emerald-500/40 text-white'>Buy Now</button> : ''}
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Review, add review, rating, shop products */}
            <section className='w-full h-full mx-auto mb-16'>
                <div className='flex md:flex-wrap gap-4'>
                    <div className='w-full'>
                        <div className='grid grid-cols-1'>
                            {/* <button onClick={() => setState('reviews')} className={`py-1 px-5 hover:text-white hover:bg-green-500 ${state === 'reviews' ? 'bg-green-500 text-white' : 'bg-slate-200 text-slate-700'}`}>Reviews</button> */}
                            <button onClick={() => setState('description')} className={`py-1 px-5 hover:text-white hover:bg-green-500 ${state === 'description' ? 'bg-green-500 text-white' : 'bg-green-500 text-white'}`}>Description</button>
                        </div>
                        <div>
                            {
                                state === 'reviews' ? <Reviews /> : <div className='py-5 text-slate-700 '>{description}</div>
                            }
                        </div>
                    </div>
                </div>
            </section>

            {/* Related Products */}
            <section className='w-full h-full mx-auto mb-16'>
                <h2 className='text-2xl font-semibold py-8 text-slate-600 '>Related Products</h2>
                <div>
                    <Swiper
                        slidesPerView='auto'
                        breakpoints={{
                            1280: {
                                slidesPerView: 4
                            },
                            565: {
                                slidesPerView: 3
                            },
                            340: {
                                slidesPerView: 2
                            },
                        }}
                        spaceBetween={25}
                        loop={true}
                        pagination={{
                            clickable: true,
                            el: '.custom_bullet'
                        }}
                        modules={[Pagination]}
                        className='mySwipper'
                    >
                        {
                            relatedProducts.map((p, i) => <SwiperSlide key={i}>
                                <Link href={`/product-details/${p._id}`}>
                                    <div className='relative h-[270px]'>
                                        <div className='flex justify-center items-center absolute left-2 top-2 text-white w-[38px] h-[38px] rounded-full bg-red-500 text-xs font-semibold'>6%</div>
                                        <div className='w-full h-full '>
                                            <img className='object-cover w-full h-full' src={p.image} alt="product image" />
                                            <div className='absolute top-0 left-0 w-full h-full bg-[#000] opacity-25 hover:opacity-50 transition-all duration-500'>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='p-4 flex flex-col gap-1'>
                                        <h2 className=' text-lg'>{p.name}</h2>
                                        <div className='flex justify-start items-center gap-3'>
                                            <h2 className='text-[#6699ff] text-lg font-bold'>৳{p.price}</h2>
                                            <div className='flex items-center gap-1 text-lg'>
                                                <Ratings ratings={4.5} />
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </SwiperSlide>)
                        }
                    </Swiper>
                </div>
                <div className='w-full flex justify-center items-center py-10'>
                    <div className='custom_bullet justify-center gap-3 !w-auto'></div>
                </div>
            </section >

        </div>
    );
};

export default ProductDetails;