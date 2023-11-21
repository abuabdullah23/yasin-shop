"use client"

import { getAllCategories } from '@/api/categories';
import { getAllProducts } from '@/api/products';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { BsCurrencyDollar } from 'react-icons/bs';
import { FaUsers } from 'react-icons/fa';
import { RiProductHuntLine } from 'react-icons/ri';

const Dashboard = () => {
    const [products, setProducts] = useState([]);
    const [totalProducts, setTotalProducts] = useState();
    const [categories, setCategories] = useState([])

    // get all category
    useEffect(() => {
        getAllCategories()
            .then((data) => setCategories(data))
    }, [])

    // get all products
    useEffect(() => {
        getAllProducts()
            .then(data => {
                setProducts(data.result);
                setTotalProducts(data.total);
            })
    }, []);

    console.log(totalProducts);

    return (
        <div className='w-full p-4 shadow-xl border-2 border-slate-300 rounded-md'>
            {/* Total Overview */}
            <div className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-7'>
                {/* Total Sales */}
                <div className='flex justify-between items-center p-5 bg-slate-100 rounded-md gap-3'>
                    <div className='flex flex-col justify-start items-start text-slate-600'>
                        <h2 className='text-3xl font-bold'>$5948</h2>
                        <span>Total Sales</span>
                    </div>
                    <div className='w-[46px] h-[46px] rounded-full bg-[#28c76f1f] flex justify-center items-center text-xl'>
                        <BsCurrencyDollar className='text-[#28c76f] shadow-lg font-semibold' />
                    </div>
                </div>

                {/* Total Products */}
                <div className='flex justify-between items-center p-5 bg-slate-100 rounded-md gap-3'>
                    <div className='flex flex-col justify-start items-start text-slate-600'>
                        <h2 className='text-3xl font-bold'>{totalProducts}</h2>
                        <span>Products</span>
                    </div>
                    <div className='w-[46px] h-[46px] rounded-full bg-[#e000e81f] flex justify-center items-center text-xl'>
                        <RiProductHuntLine className='text-[#cd00d8] shadow-lg font-semibold' />
                    </div>
                </div>

                {/* Total Categories */}
                <div className='flex justify-between items-center p-5 bg-slate-100 rounded-md gap-3'>
                    <div className='flex flex-col justify-start items-start text-slate-600'>
                        <h2 className='text-3xl font-bold'>{categories.length}</h2>
                        <span>Categories</span>
                    </div>
                    <div className='w-[46px] h-[46px] rounded-full bg-[#00cfe81f] flex justify-center items-center text-xl'>
                        <FaUsers className='text-[#00cfe8] shadow-lg font-semibold' />
                    </div>
                </div>

                {/* Total Orders */}
                <div className='flex justify-between items-center p-5 bg-slate-100 rounded-md gap-3'>
                    <div className='flex flex-col justify-start items-start text-slate-600'>
                        <h2 className='text-3xl font-bold'>8</h2>
                        <span>Orders</span>
                    </div>
                    <div className='w-[46px] h-[46px] rounded-full bg-[#7367f01f] flex justify-center items-center text-xl'>
                        <AiOutlineShoppingCart className='text-[#7367f0] shadow-lg font-semibold' />
                    </div>
                </div>
            </div>

            {/* Statistics chart and message section */}
            <div className='w-full flex flex-wrap mt-7'>
                <div className='w-full lg:w-7/12 lg:pr-3'>

                </div>

                {/* messaging chat */}
                <div className='w-full lg:w-5/12 lg:pl-4 mt-6 lg:mt-0 text-slate-600'>


                </div>
            </div>

            {/* Recent Order Section */}
            <div className='w-full p-4  bg-slate-100 rounded-md mt-6'>
                <div className='flex justify-between items-center'>
                    <h2 className='font-semibold text-lg text-slate-600 pb-3'>Recent Orders</h2>
                    <Link href={'/dashboard/orders'} className='font-semibold text-sm text-slate-600'>View All</Link>
                </div>
                <div className='relative overflow-x-auto'>
                    <table className='w-full text-sm text-left text-slate-600'>
                        <thead className='text-sm text-slate-600 uppercase border-b border-slate-700'>
                            <tr>
                                <th scope='col' className='py-3 px-4'>Order Id</th>
                                <th scope='col' className='py-3 px-4'>Price</th>
                                <th scope='col' className='py-3 px-4'>Payment Status</th>
                                <th scope='col' className='py-3 px-4'>Order Status</th>
                                <th scope='col' className='py-3 px-4'>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                [1, 2, 3, 4, 5].map((item, i) => <tr key={i}>
                                    <td scope='row' className='py-3 px-4 font-medium whitespace-nowrap'>#sdjf3298u923</td>
                                    <td scope='row' className='py-3 px-4 font-medium whitespace-nowrap'>145</td>
                                    <td scope='row' className='py-3 px-4 font-medium whitespace-nowrap'><span>Pending</span></td>
                                    <td scope='row' className='py-3 px-4 font-medium whitespace-nowrap'><span>Running</span></td>
                                    <td scope='row' className='py-3 px-4 font-medium whitespace-nowrap'><Link href={'#'}>View</Link></td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>


        </div>
    );
};

export default Dashboard;