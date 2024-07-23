import React from 'react'
import { CiSearch } from "react-icons/ci";


function FilterOptions() {
    const allFilters = [
        {
            filterBy: 'BRAND',
            search: true,
            color: false,
            inputType: 'checkbox',
            filters: [
                { filterName: 'HIGHLANDER', filteredProducts: 12345 },
                { filterName: 'Snitch', filteredProducts: 5235 },
                { filterName: 'Roadster', filteredProducts: 213 },
                { filterName: 'Parx', filteredProducts: 7890 },
                { filterName: 'Indian Terrain', filteredProducts: 24537 },
                { filterName: 'M & H', filteredProducts: 10000 },
                { filterName: 'ShowOff', filteredProducts: 100 },
                { filterName: 'Luis Phillipe', filteredProducts: 1 },
            ],
            more: '139+'
        },
        {
            filterBy: 'PRICES',
            search: false,
            color: false,
            inputType: 'checkbox',
            filters: [
                { filterName: 'Rs. 249 to 1000', filteredProducts: 12345 },
                { filterName: 'Rs. 1000 to 2000', filteredProducts: 5235 },
                { filterName: 'Rs. 2000 to 3000', filteredProducts: 213 },
                { filterName: 'Rs. 3000 to 4000', filteredProducts: 213 },
                { filterName: 'Rs. 4000 to 5000', filteredProducts: 213 },
            ]
        },
        {
            filterBy: 'Color',
            search: true,
            color: true,
            inputType: 'checkbox',
            filters: [
                { filterName: 'Green', filteredProducts: 12345 },
                { filterName: 'Blue', filteredProducts: 5235 },
                { filterName: 'Red', filteredProducts: 213 },
                { filterName: 'Yellow', filteredProducts: 213 },
                { filterName: 'Orange', filteredProducts: 213 },
                { filterName: 'White', filteredProducts: 213 },
                { filterName: 'Black', filteredProducts: 213 },
            ],
            more: '30+'
        },
        {
            filterBy: 'Discount Range',
            search: false,
            color: false,
            inputType: 'Radio',
            filters: [
                { filterName: '0%  above', filteredProducts: 12345 },
                { filterName: '10% above', filteredProducts: 5235 },
                { filterName: '20% above', filteredProducts: 213 },
                { filterName: '30% above', filteredProducts: 213 },
                { filterName: '40% above', filteredProducts: 213 },
                { filterName: '50% above', filteredProducts: 213 },
                { filterName: '60% above', filteredProducts: 213 },
            ]
        }
    ]
    return (
        <div className='w-[300px] border-r-2 border-t-2 border-slate-200 rounded-sm'>

            {
                allFilters.map((onefilter, i) => (
                    <div key={i} className='border-b-2 border-slate-200 pb-5 p-3'>
                        <div className='flex flex-row items-center justify-between mb-2'>
                            <p className='text-md font-bold' >{onefilter.filterBy}</p>
                            {
                                onefilter.search &&
                                <CiSearch className='text-md bg-slate-200 p-1.5 rounded-full box-content' />
                            }
                        </div>
                        <div className='flex flex-col'>
                            {
                                onefilter.filters.map((onebrands, i) => (
                                    <div key={i} className='flex flex-row items-center mb-2'>
                                        <input
                                            name='something'
                                            type={onefilter.inputType}
                                            className='mr-3'
                                        />
                                        {
                                            onefilter.color &&
                                            <div
                                                style={{
                                                    backgroundColor: onebrands.filterName,
                                                    border: onebrands.filterName === 'White' ? '1px solid lightgray' : 'none'
                                                }}
                                                className='w-4 h-4  rounded-full mr-2 border-slate-400'>
                                            </div>
                                        }
                                        <p className='text-sm font-normal mr-1'>{onebrands.filterName}</p>
                                        <p className='text-[10px] text-slate-500'>({onebrands.filteredProducts})</p>
                                    </div>
                                ))
                            }
                            {
                                onefilter.more &&
                                <h1 className='text-sm font-semibold text-pink-400 ml-7 mt-2'>{onefilter.more}more</h1>
                            }
                        </div>
                    </div>
                ))
            }

        </div>
    )
}

export default FilterOptions