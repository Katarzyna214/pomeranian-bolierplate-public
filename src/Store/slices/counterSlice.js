import { createSlice } from '@reduxjs/toolkit'
import { setLocalStorageState, getLocalStorageState } from '../helpers'

const initialState = {
    // value: 0
    value: getLocalStorageState('counter', 0)
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1
            setLocalStorageState('counter', state.value)
        },
        decrement: (state) => {
            state.value -= 1
            setLocalStorageState('counter', state.value)
        },
        multiplication: (state,)=>{
            state.value *= 2
            setLocalStorageState('counter', state.value)
        },
        division: (state,)=>{
            state.value /= 2
            setLocalStorageState('counter', state.value)
        },
        incrementByValue: (state, action) => {
            state.value += action.payload
            setLocalStorageState('counter', state.value)
        }
    }
})

export const { increment, decrement, incrementByValue, multiplication, division } = counterSlice.actions

export default counterSlice.reducer