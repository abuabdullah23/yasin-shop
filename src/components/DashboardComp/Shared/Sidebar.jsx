import Link from 'next/link';
import { BiLogOutCircle } from 'react-icons/bi';
import { allNav } from '../AllNav/allNav';
import { usePathname } from 'next/navigation';

const Sidebar = ({ showSidebar, setShowSidebar }) => {
    const pathname = usePathname();

    return (
        <div>
            <div onClick={() => setShowSidebar(false)} className={`fixed duration-200 ${!showSidebar ? 'invisible' : 'visible'} w-screen h-screen bg-[#22292f80] top-0 left-0 z-10`}></div>

            <div className={`w-[260px] fixed bg-slate-200 z-50 top-0 h-screen shadow-[0_0_15px_0_rgb(34_41_47_/_15%)] transition-all ${showSidebar ? 'left-0' : '-left-[260px] lg:left-0'}`}>
                <div className="h-[70px] flex justify-center items-center mt-3">
                    <Link href='/' className="w-[180px] h-[50px]">
                        <h2 className='text-3xl text-cyan-500 font-bold'>Yasin Shop</h2>
                    </Link>
                </div>
                <div className="px-4">
                    <ul>
                        {
                            allNav.map((n, i) => <li key={i}>
                                <Link
                                    onClick={() => setShowSidebar(false)}
                                    href={n.path}
                                    className={`${pathname === n.path ? 'bg-slate-50 shadow-indigo-500/30 text-slate-600 duration-500' : 'text-slate-600 font-normal duration-200'} px-3 py-2 rounded-sm flex justify-start items-center gap-3 hover:pl-4 hover:bg-slate-50 transition-all w-full mb-1`}>
                                    <span>{n.icon}</span>
                                    <span>{n.title}</span>
                                </Link>
                            </li>)
                        }
                        <li>
                            <button className="text-slate-600 font-normal duration-200 px-3 py-2 rounded-sm flex justify-start items-center gap-3 hover:pl-4 hover:bg-slate-100 transition-all w-full mb-1">
                                <span><BiLogOutCircle /></span>
                                <span>Logout</span>
                            </button>
                        </li>
                    </ul>
                </div>

            </div>
        </div>
    );
};

export default Sidebar;