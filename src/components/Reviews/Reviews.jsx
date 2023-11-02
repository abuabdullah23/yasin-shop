"use client"

import { useState } from 'react';
import RatingReact from 'react-rating'
import { CiStar } from 'react-icons/ci';
import { AiFillStar } from 'react-icons/ai';
import Ratings from '../Ratings/Ratings';
import RatingTemp from '../Ratings/RatingTemp';
import Link from 'next/link';

const Reviews = () => {
    const [giveRating, setGiveRating] = useState();
    const user = {};

    return (
        <div className='py-5 text-slate-600 dark:text-gray-100'>
            <div className='flex gap-10 flex-col lg:flex-row'>
                <div className='flex flex-col gap-2 justify-start items-start py-4'>
                    <div>
                        <span className='text-6xl font-semibold'>4.5</span>
                        <span className='text-3xl font-semibold'>/5</span>
                    </div>
                    <div className='flex gap-1 text-4xl'>
                        <Ratings ratings={4.5} />
                    </div>
                    <p className='text-sm'>23 Ratings</p>
                </div>

                {/* rating view */}
                <div className='flex flex-col gap-2 py-4 text-slate-600 dark:text-gray-100'>
                    {/* 5 */}
                    <div className='flex justify-start items-center gap-5'>
                        <div className='text-base flex gap-1'>
                            <RatingTemp rating={5} />
                        </div>
                        <div className='w-[200px] h-[14px] bg-slate-200 relative'>
                            <div className='w-[60%] h-full bg-[#EDBB0E]'></div>
                        </div>
                        <p className='w-[0%] text-sm'>10</p>
                    </div>
                    {/* 4 */}
                    <div className='flex justify-start items-center gap-5'>
                        <div className='text-base flex gap-1'>
                            <RatingTemp rating={4} />
                        </div>
                        <div className='w-[200px] h-[14px] bg-slate-200 relative'>
                            <div className='w-[75%] h-full bg-[#EDBB0E]'></div>
                        </div>
                        <p className='w-[0%] text-sm'>20</p>
                    </div>
                    {/* 3 */}
                    <div className='flex justify-start items-center gap-5'>
                        <div className='text-base flex gap-1'>
                            <RatingTemp rating={3} />
                        </div>
                        <div className='w-[200px] h-[14px] bg-slate-200 relative'>
                            <div className='w-[50%] h-full bg-[#EDBB0E]'></div>
                        </div>
                        <p className='w-[0%] text-sm'>8</p>
                    </div>
                    {/* 2 */}
                    <div className='flex justify-start items-center gap-5'>
                        <div className='text-base flex gap-1'>
                            <RatingTemp rating={2} />
                        </div>
                        <div className='w-[200px] h-[14px] bg-slate-200 relative'>
                            <div className='w-[40%] h-full bg-[#EDBB0E]'></div>
                        </div>
                        <p className='w-[0%] text-sm'>5</p>
                    </div>
                    {/* 1 */}
                    <div className='flex justify-start items-center gap-5'>
                        <div className='text-base flex gap-1'>
                            <RatingTemp rating={1} />
                        </div>
                        <div className='w-[200px] h-[14px] bg-slate-200 relative'>
                            <div className='w-[10%] h-full bg-[#EDBB0E]'></div>
                        </div>
                        <p className='w-[0%] text-sm'>2</p>
                    </div>
                    {/* 0 */}
                    <div className='flex justify-start items-center gap-5'>
                        <div className='text-base flex gap-1'>
                            <RatingTemp rating={0} />
                        </div>
                        <div className='w-[200px] h-[14px] bg-slate-200 relative'>
                            <div className='w-[0%] h-full bg-[#EDBB0E]'></div>
                        </div>
                        <p className='w-[0%] text-sm'>0</p>
                    </div>
                </div>
            </div>

            <h2 className='text-xl font-bold py-5'>Product Reviews 30</h2>
            <div className='flex flex-col gap-8 pb-10 pt-4'>
                {
                    [1, 2, 3, 4, 5, 6].map((r, i) => <div key={i} className='flex flex-col gap-1'>
                        <div className='flex justify-between items-center'>
                            <div className='flex gap-1 text-xl'>
                                <RatingTemp rating={4} />
                            </div>
                            <span>{7 + i} oct 2023</span>
                        </div>
                        <span>Sheikh Farid</span>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non vero optio ut unde corrupti aut expedita aliquid perspiciatis quisquam dolor.</p>
                    </div>)
                }

                {/* pagination */}

            </div>

            {/* send review */}
            <div>
                {
                    user ? <div className='flex flex-col gap-3'>
                        <h3 className='text-2xl font-semibold'>Give your Feedback</h3>
                        <div className='flex gap-1'>
                            <RatingReact
                                onChange={(e) => setGiveRating(e)}
                                initialRating={giveRating}
                                emptySymbol={<span className='text-4xl text-slate-600 dark:text-[#EDBB0E]'><CiStar /></span>}
                                fullSymbol={<span className='text-4xl text-[#EDBB0E]'><AiFillStar /></span>}
                            />
                        </div>
                        <form action="">
                            <textarea className='border dark:border-slate-600 outline-0 p-3 w-full bg-transparent' name="" id="" cols="30" rows="5"></textarea>
                            <div className='mt-4'>
                                <button className='py-[6px] px-5 bg-indigo-500 hover:shadow-lg hover:shadow-indigo-500/50 text-white rounded-sm'>Submit</button>
                            </div>
                        </form>
                    </div> : <div>
                        <h3 className='mb-4'>To give your feedback, Login Please!</h3>
                        <Link href='/' className='py-[6px] px-5 bg-indigo-500 hover:shadow-lg hover:shadow-indigo-500/50 text-white rounded-sm'>Login</Link>
                    </div>
                }

            </div>
        </div>
    );
};

export default Reviews;