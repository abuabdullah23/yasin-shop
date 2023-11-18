"use client"

import { getAllCategories } from '@/api/categories';
import { addProduct } from '@/api/products';
import Loader from '@/components/Loader/Loader';
import Link from 'next/link';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { BsImages } from 'react-icons/bs';
import { IoCloseSharp } from 'react-icons/io5';


const AddProduct = () => {
    const [catShow, setCatShow] = useState(false);
    const [category, setCategory] = useState('');
    const [searchValue, setSearchValue] = useState('');
    const [imageShow, setImageShow] = useState([]);
    const [images, setImages] = useState([]);
    const [categories, setCategories] = useState([]);
    const [allCategory, setAllCategory] = useState([]);
    const [loader, setLoader] = useState(false);

    const url = `https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_IMGBB_API_SECRET}`

    // get all category
    useEffect(() => {
        getAllCategories()
            .then((data) => setCategories(data))
    }, [])

    // set categories from backend
    useEffect(() => {
        setAllCategory(categories)
    }, [categories])

    // handle search category
    const categorySearch = (e) => {
        const value = e.target.value;
        setSearchValue(value);
        if (value) {
            let searchText = allCategory.filter(c => c.title.toLowerCase().indexOf(value.toLowerCase()) > -1)
            setAllCategory(searchText)
        } else {
            setAllCategory(categories)
        }
    }

    // handle image for add product
    const handleImage = (e) => {
        const files = e.target.files;
        const length = files.length;

        if (length > 0) {
            setImages([...images, ...files]);
            let imageUrl = [];

            for (let i = 0; i < length; i++) {
                imageUrl.push({ url: URL.createObjectURL(files[i]) })
            }
            setImageShow([...imageShow, ...imageUrl]);
        }
    }

    // change image when select add product image
    const changeImage = (img, index) => {
        if (img) {
            let tempUrl = imageShow;
            let tempImages = images;

            tempImages[index] = img;
            tempUrl[index] = { url: URL.createObjectURL(img) };
            setImageShow([...tempUrl]);
            setImages([...tempImages]);
        }
    }

    // remove image
    const removeImage = (i) => {
        const filterImage = images.filter((img, index) => index !== i);
        const filterImageUrl = imageShow.filter((img, index) => index !== i);
        setImages(filterImage);
        setImageShow(filterImageUrl);
    }

    // handle add product form value
    const handleAddProductForm = async (event) => {
        event.preventDefault();
        setLoader(true);
        const form = event.target;
        const name = form.name.value;
        const brand = form.brand.value;
        const stock = form.stock.value;
        const price = form.price.value;
        const discount = form.discount.value;
        const description = form.description.value;

        const formData = new FormData()
        for (let i = 0; i < images.length; i++) {
            formData.append('images', images[i])
        }

        // upload image
        const uploadedImageUrls = [];
        for (let i = 0; i < images.length; i++) {
            const formData = new FormData();
            formData.append('image', images[i]);

            try {
                const response = await fetch(url, {
                    method: 'POST',
                    body: formData,
                });

                if (response.ok) {
                    const data = await response.json();
                    if (data.data.display_url) {
                        const photoUrl = data.data.display_url;
                        uploadedImageUrls.push(photoUrl);
                    }
                } else {
                    // Handle the response error
                    console.error('Image upload failed:', response.statusText);
                }
            } catch (error) {
                console.error('Error uploading image:', error);
            }
        }

        const productInfo = {
            name,
            category,
            slug: category.split(' ').join('-').toLowerCase(),
            brand,
            stock: parseInt(stock),
            price: parseInt(price),
            discount: parseInt(discount),
            description,
            image: uploadedImageUrls
        }
        addProduct(productInfo).then((data) => {
            setLoader(false);
            if (data.insertedId) {
                toast.success('Product added successful')
                form.reset('');
                setImageShow([]);
                setCategory('');
            }
        });
    }

    // handle text area height 
    const handleAreaHeight = (e) => {
        e.target.style.height = 'inherit'
        e.target.style.height = `${e.target.scrollHeight}px`
    }

    return (
        <div>
            <div className='w-full p-4 shadow-xl border-2 border-slate-300 rounded-md'>
                <div className='flex justify-between items-center pb-4'>
                    <h2 className='text-xl font-semibold'>Add Products</h2>
                    <Link className='bg-slate-500 hover:shadow-slate-500/50 hover:shadow-lg rounded-sm px-7 py-2 my-2 text-white' href='/dashboard/all-products'>
                        All Products
                    </Link>
                </div>
                {/* form */}
                <div>
                    <form onSubmit={handleAddProductForm}>
                        <div className='flex flex-col md:flex-row gap-4 w-full mb-4'>
                            <div className='flex flex-col w-full gap-1'>
                                <label htmlFor="name">Product name</label>
                                <input required className='px-4 py-2 border border-slate-700 focus:border-indigo-500 outline-none bg-slate-100 rounded-md text-slate-600' name='name' type="text" placeholder='product name' />
                            </div>
                            <div className='flex flex-col w-full gap-1'>
                                <label htmlFor="brand">Product brand</label>
                                <input required className='px-4 py-2 border border-slate-700 focus:border-indigo-500 outline-none bg-slate-100 rounded-md text-slate-600' name='brand' type="text" placeholder='product brand' />
                            </div>
                        </div>

                        <div className='flex flex-col md:flex-row gap-4 w-full mb-4'>
                            {/* select category option */}
                            <div className='flex flex-col w-full gap-1 relative'>
                                <label htmlFor="category">Category</label>
                                <input required readOnly value={category} onClick={() => setCatShow(!catShow)} className='px-4 py-2 border border-slate-700 focus:border-indigo-500 outline-none bg-slate-100 rounded-md text-slate-600' id='category' placeholder='--select category--' type="text" name='category' />
                                <div className={`absolute top-[101%] bg-slate-300 border border-slate-400 w-full transition-all z-20 ${catShow ? 'scale-100 ' : 'scale-0'}`}>
                                    <div className='w-full px-4 py-2 fixed'>
                                        <input value={searchValue} onChange={categorySearch} className='w-full px-3 py-1 border border-slate-700 focus:border-indigo-500 outline-none bg-transparent rounded-md text-slate-600 overflow-hidden' type="text" placeholder='search' />
                                    </div>
                                    <div className='pt-14'></div>
                                    <div className='flex justify-start items-start flex-col h-[200px] overflow-y-scroll'>
                                        {
                                            allCategory.map((c, i) => <span
                                                key={i}
                                                className={`cursor-pointer hover:bg-slate-400 w-full px-4 py-1 transition-all text-black ${category === c.title && 'bg-slate-100'}`}
                                                onClick={() => {
                                                    setCatShow(false)
                                                    setCategory(c.title)
                                                    setSearchValue('')
                                                    setAllCategory(categories)
                                                }}
                                            >{c.title}</span>)
                                        }
                                    </div>
                                </div>
                            </div>
                            <div className='flex flex-col w-full gap-1'>
                                <label htmlFor="stock">Stock</label>
                                <input required className='px-4 py-2 border border-slate-700 focus:border-indigo-500 outline-none bg-slate-100 rounded-md text-slate-600' name='stock' type="number" placeholder='stock' min={0} />
                            </div>
                        </div>

                        <div className='flex flex-col md:flex-row gap-4 w-full mb-4'>
                            <div className='flex flex-col w-full gap-1'>
                                <label htmlFor="price">Price</label>
                                <input required className='px-4 py-2 border border-slate-700 focus:border-indigo-500 outline-none bg-slate-100 rounded-md text-slate-600' name='price' type="number" min={0} placeholder='Price ৳' />
                            </div>
                            <div className='flex flex-col w-full gap-1'>
                                <label htmlFor="discount">discount</label>
                                <input className='px-4 py-2 border border-slate-700 focus:border-indigo-500 outline-none bg-slate-100 rounded-md text-slate-600' name='discount' type="number" min={0} placeholder='%discount%' />
                            </div>
                        </div>

                        <div className='flex flex-col md:flex-row gap-4 w-full mb-4'>
                            <div className='flex flex-col w-full gap-1'>
                                <label htmlFor="description">Description</label>
                                <textarea required onChange={handleAreaHeight} className='px-4 py-2 border border-slate-700 focus:border-indigo-500 outline-none bg-slate-100 rounded-md text-slate-600 overflow-hidden' name='description' type="text" min={0} placeholder='Description' />
                            </div>
                        </div>

                        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 xs:gap-4 md:gap-4 w-full mb-4'>
                            {
                                imageShow.map((img, i) => <div className='h-[180px] relative border border-slate-300' key={i}>
                                    <label htmlFor={i}>
                                        <img className='w-full h-full rounded-sm object-cover' src={img.url} alt="" />
                                    </label>
                                    <input onChange={(e) => changeImage(e.target.files[0], i)} id={i} type="file" className='hidden' />
                                    <span onClick={() => removeImage(i)} className='p-2 z-10 cursor-pointer bg-red-600 hover:shadow-lg hover:shadow-red-500/50 text-white absolute top-1 right-1 rounded-full'><IoCloseSharp /></span>
                                </div>)
                            }
                            <label htmlFor="image" className='flex flex-col justify-center items-center h-[180px] cursor-pointer border border-dashed w-full hover:border-indigo-500 border-slate-600 rounded-sm'>
                                <span><BsImages /></span>
                                <span>select image</span>
                            </label>
                            <input multiple onChange={handleImage} className='hidden' type="file" name='image' id='image' />
                        </div>
                        {/* submit button */}
                        <button
                            disabled={loader ? true : false}
                            type="submit"
                            className={`py-2 px-4 w-fit bg-cyan-500 hover:shadow-cyan-500/20 hover:shadow-lg text-white rounded-md mb-3 ${loader && 'bg-cyan-400'} `}>
                            {
                                loader ? <Loader loadingText={'Adding Product...'} /> : 'Add Product'
                            }
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddProduct;