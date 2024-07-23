import React from 'react'
import { IoIosStar } from "react-icons/io";


function OneCartItem() {
    return (
        <div className='flex flex-row items-center m-2 border-b-2 '>
            <img
                src="https://cdn.dummyjson.com/products/images/beauty/Powder%20Canister/1.png"
                alt=""
                className='w-[250px] h-[200px]  object-contain mr-5'
            />

            {/* product info */}
            <div>
                {/* brand name */}
                <h1 className='text-sm font-bold p-1'>Brand Name</h1>

                {/* ratings */}
                <h1 className='flex text-xs font-bold flex-row items-center rounded-sm p-1'>
                    4.5
                    <IoIosStar className='mx-1 text-green-600' />
                    | <span className='ml-1'>22k</span>
                </h1>

                {/* product name */}
                <h2 className='text-sm font-normal p-1'>Product Name</h2>

                <p className='text-xs p-1 font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur corrupti fugiat consectetur laboriosam consequuntur autem itaque recusandae officia suscipit repellendus!</p>

                {/* prices */}
                <h3 className='text-xs font-bold p-1'>
                    Rs. 1000
                    <span className='mx-1 text-[10px] line-through text-slate-500 font-normal'>Rs. 1990</span>
                    <span className='text-[10px] text-yellow-500'>(40% OFF)</span>
                </h3>


            </div>

            {/* remove button */}
            <button className='w-fit bg-orange-500 px-10 py-2 rounded-sm mt-3 text-white text-sm hover:cursor-pointer  border-2 border-white hover:bg-white hover:border-orange-500 hover:text-orange-500 transition duration-300'>remove</button>
        </div>
    )
}

export default OneCartItem