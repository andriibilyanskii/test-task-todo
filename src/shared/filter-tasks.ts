import { ITask, TFilteringType } from '../interfaces'

export const filterTasks = (
  tasks: ITask[], filteringType: TFilteringType,
): any => {
  return tasks?.filter((el): boolean | undefined => {
    switch (filteringType) {
      case 'all': {
        return true
      }
      case 'completed': {
        return el?.status
      }
      case 'current': {
        return !el?.status
      }
      default: {
        return true
      }
    }
  })
}
