"use client"

import { FaEye } from 'react-icons/fa';
import { AiFillHeart, AiOutlineShoppingCart } from 'react-icons/ai';
import Ratings from '../Ratings/Ratings';
import Link from 'next/link';

const ProductsCard = ({ product, styles }) => {
    const { _id, name, price, image, discount } = product;

    return (
        <div className={`border bg-white rounded-md group transition-all duration-500 hover:shadow-md hover:-mt-2 ${styles === 'list' && 'flex items-center gap-5'}`}>
            <div className={`relative overflow-hidden border-b rounded-lg ${styles === 'list' && 'w-[30%] border-r'}`}>
                <div className={`h-[180px] w-full`}>
                    <img className='w-full h-full object-cover rounded-lg' src={image[0]} alt="product image" />
                </div>

                <ul className='flex justify-center items-center gap-2 transition-all duration-500 absolute -bottom-10 group-hover:bottom-3 w-full'>
                    <li className='w-[38px] h-[38px] rounded-full cursor-pointer flex justify-center items-center bg-gray-100 hover:bg-cyan-500 hover:text-white hover:rotate-[360deg] transition-all duration-500'><AiFillHeart /></li>
                    <Link href={`/product-details/${_id}`} className='w-[38px] h-[38px] rounded-full cursor-pointer flex justify-center items-center bg-gray-100 hover:bg-cyan-500 hover:text-white hover:rotate-[360deg] transition-all duration-500'><FaEye /></Link>
                    <li className='w-[38px] h-[38px] rounded-full cursor-pointer flex justify-center items-center bg-gray-100 hover:bg-cyan-500 hover:text-white hover:rotate-[360deg] transition-all duration-500'><AiOutlineShoppingCart /></li>
                </ul>
            </div>

            {/* price and ratings */}
            <div className='py-2 px-3 text-slate-600 flex flex-col gap-2'>
                <h2 className='text-lg font-semibold'>{name}</h2>
                <div className='flex items-center justify-start gap-3'>
                    <div className='flex'>
                        <Ratings ratings={4.5} />
                    </div>
                    <p className='text-base font-semibold text-slate-400'>4.5</p>
                    {/* <p className='text-base font-semibold text-slate-400'>(400 sell)</p> */}
                </div>
                <div className='flex justify-start items-center gap-3 text-lg'>
                    <span className='font-semibold'>৳ {price - Math.floor((price * discount) / 100)}</span>
                    {
                        discount && <span className='line-through text-slate-400'>৳ {price}</span>
                    }
                    {
                        discount && <span className='py-[2px] px-2 rounded-md bg-red-500 text-gray-100 text-base'>{discount}% Off</span>
                    }
                </div>
            </div>
        </div>
    );
};

export default ProductsCard;