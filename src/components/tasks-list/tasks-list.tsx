import React, { useCallback } from 'react'

import { TaskCard } from '../index'

import { useAppSelector } from '../../store/redux-hooks'
import { SELECTORS } from '../../store/selectors'

import { ITask, TFilteringType } from '../../interfaces'
import { filterTasks } from '../../shared'

import './tasks-list.scss'

const TasksList: React.FC = () => {
  const data: ITask[] = useAppSelector(SELECTORS.getDataStore)?.data
  const filteringType: TFilteringType =
      useAppSelector(SELECTORS.getDataStore)?.filteringType

  const filteredData: ITask[] = useCallback(
    filterTasks(data, filteringType),
    [data, filteringType],
  )

  return (
    <ul className={'tasksList'}>
      {filteredData?.length > 0 &&
         filteredData?.map((task) => <TaskCard key={task.id} task={task} />)}
    </ul>
  )
}

export default TasksList
