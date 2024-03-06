import { configureStore } from '@reduxjs/toolkit'

import dataReducer from './data-reducer'

const store = configureStore({
  'reducer': {
    dataReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
