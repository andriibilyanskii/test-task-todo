import React from 'react'
import classNames from 'classnames'

import { Button, Icon, Text } from '../index'
import { CONSTANTS } from '../../constants'

import { useAppDispatch } from '../../store/redux-hooks'
import { changeStatus, deleteTask } from '../../store/data-reducer'

import { formatDate } from '../../shared'

import { ITask } from '../../interfaces'

import './task-card.scss'

interface IProps {
  task: ITask
}

const TaskCard: React.FC<IProps> = ({ task }) => {
  const dispatch = useAppDispatch()

  return (
    <li
      className={classNames({
        'taskCard': true,
        'taskCard_completed': task.status,
      })}
      onClick={(): void => {
        dispatch(changeStatus(task.id))
      }}
    >
      <Text type={'p'} className={'task'}>{task.text}</Text>
      <Text type={'s'} className={'date'}>{formatDate(task.date)}</Text>

      {task?.status &&
        <Icon
          src={CONSTANTS.ICONS.check}
          className={'status'}
          size={'1.5rem'}
          color={'green'}
        />
      }

      <Button
        className={'button'}
        buttonType={'transparent'}
        type={'submit'}
        onClick={(): void => {
          dispatch(deleteTask(task.id))
        }}
      >
        <Icon src={CONSTANTS.ICONS.cancel}
          size={'1.5rem'}
          color={'red'}
        />
      </Button>
    </li>
  )
}

export default TaskCard
