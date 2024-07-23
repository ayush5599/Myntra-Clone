import React from 'react'
import Header from '../Components/Header/Header'
import Breadcrumbs from '../Components/Breadcrumbs/Breadcrumbs'
import AllProduct from '../Components/AllProducts/AllProduct'
import FilterOptions from '../Components/FilterOptions/FilterOptions'

function HomePage() {
    return (
        <div className='flex flex-col'>
            {/* header */}
            <Header />
            {/* breadcrumbs */}
            <Breadcrumbs />
            <div className='flex flex-row w-[1350px] m-auto'>
                {/* filterOption */}
                <FilterOptions />
                {/* all product */}
                <AllProduct />
            </div>
        </div>
    )
}

export default HomePage