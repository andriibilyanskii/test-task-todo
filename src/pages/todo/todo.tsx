import React from 'react'

import { Button, Icon, Text } from '../../components'
import { CONSTANTS } from '../../constants'

import './todo.scss'

const Todo: React.FC = () => {
  return (
    <main className={'todo'}>
      <header>
        <Text type={'header'}>ToDo List</Text>
      </header>

      <div>
        <Button isRound={true}>
          <Icon src={CONSTANTS.ICONS.plus} />
        </Button>
        <Button isRound={false}>asdfas</Button>
      </div>
    </main>
  )
}

Todo.defaultProps = {
  'className': '',
  'padding': '0rem',
}

export default Todo
