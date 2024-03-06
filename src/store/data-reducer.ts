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
    'changeStatus': (state, action:PayloadAction<string>) => {
      state.data = state.data.map((el) => {
        if (el.id === action.payload) {
          return { ...el, 'status': !el.status }
        } return el
      })
    },
    'deleteTask': (state, action:PayloadAction<string>) => {
      state.data = state.data.filter((el) => el.id !== action.payload)
    },
  },
})

export const { addTask, changeStatus, deleteTask } = dataSlice.actions

export default dataSlice.reducer
