import React from 'react'

import { AddItemForm, Text } from '../../components'

import './todo.scss'

const Todo: React.FC = () => {
  return (
    <main className={'todo'}>
      <header>
        <Text type={'header'}>ToDo List</Text>
      </header>

      <AddItemForm/>
    </main>
  )
}

export default Todo
