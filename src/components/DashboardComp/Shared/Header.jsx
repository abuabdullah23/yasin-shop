import { FaList } from "react-icons/fa";

const Header = ({ showSidebar, setShowSidebar }) => {
    return (
        <div className="fixed top-0 left-0 w-full py-5 px-2 lg:px-7 z-40 bg-[#161d31] pb-0">
            <div className="ml-0 lg:ml-[260px] rounded-md h-[65px] flex justify-between items-center bg-[#283046] text-[#d0d2d6] px-5 transition-all">
                
                {/* hamburger icon for show menu */}
                <div onClick={() => setShowSidebar(!showSidebar)} className="w-[35px] h-[35px] bg-slate-500 rounded-sm shadow-lg hover:shadow-slate-500/50 flex items-center justify-center cursor-pointer lg:hidden">
                    <span><FaList /></span>
                </div>
                <div className='hidden md:block'>
                    <input type="text" name='search' placeholder='search' className='px-3 py-2 outline-none border bg-transparent border-slate-600 rounded-md text-[#d0d2d6] focus:border-indigo-600 overflow-hidden' />
                </div>
                <div className='flex justify-center items-center gap-8 relative'>
                    <div className='flex justify-center items-center'>
                        <div className='flex justify-center items-center gap-3'>
                            <div className='flex justify-center items-center flex-col text-end'>
                                <h2 className='text-sm font-bold'>Admin Name is here</h2>
                                <span className='text-sm w-full font-normal'>Admin</span>
                            </div>
                            <img className='w-11 h-11 rounded-full overflow-hidden' src={'https://cdn.vectorstock.com/i/preview-1x/34/96/flat-business-man-user-profile-avatar-in-suit-vector-4333496.jpg'} alt="admin photo" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;