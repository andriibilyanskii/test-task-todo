import { createSlice } from '@reduxjs/toolkit'

interface InitialStateProps {
  data: Array<any>
}

const initialState: InitialStateProps = {
  'data': [],
}

export const dataSlice = createSlice({
  'name': 'data',
  initialState,
  'reducers': {
    'increment': (state) => {
      state.data = [...state.data, 'a']
    },
    'incrementByAmount': (state, action) => {
      state.data = [...state.data, action.payload]
    },
  },
})

export const { increment, incrementByAmount } = dataSlice.actions

export default dataSlice.reducer
