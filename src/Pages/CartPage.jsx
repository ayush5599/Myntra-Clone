import React from 'react'
import Header from '../Components/Header/Header'
import OneCartItem from '../Components/Cart/OneCartItem';


function CartPage() {

    const bagItems = [1, 2, 3]

    return (
        <div>
            <Header />

            <div className='w-[1000px] h-screen m-auto flex flex-row'>
                <div className='w-[750px]'>
                    <div>
                        {
                            bagItems.length > 0 ?
                                <p className='text-md font-bold text-orange-500 text-center m-3'>Number of items in your bag : {bagItems.length}</p>
                                :
                                <p>No items in you bag</p>
                        }
                    </div>
                    <div>
                        {/* one product */}
                        {
                            bagItems.map((oneItem, i) => (
                                <OneCartItem key={i} />
                            ))
                        }



                    </div>
                </div>
                {/* total */}
                <div className='flex flex-col items-center w-[250px] border-2 border-slate-300 h-fit py-3 mt-3'>
                    <p className='text-sm font-bold'>Total Amount</p>
                    <p className='text-xl font-bold text-orange-500'>$ 1000</p>
                    <button className='w-fit bg-orange-500 px-10 py-2 rounded-sm mt-3 text-white text-sm hover:cursor-pointer  border-2 border-white hover:bg-white hover:border-orange-500 hover:text-orange-500 transition duration-300'>checkout</button>
                </div>
            </div >
        </div >
    )
}

export default CartPage