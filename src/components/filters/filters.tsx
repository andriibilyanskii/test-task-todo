import React from 'react'

import { Button, Text } from '../index'

import { useAppSelector, useAppDispatch } from '../../store/redux-hooks'
import { SELECTORS } from '../../store/selectors'
import { setFilteringType } from '../../store/data-reducer'

import { ITask, TFilteringType } from '../../interfaces'
import { filterTasks } from '../../shared'

import './filters.scss'

const FILTER_TYPES: Array<TFilteringType> = ['all', 'current', 'completed']

const Filters: React.FC = () => {
  const data: ITask[] = useAppSelector(SELECTORS.getDataStore)?.data
  const filteringType: TFilteringType =
      useAppSelector(SELECTORS.getDataStore)?.filteringType

  const dispatch = useAppDispatch()

  return (
    <div
      className={'filters'}

    >
      {FILTER_TYPES.map((el) => <Button key={el}
        style={
          { 'border': filteringType === el ? '1px solid gray' : 'initial' }
        }
        buttonType={'transparent'}
        onClick={(): void => {
          dispatch(setFilteringType(el))
        }}>
        {el}

        <div className={'counter'}>
          <Text type={'s'}>{ filterTasks(data, el)?.length}</Text>
        </div>
      </Button>)}
    </div>
  )
}

export default Filters
