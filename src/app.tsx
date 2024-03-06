import React from 'react'
import logo from './logo.svg'
import './app.scss'
import { useAppDispatch, useAppSelector } from './store/redux-hooks'
import { SELECTORS } from './store/selectors'
import { increment, incrementByAmount } from './store/data-reducer'

function App(): React.ReactElement {
  const data = useAppSelector(SELECTORS.getDataStore)
  const dispatch = useAppDispatch()

  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p className={'text-5xl font-bold underline'}>
					Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
					Learn React
        </a>
        <button
          className={'underline'}
          onClick={(): void => {
					  dispatch(increment())
          }}
        >
          {JSON.stringify(data)}
        </button>

        <button
          className={'underline'}
          onClick={(): void => {
					  dispatch(incrementByAmount('text'))
          }}
        >
          {JSON.stringify(data)}
        </button>
      </header>
    </div>
  )
}

export default App