import { taskSig } from '@/routes/tasks/.module/taskStore'
import { useSignals } from '@preact/signals-react/runtime'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/base/table'
import { EnabledView } from '@/components/base/enabledView'
import { TaskForm } from '@/routes/tasks/.ui/taskForm'
import { groupSig } from '@/routes/groups/.module/groupStore'



export function TaskList() {

  useSignals()
  const taskFilteredSig = taskSig.value.filtered
  const groupSelectedTitle = groupSig.value.selected?.title
  console.log('(TaskList) rendered - taskFilteredSig:', taskFilteredSig)

  return(
    <section className="f-col w-full gap-4">

      <h4> {groupSelectedTitle} </h4>

      <TaskForm />

      <Table>
        <TableCaption> A task list of group selected </TableCaption>

        <TableHeader>
          <TableRow>
            <TableHead> Task </TableHead>
            <TableHead> Date </TableHead>
            <TableHead> Time </TableHead>
            <TableHead> Executions </TableHead>
            <TableHead> Status </TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {taskFilteredSig.map(task => (
            <TableRow key={task.id}>
              <TableCell> {task.title} </TableCell>
              <TableCell> {task.startDate} . {task.endDate} </TableCell>
              <TableCell> {task.time} </TableCell>
              <TableCell> 10 </TableCell>
              <TableCell> <EnabledView enabled={task.enabled} /> </TableCell>
            </TableRow>
          ))}
        </TableBody>

      </Table>

    </section>
  )

}
