import React from 'react'

import './app.scss'
// import { useAppDispatch, useAppSelector } from './store/redux-hooks'
// import { SELECTORS } from './store/selectors'
// import { increment, incrementByAmount } from './store/data-reducer'

import { Button } from './components'

function App(): React.ReactElement {
  // const data = useAppSelector(SELECTORS.getDataStore)
  // const dispatch = useAppDispatch()

  return <div className='App'>
    <Button>Text</Button>
  </div>
}

export default App
