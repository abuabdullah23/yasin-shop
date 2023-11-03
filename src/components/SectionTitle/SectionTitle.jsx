import React from 'react';

const SectionTitle = ({ sectionTitle }) => {
    return (
        <div className='text-center flex flex-col justify-center items-center text-3xl text-slate-600 font-bold relative pb-[45px]'>
            <h1>{sectionTitle}</h1>
            <div className='w-[150px] h-[4px] bg-cyan-500 mt-4'></div>
        </div>
    );
};

export default SectionTitle;

