'use client'

import { deleteSingleProduct, getAllProducts } from '@/api/products';
import Search from '@/components/Search/Search';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { FaEdit, FaEye, FaTrashAlt } from 'react-icons/fa';
import Swal from 'sweetalert2';

const AllProducts = () => {
    const [searchValue, setSearchValue] = useState('');
    const [products, setProducts] = useState([]);

    // get all products
    useEffect(() => {
        getAllProducts()
            .then(data => setProducts(data))
    }, [])


    // delete product
    const handleDeleteProduct = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: 'green',
            cancelButtonColor: 'red',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                deleteSingleProduct(id).then((data) => {
                    if (data.deletedCount > 0) {
                        toast.success('Delete your product successful');
                        const remainingProducts = products.filter(p => p._id !== id);
                        setProducts(remainingProducts);
                    }
                })
                    .catch(error => {
                        toast.error(error.message);
                    })
            }
        })
    }

    return (
        <div>
            <div className='w-full p-4 shadow-xl border-2 border-slate-300 rounded-md'>
                <Search searchValue={searchValue} setSearchValue={setSearchValue} />

                <div className='relative overflow-x-auto mt-5'>
                    <table className='w-full text-sm text-left text-slate-600'>
                        <thead className='text-sm text-slate-600 uppercase border-b border-slate-700'>
                            <tr>
                                <th scope='col' className='py-3 px-4'>No</th>
                                <th scope='col' className='py-3 px-4'>Image</th>
                                <th scope='col' className='py-3 px-4'>Name</th>
                                <th scope='col' className='py-3 px-4'>Category</th>
                                <th scope='col' className='py-3 px-4'>Brand</th>
                                <th scope='col' className='py-3 px-4'>Price</th>
                                <th scope='col' className='py-3 px-4'>Discount</th>
                                <th scope='col' className='py-3 px-4'>Stock</th>
                                <th scope='col' className='py-3 px-4'>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                products.map((item, i) => <tr key={item._id}>
                                    <td scope='row' className='py-1 px-4 font-medium whitespace-nowrap'>{i + 1}</td>
                                    <td scope='row' className='py-1 px-4 font-medium whitespace-nowrap'><img className='h-11 w-11' src={item.image} alt="category image" /></td>
                                    <td scope='row' className='py-1 px-4 font-medium whitespace-nowrap'><span>{item?.name?.slice(0, 20)}...</span></td>
                                    <td scope='row' className='py-1 px-4 font-medium whitespace-nowrap'><span>{item.category}</span></td>
                                    <td scope='row' className='py-1 px-4 font-medium whitespace-nowrap'><span>{item.brand}</span></td>
                                    <td scope='row' className='py-1 px-4 font-medium whitespace-nowrap'><span>৳{item.price}</span></td>
                                    <td scope='row' className='py-1 px-4 font-medium whitespace-nowrap'><span>{item.discount === 0 ? <span>no discount</span> : <span>{item.discount}%</span>}</span></td>
                                    <td scope='row' className='py-1 px-4 font-medium whitespace-nowrap'><span>{item.stock}</span></td>

                                    <td scope='row' className='py-1 px-4 font-medium whitespace-nowrap'>
                                        <div className='flex justify-start items-center gap-4 text-white'>
                                            <Link href={`/dashboard/update-product/${item._id}`} title='এডিট' className='p-[6px] bg-orange-500 rounded-sm hover:shadow-lg hover:shadow-orange-500/50'><FaEdit /></Link>
                                            {/* <Link href={`/dashboard/update-product/${item._id}`} className='p-[6px] bg-green-500 rounded-sm hover:shadow-lg hover:shadow-green-500/50'><FaEye /></Link> */}
                                            <button onClick={()=> handleDeleteProduct(item?._id)} title='ডিলিট' className='p-[6px] bg-red-500 rounded-sm hover:shadow-lg hover:shadow-red-500/50'><FaTrashAlt /></button>
                                        </div>
                                    </td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
                {/* Pagination */}
                <div className='flex justify-between items-center mt-4 bottom-4 right-4'>
                    <div>
                        Total Products: {products.length}
                    </div>

                </div>
            </div>
        </div>
    );
};

export default AllProducts;