import { signal } from '@preact/signals-react'
import { TaskT } from '@/routes/tasks/.module/taskType'



export type TaskStoreT = {
  tasks: TaskT[]
  filtered: TaskT[]
}

const emptyTaskList: TaskT[] = []
const emptyTaskState: TaskStoreT = {
  tasks: emptyTaskList,
  filtered: emptyTaskList
}

export const taskSig = signal<TaskStoreT>(emptyTaskState)



export function taskStore() {

  function mountTaskState(task: TaskT | TaskT[], clean?: boolean): TaskT[] {
    return Array.isArray(task)
      ? clean
        ? [...task]
        : [...taskSig.value.tasks, ...task]
      : clean
        ? [task]
        : [...taskSig.value.tasks, task]
  }

  return {

    add: (tasks: TaskT | TaskT[]): TaskStoreT => {

      const taskState = mountTaskState(tasks, false)

      return taskSig.value = {
        tasks: taskState,
        filtered: taskState
      }
    },

    restart: (tasks: TaskT | TaskT[], filtered?: TaskT | TaskT[]): TaskStoreT => {

      const taskState = mountTaskState(tasks, true)

      return taskSig.value = {
        tasks: taskState,
        filtered: filtered ? mountTaskState(filtered, true) : taskState
      }
    },

    filter: (title?: string, groupId?: number): TaskStoreT | undefined => {

      const filteredTasks = taskSig.value.tasks.filter(task => {

        return title && task.title.toLowerCase().startsWith(title.toLowerCase())
          ? true
          : groupId && task.groupId === groupId
            ? true
            : (title === undefined || title === '') && groupId === undefined
      })

      taskSig.value = {
        tasks: taskSig.value.tasks,
        filtered: filteredTasks
      }
      return taskSig.value
    }

  }

}
