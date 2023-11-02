import { AiFillDashboard, AiOutlinePlus, AiOutlineShoppingCart } from "react-icons/ai";
import { BiCategory } from "react-icons/bi";
import { BsCurrencyDollar, BsChat } from "react-icons/bs";
import { RiProductHuntLine } from "react-icons/ri";

export const allNav = [
    {
        id: 1,
        title: 'Dashboard',
        icon: <AiFillDashboard />,
        path: '/dashboard'
    },
    {
        id: 2,
        title: 'Orders',
        icon: <AiOutlineShoppingCart />,
        path: '/dashboard/orders'
    },
    {
        id: 3,
        title: 'Category',
        icon: <BiCategory />,
        path: '/dashboard/category'
    },
    {
        id: 4,
        title: 'Add Product',
        icon: <AiOutlinePlus />,
        path: '/dashboard/add-product'
    },
    {
        id: 5,
        title: 'All Products',
        icon: <RiProductHuntLine />,
        path: '/dashboard/all-products'
    },
    {
        id: 6,
        title: 'Discount Products',
        icon: <RiProductHuntLine />,
        path: '/dashboard/discount-products'
    },
    {
        id: 7,
        title: 'Payments',
        icon: <BsCurrencyDollar />,
        path: '/dashboard/payments'
    },
    {
        id: 8,
        title: 'Chat Customer',
        icon: <BsChat />,
        path: '/dashboard/chat-customer'
    }
]