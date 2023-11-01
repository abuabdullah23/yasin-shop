import Link from 'next/link';
import { FaCopyright, FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <div>
            <footer className="footer grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 items-center px-10 py-16 bg-slate-200 dark:bg-slate-950 transition-colors text-slate-700">
                <div className='md:col-span-2 pe-5'>
                    <Link href="/" className="w-1/3">
                        <h3 className="text-xl">
                            Yasin<span className="font-bold text-[#24A3B5]">Shop</span>
                        </h3>
                    </Link>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, iusto! Illum exercitationem nulla nemo non.
                    </p>

                    <div className='flex gap-3 mt-5'>
                        <a className='bg-slate-500 hover:bg-slate-300 hover:text-cyan-600 rounded-full p-2 text-center cursor-pointer'><FaFacebook className='w-5 h-5' /></a>

                        <a className='bg-slate-500 hover:bg-slate-300 hover:text-cyan-600 rounded-full p-2 text-center cursor-pointer'><FaTwitter className='w-5 h-5' /></a>

                        <a className='bg-slate-500 hover:bg-slate-300 hover:text-cyan-600 rounded-full p-2 text-center cursor-pointer'><FaLinkedin className='w-5 h-5' /></a>

                        <a className='bg-slate-500 hover:bg-slate-300 hover:text-cyan-600 rounded-full p-2 text-center cursor-pointer'><FaInstagram className='w-5 h-5' /></a>
                    </div>
                </div>
                <div className='flex flex-col gap-2'>
                    <span className="text-lg font-semibold">About</span>
                    <Link href='/'>Home</Link>
                    <Link href='/add-product'>Top Rated Products</Link>
                    <Link href='/my-cart'>My Cart</Link>
                </div>
                <div className='flex flex-col gap-2'>
                    <span className="text-lg font-semibold">Company</span>
                    <a>Get Your Products</a>
                    <a>About</a>
                    <a>Affiliate</a>
                </div>
                <div className='flex flex-col gap-2'>
                    <span className="text-lg font-semibold">Contact</span>
                    <a>yasinshop@gmail.com</a>
                    <a>+00 557 855 522</a>
                    <a>254, Jhenaidah, Khulna</a>
                </div>
            </footer>
            <div className='flex gap-2 items-center justify-center bg-cyan-700 text-white px-5 py-3'>
                <FaCopyright />
                <p><small>All right reserved 2023</small></p>
            </div>
        </div>
    );
};

export default Footer;