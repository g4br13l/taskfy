import { Label } from '@/components/base/label'
import { Input } from '@/components/base/input'
import { Button } from '@/components/base/button'
import { ChangeEvent, useRef } from 'react'
import { taskStore } from '@/routes/tasks/.module/taskStore'



export function TaskForm() {

  console.log('(TaskForm) rendered')

  const inputRef = useRef<HTMLInputElement|null>(null)



  function handleAddTaskClick() {
    console.log('handleAddTaskClick')
    /* const inputVal = inputRef.current?.value */
    /* if (inputVal) taskStore().add({ name: inputVal }) */
  }

  function handleSearchTask(event: ChangeEvent<HTMLInputElement>) {
    const inputValue = event.target.value
    taskStore().filter(inputValue)
  }


  return(

    <section className="f-col gap-4">

      <div className="f-row gap-4">
        <div className="grid items-center gap-1.5">
          <Label htmlFor="name">Task name</Label>
          <Input
            ref={inputRef}
            id="name"
            type="text"
            placeholder="Todo it"
          />
        </div>

        <div className="f-col justify-end w-fit">
          <Button
            className="btn"
            onClick={()=> handleAddTaskClick()}
          >
            add task
          </Button>
        </div>
      </div>

      <div>
        <Input
          id="search-task"
          type="text"
          placeholder="Search todos"
          onChange={e=> handleSearchTask(e)}
        />
      </div>

    </section>

  )

}
