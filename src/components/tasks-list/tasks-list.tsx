import React from 'react'

import { TaskCard } from '../index'

import { useAppSelector } from '../../store/redux-hooks'
import { SELECTORS } from '../../store/selectors'

import { ITask } from '../../interfaces'

import './tasks-list.scss'

const TasksList: React.FC = () => {
  const data:ITask[] = useAppSelector(SELECTORS.getDataStore)?.data

  return (
    <div
      className={'tasksList'}

    >
      {data?.length > 0 &&
          data?.map((task) => <TaskCard key={task.id} task={task} />)}
    </div>
  )
}

export default TasksList
