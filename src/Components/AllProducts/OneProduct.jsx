import React from 'react'
import { IoIosStar } from "react-icons/io";
import { useDispatch } from 'react-redux'
import { addBagItem } from '../../Store/Slices/bagSlice';


function OneProduct(props) {
    const { productImage, productRating, productPrice, productBrand, productName, productDiscount } = props
    let productCustomers = parseInt((Math.random() * 10) + 1)

    const dispatch = useDispatch()
    const handleAddProductToCart = (e) => {
        e.preventDefault();

        let Product = { productImage, productRating, productPrice, productBrand, productName, productDiscount }

        dispatch(addBagItem(Product))
    }

    return (
        <div className='w-52 h-fit m-2 group hover:shadow-md hover:cursor-pointer'>
            <div className='relative'>
                {/* images / images slideshow */}
                <img src={productImage}
                    alt={productImage}
                    className='z-0 h-64 w-full object-cover'
                />
                {/* add to cart button */}
                <div className='absolute hidden group-hover:flex p-3 bg-white z-50 bottom-0 w-full'>
                    <button
                        onClick={handleAddProductToCart}
                        className='bg-white w-full p-2 text-sm font-bold border-2 border-slate-300 rounded-md'>Add to Cart</button>
                </div>

                {/* ratings */}
                <h1 className='absolute flex group-hover:hidden opacity-80 rounded-sm text-xs font-bold flex-row items-center bg-white z-50  px-2 py-2 w-fit m-2 bottom-1'>
                    {productRating}
                    <IoIosStar className='mx-1 text-green-600' />
                    | <span className='ml-1'>{productCustomers}</span>
                </h1>
            </div>

            {/* brand name */}
            <h1 className='text-sm font-bold pl-2 mt-2'>{productBrand}</h1>

            {/* product name */}
            <h2 className='text-sm font-normal pl-2'>{productName}</h2>

            {/* prices */}
            <h3 className='text-sm font-bold pl-2 pb-3 mt-1'>
                Rs.{productPrice}
                <span className='mx-1 text-xs line-through text-slate-500 font-normal'>Rs. 1990</span>
                <span className='text-xs text-yellow-500'>({productDiscount} % OFF)</span>
            </h3>
        </div>
    )
}

export default OneProduct