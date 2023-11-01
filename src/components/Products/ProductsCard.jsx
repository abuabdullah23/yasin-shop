"use client"

import { FaEye } from 'react-icons/fa';
import { AiFillHeart, AiOutlineShoppingCart } from 'react-icons/ai';
import Ratings from '../Ratings/Ratings';
import Link from 'next/link';

const ProductsCard = ({ product }) => {

    return (
        <div className='border group transition-all duration-500 hover:shadow-md hover:-mt-2'>
            <div className='relative overflow-hidden'>
                <div className='flex justify-center items-center absolute left-2 top-2 text-white w-[38px] h-[38px] rounded-full bg-red-500 text-xs font-semibold'>6%</div>

                <div className='h-[240px] w-full'>
                    <img className='object-cover' src={'https://images.pexels.com/photos/2536965/pexels-photo-2536965.jpeg?cs=srgb&dl=pexels-suzy-hazelwood-2536965.jpg&fm=jpg'} alt="product image" />
                </div>

                <ul className='flex justify-center items-center gap-2 transition-all duration-500 absolute -bottom-10 group-hover:bottom-3 w-full'>
                    <li className='w-[38px] h-[38px] rounded-full cursor-pointer flex justify-center items-center bg-gray-100 hover:bg-cyan-500 hover:text-white hover:rotate-[360deg] transition-all duration-500'><AiFillHeart /></li>
                    <Link href={`/details/dssldfj`} className='w-[38px] h-[38px] rounded-full cursor-pointer flex justify-center items-center bg-gray-100 hover:bg-cyan-500 hover:text-white hover:rotate-[360deg] transition-all duration-500'><FaEye /></Link>
                    <li className='w-[38px] h-[38px] rounded-full cursor-pointer flex justify-center items-center bg-gray-100 hover:bg-cyan-500 hover:text-white hover:rotate-[360deg] transition-all duration-500'><AiOutlineShoppingCart /></li>
                </ul>
            </div>

            {/* price and ratings */}
            <div className='py-3 px-2 text-slate-600 flex flex-col gap-1'>
                <h2>Long Sleeve casual shirt for Man</h2>
                <div className='flex justify-start items-center gap-3'>
                    <span className='text-base font-bold'>৳324</span>
                    <div className='flex'>
                        <Ratings ratings={4.5} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductsCard;