import React from 'react'

import { AddItemForm, Filters, TasksList, Text } from '../../components'

import './todo.scss'

const Todo: React.FC = () => {
  return (
    <main className={'todo'}>
      <header>
        <Text type={'header'}>ToDo List</Text>
      </header>

      <AddItemForm/>

      <Filters/>

      <TasksList/>

      <footer>
        <Text type={'s'}>
          Powered by {' '}
          <a href={'https://github.com/andriibilyanskii'} target={'_blank'}>
                @Andrii Bilianskyi
          </a>
        </Text>
      </footer>
    </main>
  )
}

export default Todo
