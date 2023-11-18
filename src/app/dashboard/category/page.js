"use client"

import { addCategory, deleteCategory, getAllCategories } from '@/api/categories';
import Loader from '@/components/Loader/Loader';
import Search from '@/components/Search/Search';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { AiOutlineClose } from 'react-icons/ai';
import { BsImage } from 'react-icons/bs';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import Swal from 'sweetalert2';

const Category = () => {
    const [categories, setCategories] = useState([])
    const [allCategory, setAllCategory] = useState([])
    const [loader, setLoader] = useState(false);
    const [show, setShow] = useState(false);
    const [searchValue, setSearchValue] = useState('');
    const [categoryImage, setCategoryImage] = useState('');
    const [imageShow, setImageShow] = useState('');
    const imgUploadUrl = `https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_IMGBB_API_SECRET}`

    // get all category
    useEffect(() => {
        getAllCategories()
            .then((data) => setCategories(data))
    }, [])

    // set categories from backend
    useEffect(() => {
        setAllCategory(categories)
    }, [categories])

    // refetch category
    const refetchCategory = () => {
        getAllCategories()
            .then((data) => setCategories(data))
    }

    // handleImage
    const handleImage = (e) => {
        const files = e.target.files;
        if (files.length > 0) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImageShow(reader.result); // display the image preview
                setCategoryImage(reader.result.split(',')[1]); // set base64 data
            };
            reader.readAsDataURL(files[0]);
        }
    }


    const handleAddCategory = async (e) => {
        e.preventDefault();
        setLoader(true)
        const form = e.target;
        const category_name = form.category_name.value;
        const bn_title = form.bn_title.value;
        const formData = new FormData();
        formData.append('image', categoryImage);

        // upload image in imgBB
        let imgUrl = '';
        let imgDeleteUrl = '';
        try {
            const response = await fetch(imgUploadUrl, {
                method: 'POST',
                body: formData,
            });

            if (response.ok) {
                const data = await response.json();
                if (data.data.display_url) {
                    imgUrl = data.data.display_url;
                }
                if (data.data.delete_url) {
                    imgDeleteUrl = data.data.delete_url;
                }
            } else {
                // Handle the response error
                console.error('Image upload failed:', response.statusText);
            }
        } catch (error) {
            console.error('Error uploading image:', error);
        }

        const categoryData = {
            title: category_name,
            slug: category_name.split(' ').join('-').toLowerCase(),
            bn_title,
            image: imgUrl,
            imgDeleteUrl
        }
        // add category method
        addCategory(categoryData)
            .then((data) => {
                setLoader(false);
                if (data.insertedId) {
                    toast.success('Category added successful')
                    form.reset('');
                    setImageShow('');
                    refetchCategory();
                }
                if (data.error === true) {
                    toast.error(data.message)
                }
            })
            .catch(error => {
                toast.error(error.message);
                setLoader(false)
            })
    }


    // delete category
    const handleDeleteCategory = (id, deleteImgUrl) => {
        console.log(id, deleteImgUrl);
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
                deleteCategory(id).then((data) => {
                    if (data.deletedCount > 0) {
                        toast.success('Delete your category successful');
                        const remainingCategory = allCategory.filter(c => c._id !== id);
                        setCategories(remainingCategory);
                    }
                })
                    .catch(error => {
                        toast.error(error.message);
                    })
            }
        })
    }


    return (
        <div className='w-full p-4 shadow-xl border-2 border-slate-300 rounded-md'>
            {/* Conditional rendering: show only small device */}
            <div className='flex lg:hidden justify-between items-center mb-2 p-4 bg-slate-200 text-gray-700 rounded-md'>
                <h1 className='font-semibold text-sm'>Categories</h1>
                <button onClick={() => setShow(true)} className='bg-cyan-500 shadow-lg hover:shadow-cyan-500/50 px-4 py-2 cursor-pointer rounded-sm text-sm text-white'>Add</button>
            </div>

            <div className='flex flex-wrap w-full'>
                <div className='w-full lg:w-7/12 p-4 bg-slate-200 text-gray-700 rounded-md'>
                    <div className='flex flex-wrap items-center justify-between gap-3'>
                        <p>All Category: {allCategory.length}</p>
                        <Search
                            searchValue={searchValue}
                            setSearchValue={setSearchValue} />
                    </div>

                    {/* Table data */}
                    <div className='relative overflow-y-auto h-[415px]'>
                        <table className='w-full text-sm text-left '>
                            <thead className='text-sm  uppercase border-b border-slate-700'>
                                <tr>
                                    <th scope='col' className='py-3 px-4'>No</th>
                                    <th scope='col' className='py-3 px-4'>Image</th>
                                    <th scope='col' className='py-3 px-4'>Name</th>
                                    <th scope='col' className='py-3 px-4'>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    allCategory.map((c, i) => <tr key={i} className='hover:bg-slate-100 transition-all duration-200'>
                                        <td scope='row' className='py-1 px-4 font-medium whitespace-nowrap'>{i + 1}</td>
                                        <td scope='row' className='py-1 px-4 font-medium whitespace-nowrap'>
                                            <img className='h-11 w-11' src={c.image} alt="category image" /></td>
                                        <td scope='row' className='py-1 px-4 font-medium whitespace-nowrap' title={c.bn_title}><span>{c.title}</span></td>
                                        <td scope='row' className='py-1 px-4 font-medium whitespace-nowrap'>
                                            <div className='flex justify-start items-center gap-4'>
                                                <Link href={`/dashboard/category/${c._id}`} title='এডিট করুন' className='p-[6px] bg-orange-500 text-white rounded-sm hover:shadow-lg hover:shadow-orange-500/50'><FaEdit /></Link>
                                                <button onClick={() => handleDeleteCategory(c?._id, c?.imgDeleteUrl)} title='ডিলিট করুন' className='p-[6px] bg-red-500 text-white rounded-sm hover:shadow-lg hover:shadow-red-500/50'><FaTrashAlt /></button>
                                            </div>
                                        </td>
                                    </tr>)
                                }
                            </tbody>
                        </table>
                    </div>
                    {/* Pagination */}
                    <div className='flex justify-end mt-4 bottom-4 right-4'>

                    </div>
                </div>

                <div className={`w-[320px] lg:w-5/12 translate-x-100 lg:relative lg:right-0 fixed ${show ? 'right-0 z-[9999]' : '-right-[340px]'}  top-0 transition-all duration-500`}>
                    <div className='w-full pl-6'>
                        <div className='bg-slate-200 text-gray-700 h-screen lg:h-auto px-3 py-2 lg:rounded-md '>
                            <div className='flex justify-between items-center mb-4'>
                                <h2 className='font-semibold text-xl'>Add Category</h2>
                                <div onClick={() => setShow(false)} className='block lg:hidden cursor-pointer'>
                                    <AiOutlineClose className='' />
                                </div>
                            </div>
                            <form onSubmit={handleAddCategory}>
                                <div className='flex flex-col w-full gap-1 mb-3'>
                                    <label htmlFor="category_name">Category name</label>
                                    <input className='px-4 py-2 border border-slate-700 focus:border-cyan-500 outline-none bg-slate-200 text-gray-700 rounded-md '
                                        type="text" id='category_name' name='category_name' placeholder='category name' required />
                                    <label htmlFor="category_name">Bangla Category Name</label>
                                    <input className='px-4 py-2 border border-slate-700 focus:border-cyan-500 outline-none bg-slate-200 text-gray-700 rounded-md '
                                        type="text" id='bn_title' name='bn_title' placeholder='Bangla category name' required />
                                </div>
                                <div>
                                    <label className='flex flex-col justify-center items-center h-[238px] cursor-pointer border border-[#7fa9ff] border-dashed hover:border-cyan-500 w-full' htmlFor="image">
                                        {
                                            imageShow ? <img className='h-full w-full object-cover object-top' src={imageShow} alt="image" /> :
                                                <>
                                                    <span><BsImage /></span>
                                                    <span>Select Image</span>
                                                </>
                                        }
                                    </label>
                                </div>
                                <input
                                    onChange={handleImage}
                                    className='hidden' type="file" name="image" id="image" required />
                                <div className='mt-3'>
                                    {/* submit button */}
                                    <button
                                        disabled={loader ? true : false}
                                        type="submit"
                                        className={`py-2 px-4 text-white w-full bg-cyan-500 hover:shadow-cyan-500/20 hover:shadow-lg rounded-md mb-3 ${loader && 'bg-cyan-400'} `}>
                                        {
                                            loader ? <Loader loadingText={'Uploading...'} /> : 'Add Category'
                                        }
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Category;