import React from 'react'
import { IoIosArrowDown } from "react-icons/io";


function Breadcrumbs() {

    const allfilters = ['Add on', 'Bundles', 'Collar', 'Country Of Origin']
    return (
        <div className='flex flex-col px-5 py-5 m-auto'>
            <p className='text-sm mb-5 text-slate-600'>Home / clothing / Shirts / <span className='font-bold'>Casual Shirts</span></p>
            <p className='font-bold'>Casual Shirts for Men - <span className='text-gray-500'>107080 items</span></p>
            <div className='flex flex-row items-center'>
                <p className='text-md font-bold w-[300px]'>Filters</p>
                <div className='flex flex-row items-center justify-between w-[1050px]'>
                    {/* options */}
                    <div className='flex flex-row items-center'>
                        {
                            allfilters.map((oneFilter, i) => (
                                <div key={i} className='flex flex-row items-center px-3 py-2 rounded-full hover:bg-gray-100 hover:cursor-pointer mx-1'>
                                    <p className='text-xs text-slate-600'>{oneFilter}</p>
                                    <IoIosArrowDown className='text-xs ml-2 text-slate-500' />
                                </div>
                            ))
                        }
                    </div>
                    {/* recommended box */}
                    <div>
                        <div className='flex flex-row items-center justify-between border-2 border-gray-300 px-4 py-2 rounded-sm w-[300px] hover:cursor-pointer'>
                            <p className='text-sm'>Sort By : <span className='font-bold'>Recommended</span></p>
                            <IoIosArrowDown />
                        </div>
                        <div className='hidden'>
                            <p>Recommended</p>
                            <p>What&apos;s New</p>
                            <p>Popularity</p>
                            <p>Better Discount</p>
                            <p>Price : High to Low</p>
                            <p>Price : Low to HIgh</p>
                            <p>Customer Rating</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Breadcrumbs