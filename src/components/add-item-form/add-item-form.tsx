import React, { useState } from 'react'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { v4 as uuidv4 } from 'uuid'

import { Button, Icon, Input } from '../index'
import { CONSTANTS } from '../../constants'

import { useAppDispatch } from '../../store/redux-hooks'
import { addTask } from '../../store/data-reducer'

import './add-item-form.scss'

const AddItemForm: React.FC = () => {
  const [task, setTask] = useState('')

  // const data = useAppSelector(SELECTORS.getDataStore)
  const dispatch = useAppDispatch()

  return (
    <form
      className={'addItemForm'}
      onSubmit={(event): void => {
        event?.preventDefault()

        dispatch(
          addTask({
            'id': uuidv4(),
            'text': task,
            'date': new Date().toISOString(),
            'status': false,
          }),
        )
        setTask('')
      }}
    >
      <Input onChange={setTask} value={task} placeholder={'Enter task...'} />

      <Button isRound={true} type={'submit'}>
        <Icon src={CONSTANTS.ICONS.plus} color={'white'} size={'1.5rem'} />
      </Button>
    </form>
  )
}

export default AddItemForm
