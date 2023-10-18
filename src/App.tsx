import {useState} from 'react'
import {Task} from './types/Task'
import Form from './components/Form'
import ListTasks from './components/ListTask'

const App = () => {
  const [task, setTask] = useState<Task>({
    title : '',
    content : '',
   
    
  })
  return (
    <div>
     
      <Form 
      task={task}
      setTask={setTask}/>
      <ListTasks setTask={setTask}/>
    </div>
  )
}
export default App