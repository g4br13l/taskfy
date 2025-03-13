import { signal } from '@preact/signals-react'



export type TaskT = { name: string }

export type TaskStore = {
  tasks: TaskT[]
  filtered: TaskT[]
}

const initialState = [
  {name: "Todo one"},
  {name: "Todo two"},
  {name: "Todo three"}
]

export const tasksS = signal<TaskStore>({
  tasks: initialState,
  filtered: initialState
})



export function taskStore() {


  return {

    add: (task: TaskT): TaskStore => {
      tasksS.value = {
        tasks: [...tasksS.value.tasks, task],
        filtered: [...tasksS.value.tasks, task]
      }
      return tasksS.value
    },

    filter: (name: string): TaskStore | undefined => {
      const filteredTasks = tasksS.value.tasks.filter(
        task => task.name.toLowerCase().startsWith(name)
      )
      tasksS.value = {
        tasks: tasksS.value.tasks,
        filtered: filteredTasks
      }
      return tasksS.value
    }

  }

}
