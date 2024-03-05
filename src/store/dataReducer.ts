import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from './index'

// Define a type for the slice state
interface InitialStateProps {
  data: Array<any>
}

// Define the initial state using that type
const initialState: InitialStateProps = {
  data: [],
}

export const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    increment: (state) => {
      state.data = [...state.data, 'a']
    },
    incrementByAmount: (state, action: PayloadAction<string>) => {
      state.data = [...state.data, action.payload]
    },
  },
})

export const { increment, incrementByAmount } = dataSlice.actions

export default dataSlice.reducer
