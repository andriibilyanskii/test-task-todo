import React from 'react'

import { AddItemForm, TasksList, Text } from '../../components'

import './todo.scss'

const Todo: React.FC = () => {
  return (
    <main className={'todo'}>
      <header>
        <Text type={'header'}>ToDo List</Text>
      </header>

      <AddItemForm/>

      <TasksList/>
    </main>
  )
}

export default Todo
