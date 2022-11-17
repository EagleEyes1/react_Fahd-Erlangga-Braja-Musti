import { createSlice } from '@reduxjs/toolkit'
import { v4 as uuidv4 } from "uuid";

const initialValue = [
    {
        id: uuidv4(),
        title: "Mengerjakan Exercise",
        completed: true
    },
    {
        id: uuidv4(),
        title: "Mengerjakan Assignment",
        completed: false
    }
]

export const itemSlice = createSlice({
    name: "item",
    initialState: {
        items: initialValue
    },
    reducers: {
        hapusList: (state, action) => {
            state.items = state.items.filter((item) => {
                return item.id !== action.payload;
            })
        },
        tambahList: (state, action) => {
            const newList = {
                id: uuidv4(),
                ...action.payload
            }

            state.items = [...state.items, newList]

        },
        handleCheck: (state, action) => {
            const index = state.items.findIndex((val) => val.id === action.payload)
            const newItem = [...state.items]
            if (index >= 0) {
                newItem[index].completed = !newItem[index].completed
            }
            state.items = [...state.items]
        },
    },
})

export const { hapusList, tambahList, handleCheck } = itemSlice.actions;
export default itemSlice.reducer 