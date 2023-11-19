import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import Link from 'next/link';

const ProductSlider = ({ title, specialProducts }) => {
    const products = [
        specialProducts
    ]

console.log(specialProducts);

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

    const ButtonGroup = ({ next, previous }) => {
        return (
            <div className='flex items-center justify-between'>
                <h2 className='text-lg font-semibold text-slate-600 dark:text-gray-100'>{title}</h2>
                <div className='flex justify-center items-center gap-3 text-slate-600'>
                    <button onClick={() => previous()} className='w-[30px] h-[30px] flex justify-center items-center bg-slate-300 hover:bg-slate-100 transition-all border border-slate-400'>
                        <span><FiChevronLeft /></span>
                    </button>
                    <button onClick={() => next()} className='w-[30px] h-[30px] flex justify-center items-center bg-slate-300 hover:bg-slate-100 transition-all border border-slate-400'>
                        <span><FiChevronRight /></span>
                    </button>
                </div>
            </div>
        )
    }

    return (
        <div className='flex flex-col-reverse gap-8'>
            <Carousel
                autoPlay={false}
                infinite={true}
                arrows={false}
                responsive={responsive}
                transitionDuration={500}
                renderButtonGroupOutside={true}
                customButtonGroup={<ButtonGroup />}
            >
                {
                    products?.map((product, index) => {
                        return (
                            <div key={index} className='flex flex-col justify-start gap-2'>
                                {
                                    product?.map((p, i) => <Link href={`/product-details/${p?._id}`} className='flex justify-start items-start' key={i} to='#'>
                                        <img className='w-[110px] h-[110px]' src={p.image} alt="slider image" />
                                        <div className='px-3 flex justify-start items-start gap-1 flex-col text-slate-600 dark:text-gray-100'>
                                            <h2>{p.name}</h2>
                                            <span className='text-base font-bold'>৳{p.price}</span>
                                        </div>
                                    </Link>)
                                }
                            </div>
                        )
                    })
                }
            </Carousel>
        </div>
    );
};

export default ProductSlider;