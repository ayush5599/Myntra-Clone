import React from 'react'
import { FaRegUser } from "react-icons/fa";
import { FiHeart } from "react-icons/fi";
import { ImSearch } from "react-icons/im";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Header() {

    const numberOfItemsInBag = useSelector(state => state.bag.bagTotal)

    return (
        <div className='w-screen flex flex-row items-center justify-between shadow-md'>
            {/* left */}
            <div className='flex flex-row items-center ml-16'>
                <Link to={'/home'}>
                    <img
                        src="../../Public/images/logo.png"
                        alt="loding..."
                        className='w-12' />
                </Link>

                <div className='flex flex-row items-center w-[670px] ml-10 '>
                    <div className='relative group'>
                        <p className='text-xs font-bold text-slate-700 p-5 py-8  border-b-4 border-white hover:cursor-pointer hover:border-b-red-600  transition duration-200 '>MEN</p>
                        <div className='absolute bg-white hidden group-hover:flex'>
                            <div>
                                <h4>Topwear</h4>
                                <p>T-Shirts</p>
                                <p>Casual Shirts</p>
                                <p>Formal Shirts</p>
                                <p>Sweatshirts</p>
                                <p>Sweaters</p>
                                <p>Jackets</p>
                                <p>Blazers & Coats</p>
                                <p>Suits</p>
                                <p>Rain Jackets</p>
                            </div>
                            <div>
                                <h4>Indian & Festive Wear</h4>
                                <p>Kurtas & Kueta Sets</p>
                                <p>Sherwanis</p>
                                <p>Nehru Jackets</p>
                                <p>Dhotis</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <p className='text-xs font-bold text-slate-700 p-5 py-8 border-b-4 border-white hover:cursor-pointer hover:border-b-pink-600 transition duration-200 '>WOMEN</p>
                    </div>
                    <div>
                        <p className='text-xs font-bold text-slate-700 p-5 py-8 border-b-4 border-white hover:cursor-pointer hover:border-b-purple-600  transition duration-200 '>KIDS</p>
                    </div>
                    <div>
                        <p className='text-xs font-bold text-slate-700 p-5 py-8 border-b-4 border-white hover:cursor-pointer hover:border-b-blue-600  transition duration-200 '>HOME & LIVING</p>
                    </div>
                    <div>
                        <p className='text-xs font-bold text-slate-700 p-5 py-8 border-b-4 border-white hover:cursor-pointer hover:border-b-green-600  transition duration-200 '>BEAUTY</p>
                    </div>
                    <div>
                        <p className='text-xs font-bold text-slate-700 p-5 py-8 border-b-4 border-white hover:cursor-pointer hover:border-b-orange-600  transition duration-200 '>STUDIO</p>
                    </div>
                </div>
            </div>

            {/* right */}
            <div className='flex flex-row items-center mr-16'>
                <div className='flex flex-row items-center'>
                    <div className='mr-0.5 bg-gray-100 w-10 h-10 rounded-ss-xl pt-3 pl-3' >
                        <ImSearch className='text-gray-500' />
                    </div>
                    <input type="text" placeholder='Search for products, brands and more'
                        className='w-[400px] h-10 mr-14 bg-gray-100 rounded-ee-xl text-sm pl-3'
                    />
                </div>

                <div className='flex flex-row items-center'>
                    <div className='flex flex-col items-center border-b-4 border-white hover:border-b-rose-500 transition duration-400 px-3 py-[24px] relative group'>
                        <FaRegUser className='text-sm text-gray-600' />
                        <p className='text-xs font-bold'>Profile</p>
                        <div className='absolute  bg-white border-2 top-[82px] hidden group-hover:flex w-[290px] transition duration-500'>
                            <div className='p-5 z-50'>
                                <div className='w-60 border-b-2 text-slate-700'>
                                    <p className='text-sm font-bold text-slate-700'>Welcome</p>
                                    <p className='text-sm text-slate-700'>To access account and manage orders</p>
                                    <div className='w-36 mt-3 mb-4 py-2 px-4 border-2 border-slate-200 hover:border-rose-500 hover:cursor-pointer rounded-l-sm rounded-r-sm'>
                                        <p className='text-[13.5px] font-bold text-rose-500'>LOGIN / SINGUP</p>
                                    </div>
                                </div>

                                <div className='text-[13.5px] text-slate-700 mt-3 mb-3 pb-3 border-b-2'>
                                    <p className='mt-1 hover:cursor-pointer hover:text-slate-700 hover:font-semibold'>Orders</p>
                                    <p className='mt-1 hover:cursor-pointer hover:text-slate-700 hover:font-semibold'>Wishlist</p>
                                    <p className='mt-1 hover:cursor-pointer hover:text-slate-700 hover:font-semibold'>Gift Cards</p>
                                    <p className='mt-1 hover:cursor-pointer hover:text-slate-700 hover:font-semibold'>Contact Us</p>
                                    <p className='mt-1 hover:cursor-pointer hover:text-slate-700 hover:font-semibold'>Myntra Insider</p>
                                </div>
                                <div className='text-[13.5px] text-slate-700'>
                                    <p className='mt-1 hover:cursor-pointer hover:text-slate-700 hover:font-semibold'>Myntra Credit</p>
                                    <p className='mt-1 hover:cursor-pointer hover:text-slate-700 hover:font-semibold'>Coupons</p>
                                    <p className='mt-1 hover:cursor-pointer hover:text-slate-700 hover:font-semibold'>Saved Cards</p>
                                    <p className='mt-1 hover:cursor-pointer hover:text-slate-700 hover:font-semibold'>Saved VPA</p>
                                    <p className='mt-1 hover:cursor-pointer hover:text-slate-700 hover:font-semibold'>Saved Addresses</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col items-center hover:cursor-pointer px-3 py-6'>
                        <FiHeart className='text-sm text-gray-600 ' />
                        <p className='text-xs font-bold'>Wishlist</p>
                    </div>
                    <Link to={'/cart'}>
                        <div className='flex flex-col items-center hover:cursor-pointer relative'>
                            <HiOutlineShoppingBag className='text-sm text-gray-600 ' />
                            <p>Bag</p>
                            {
                                numberOfItemsInBag === 0 ||
                                <p className='bg-red-700 text-sm font-bold p-1 rounded-full text-white absolute left-4 top-[-15px]'>{numberOfItemsInBag}</p>
                            }
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Header