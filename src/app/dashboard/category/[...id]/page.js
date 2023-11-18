"use client"

import { getSingleCategory, updateCategory } from '@/api/categories';
import Loader from '@/components/Loader/Loader';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { BsImage } from 'react-icons/bs';

const page = () => {
    const { id } = useParams();
    const [category, setCategory] = useState('');
    const [loader, setLoader] = useState(false);
    const [categoryImage, setCategoryImage] = useState('');
    const [imageShow, setImageShow] = useState('');
    const imgUploadUrl = `https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_IMGBB_API_SECRET}`


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

    // get single category
    useEffect(() => {
        getSingleCategory(id)
            .then(data => {
                setCategory(data)
                setImageShow(data.image)
            })
    }, [])

    const handleUpdateCategory = async (e) => {
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

        const updateInfo = {
            title: category_name,
            slug: category_name.split(' ').join('-').toLowerCase(),
            bn_title,
            image: imgUrl || category.image,
            imgDeleteUrl: imgDeleteUrl || category.imgDeleteUrl
        }

        // add category method
        updateCategory(category?._id, updateInfo)
            .then((data) => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    setLoader(false);
                    toast.success('Category Updated successful')
                }else{
                    toast.error('You have not change anything.')
                    setLoader(false);
                }
            })
            .catch(error => {
                toast.error(error.message);
                setLoader(false)
            })
    }

    return (
        <div className='w-full md:w-5/12 mx-auto p-5 lg:p-0'>
            <h2 className='text-center text-lg font-semibold mb-5'>
                Update Category: <span className='text-cyan-600'>{category.title}</span>
            </h2>
            <form onSubmit={handleUpdateCategory}>
                <div className='flex flex-col w-full gap-1 mb-3'>
                    <label htmlFor="category_name">Category name</label>
                    <input className='px-4 py-2 border border-slate-700 focus:border-indigo-500 outline-none bg-slate-200 text-gray-700 rounded-md mb-3'
                        readOnly type="text" id='category_name' name='category_name' defaultValue={category.title} placeholder='Edit category name' required />

                    <label htmlFor="category_name">Bangla Category Name</label>
                    <input className='px-4 py-2 border border-slate-700 focus:border-indigo-500 outline-none bg-slate-200 text-gray-700 rounded-md '
                        type="text" id='bn_title' name='bn_title' defaultValue={category.bn_title} placeholder='Edit bangla category name' required />
                </div>
                <div>
                    <label className='flex flex-col justify-center items-center h-[238px] cursor-pointer border border-[#7fa9ff] border-dashed hover:border-indigo-500 w-full' htmlFor="image">
                        {
                            imageShow ? <img className='h-full w-full object-contain' src={imageShow} alt="image" /> :
                                <>
                                    <span><BsImage /></span>
                                    <span>Select Image</span>
                                </>
                        }
                    </label>
                </div>
                <input
                    onChange={handleImage}
                    className='hidden' type="file" name="image" id="image" />
                <div className='mt-3'>
                    {/* submit button */}
                    <button
                        disabled={loader ? true : false}
                        type="submit"
                        className={`py-2 px-4 text-white w-full bg-cyan-500 hover:shadow-cyan-500/20 hover:shadow-lg rounded-md mb-3 ${loader && 'bg-cyan-400'} `}>
                        {
                            loader ? <Loader loadingText={'Updating...'} /> : 'Update Category'
                        }
                    </button>
                </div>
            </form>
        </div>
    );
};

export default page;