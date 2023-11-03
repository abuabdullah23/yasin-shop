"use client"

import { useEffect, useState } from 'react';
import { Range } from 'react-range';
import Ratings from '../Ratings/Ratings';
import ProductSlider from './ProductSlider';
import { getAllCategories } from '@/api/categories';
import { BsFillGridFill } from 'react-icons/bs';
import { FaThList } from 'react-icons/fa';
import ProductsCard from './ProductsCard';
import { getAllProducts } from '@/api/products';

const AllProductsPage = () => {
    const [filter, setFilter] = useState(false);
    const [rangeState, setRangeState] = useState({ values: [50, 5000] })
    const [styles, setStyles] = useState('grid');
    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);

    // get categories
    useEffect(() => {
        getAllCategories()
            .then(data => {
                setCategories(data)
            })
    }, []);

    // get all products
    useEffect(() => {
        getAllProducts()
            .then(data => {
                setProducts(data)
            })
    }, []);

    return (
        <section className='py-16'>
            <div>
                <div className={`block lg:hidden ${filter ? 'mb-6' : 'mb-6'}`}>
                    <button onClick={() => setFilter(!filter)} className='text-center w-full py-2 px-3 bg-cyan-500 text-white'>Filter Product</button>
                </div>
                <div className='w-full grid grid-cols-1 lg:grid-cols-4 gap-10'>
                    {/* hidden for medium device : Tablet & Mobile */}
                    <div className={`w-full lg:col-span-1 text-slate-600 flex flex-col gap-4 ${filter ? 'h-auto overflow-auto mb-0' : 'hidden lg:block'}`}>
                        <div className='w-full'>
                            {/* show category wise products */}
                            <div>
                                <h2 className='text-3xl font-bold mb-3'>Category</h2>
                                <div className='py-4 h-[400px] overflow-y-auto'>
                                    {
                                        categories.map((c, i) => <div key={i} className='flex justify-start items-center gap-2 py-1'>
                                            <input type="checkbox" name="" id={c.title} />
                                            <label className='block cursor-pointer' htmlFor={c.title}>{c.title}</label>
                                        </div>)
                                    }
                                </div>
                            </div>

                            {/* range tracking for filter products */}
                            <div className='py-8 flex flex-col gap-5'>
                                <h2 className='text-3xl font-bold'>Price</h2>
                                <div className='px-4 lg:px-0'>
                                    <Range
                                        step={5}
                                        min={50}
                                        max={5000}
                                        values={rangeState.values}
                                        onChange={(values) => setRangeState({ values })}
                                        renderTrack={({ props, children }) => (
                                            <div {...props} className='ml-2 w-full h-[6px] bg-slate-200 rounded-full cursor-default'>
                                                {children}
                                            </div>
                                        )}
                                        renderThumb={({ props }) => (
                                            <div {...props} className='w-[15px] h-[15px] bg-blue-500 rounded-full cursor-default' />
                                        )}
                                    />
                                    <div className='mt-4'>
                                        <span className='text-lg font-bold text-red-500'>৳{Math.floor(rangeState.values[0])} - ৳{Math.floor(rangeState.values[1])}</span>
                                    </div>
                                </div>
                            </div>

                            {/* show rating wise products */}
                            <div className='py-2 flex flex-col gap-5 md:mb-8'>
                                <h2 className='text-3xl font-bold'>Rating</h2>
                                <div className='flex flex-col gap-3'>
                                    <div className='flex items-center gap-2'>
                                        <Ratings ratings={5} /> </div>
                                    <div className='flex items-center gap-2'>
                                        <Ratings ratings={4} /> </div>
                                    <div className='flex items-center gap-2'>
                                        <Ratings ratings={3} /> </div>
                                    <div className='flex items-center gap-2'>
                                        <Ratings ratings={2} /> </div>
                                    <div className='flex items-center gap-2'>
                                        <Ratings ratings={1} /> </div>
                                    <div className='flex items-center gap-2'>
                                        <Ratings ratings={0} /> </div>
                                </div>
                            </div>

                            {/* Latest Products */}
                            <div className='hidden lg:block'>
                                <div className='py-5 flex flex-col gap-4'>
                                    <ProductSlider title='Latest Products' />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* products section : main content */}
                    <div className='w-full lg:col-span-3'>
                        <div className='w-full'>
                            <div className='py-4 bg-white mb-10 px-3 rounded-md flex justify-between items-start border '>
                                <h2 className='text-lg font-medium text-slate-600'>Products: {12}</h2>
                                <div className='flex justify-center items-center gap-3'>
                                    <select className='p-1 border outline-0 text-slate-600 font-semibold' name='' id=''>
                                        <option value="">Sort By</option>
                                        <option value="">Low to High Price</option>
                                        <option value="">High to Low Price</option>
                                    </select>

                                    {/* hidden md and sm device */}
                                    <div className='hidden lg:block'>
                                        <div className='flex justify-center items-start gap-4'>
                                            <div onClick={() => setStyles('grid')} className={`p-2 text-slate-600 hover:bg-slate-300 cursor-pointer rounded-sm ${styles === 'grid' && 'bg-slate-300'}`}>
                                                <BsFillGridFill />
                                            </div>
                                            <div onClick={() => setStyles('list')} className={`p-2 text-slate-600 hover:bg-slate-300 cursor-pointer rounded-sm ${styles === 'list' && 'bg-slate-300'}`}>
                                                <FaThList />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Products grid/list view */}
                            <div className='pb-8'>
                                <div className={`w-full grid gap-4 grid-cols-1 ${styles === 'grid' ? 'md:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'}`}>
                                    {
                                        products.map((product, i) => <ProductsCard styles={styles} key={i} product={product} />)
                                    }
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section >
    );
};

export default AllProductsPage;