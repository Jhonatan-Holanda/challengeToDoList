import { Check, PlusCircle  } from 'phosphor-react';

import styles from'./App.module.css';
import { Button } from './Button/Button';
import { Header } from './Header/Header';
import { Input } from './Input/Input';
import { List } from './List/List';
import { ItemProps } from './ItemList/ItemList';
import { ChangeEvent, InvalidEvent, useState } from 'react';

const mockList: ItemProps[] = [
  {
    id: 1,
    check: true,
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora, eius sint labore quisquam est voluptatem accusamus iusto voluptate et possimus quas autem nam rerum delectus repellat saepe corporis consequuntur aut?'
  },
  {
    id: 2,
    check: false,
    description: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.'
  },
  {
    id: 3,
    check: true,
    description: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.'
  },
  {
    id: 4,
    check: false,
    description: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.'
  },
  {
    id: 5,
    check: true,
    description: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.'
  }
]

function App() {
  const [newTask, setNewTask] = useState('');

  const [taskList, setTaskList] = useState(mockList);

  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity('');
    setNewTask(event.target.value);
  }

  function handleNewTaskInvalid(event: InvalidEvent<HTMLInputElement>){
    event.target.setCustomValidity('Esse campo é obrigatório.')
  }

  function handleNewTask(){
    const task = {
      id: taskList[taskList.length-1].id + 1,
      check: false,
      description: newTask,
    }

    taskList.push(task);

    setNewTask('');
  }

  function handleRemoveTask(taskToDelete: number){
    const tasksWithoutDeleteOne = taskList.filter(task => {
      return task.id != taskToDelete;
    })

    setTaskList(tasksWithoutDeleteOne);
  }

  const isNewTaskEmpty = newTask.length === 0;

  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <div className={styles.newTask}>
          <Input 
            onChange={handleNewTaskChange}
            onInvalid={handleNewTaskInvalid}
            value={newTask} 
            type='text' 
            placeholder='Adicione uma nova tarefa'
          />
          <Button 
            onClick={handleNewTask}
            disabled={isNewTaskEmpty} 
            text="Criar" 
            icon={
              <PlusCircle size={16} weight='bold'/>
            } 
          />
        </div>
        <main>
          <List list={taskList} onRemoveTask={handleRemoveTask} />
        </main>
      </div>
    </>
  )
}

export default App
