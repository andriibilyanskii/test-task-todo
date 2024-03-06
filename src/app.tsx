import React from 'react'

import './app.scss'
// import { useAppDispatch, useAppSelector } from './store/redux-hooks'
// import { SELECTORS } from './store/selectors'
// import { increment, incrementByAmount } from './store/data-reducer'

import { Todo } from './pages'

function App(): React.ReactElement {
  // const data = useAppSelector(SELECTORS.getDataStore)
  // const dispatch = useAppDispatch()

  return <Todo></Todo>
}

export default App
