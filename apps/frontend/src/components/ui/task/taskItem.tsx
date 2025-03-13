import { tasksS } from '@/state/taskStore'
import { useSignals } from '@preact/signals-react/runtime'



export function TaskItem() {

  useSignals()
  console.log('(TaskItem) rendered - tasksS:', tasksS.value)

  return(
    <section className="f-col w-full gap-4">

      <div className="f-col">

        {tasksS.value.filtered.map((task, index) => (
          <span key={index}>
            {task.name ?? '-'}
          </span>
        ))}

      </div>

    </section>
  )

}
