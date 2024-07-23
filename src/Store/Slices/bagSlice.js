import { createSlice } from "@reduxjs/toolkit";


const bagSlice = createSlice({
    name: 'bag',
    initialState: {
        bagitems: [],
        bagTotal: 0,
        loading: false,
        error: false,
    },
    reducers: {
        addBagItem: (state, action) => {
            // this action will add item in the cart
            // eventually in the bagItems array in bag slice
            // State => Sate will  contain Intial State
            // Action => Action will contain the payload parameter.
            state.bagitems.push(action.payload)
            state.bagTotal++
        },
        removeBagItem: () => {


        },
    }

})

export const { addBagItem, removeBagItem } = bagSlice.actions
export default bagSlice.reducer