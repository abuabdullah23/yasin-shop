"use client"

import Header from '@/components/DashboardComp/Shared/Header';
import Sidebar from '@/components/DashboardComp/Shared/Sidebar';
import { useState } from 'react';

const DashboardLayout = ({ children }) => {
    const [showSidebar, setShowSidebar] = useState(false)

    return (
        <div className="bg-[#161d31] w-full min-h-screen">
            <Header showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
            <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />

            <div className="ml-0 lg:ml-[260px] pt-[95px] px-2 lg:px-8 transition-all text-[#d0d2d6]">
                {children}
            </div>
        </div>
    );
};

export default DashboardLayout;