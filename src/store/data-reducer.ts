// eslint-disable-next-line import/named
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ITask } from '../interfaces'

interface InitialStateProps {
  data: Array<ITask>
}

const initialState: InitialStateProps = {
  'data': [],
}

export const dataSlice = createSlice({
  'name': 'data',
  initialState,
  'reducers': {
    'addTask': (state, action:PayloadAction<ITask>) => {
      state.data = [...state.data, action.payload]
    },
  },
})

export const { addTask } = dataSlice.actions

export default dataSlice.reducer
