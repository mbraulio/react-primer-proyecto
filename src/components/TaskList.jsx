import TaskCard from './TaskCard'
import {TaskContext} from '../context/TaskContext'
import {useContext} from 'react'

function TaskList() {
  
  const {tasks} = useContext(TaskContext)

  if (tasks.length === 0) {
    return <h1 className='text-white text-3xl text-center font-bold mt-10'>🥳No hay tareas pendientes!🥳</h1>;
  }

  return (
    <div className='grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 sm:w-full m:w-1/3 '>
      {tasks.map((task) => (
        <TaskCard key={task.id}task={task}/>
      ))}
    </div>
  );
}

export default TaskList;
