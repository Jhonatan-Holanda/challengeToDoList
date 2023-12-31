import { PlusCircle  } from 'phosphor-react';

import styles from'./App.module.css';
import { Button } from './Button/Button';
import { Header } from './Header/Header';
import { Input } from './Input/Input';
import { List } from './List/List';
import { ItemProps } from './ItemList/ItemList';
import { ChangeEvent, useState } from 'react';

function App() {
  const [newTask, setNewTask] = useState('');
  const [taskList, setTaskList] = useState<ItemProps[]>([]);

  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity('');
    setNewTask(event.target.value);
  }

  function handleNewTask(){
    const task = {
      id: (taskList.length === 0) ? 0 : taskList[taskList.length-1]?.id + 1,
      check: false,
      description: newTask,
    }

    setTaskList([...taskList, task ]);

    setNewTask('');
  }

  function handleRemoveTask(taskToDelete: number){
    const tasksDeletingOne = taskList.filter(task => {
      return task.id != taskToDelete;
    })

    setTaskList(tasksDeletingOne);
  }

  function handleChangeCheck(taskToChange: number){
    const tasksWithChangeCheck: ItemProps[] = taskList.map((task) => 
      (task.id === taskToChange) ? 
        {
          ...task,
          check: task.check === true ? false : true
        }
      : 
        task
    )
    setTaskList(tasksWithChangeCheck)
  }

  const isNewTaskEmpty = newTask.length === 0;

  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <div className={styles.newTask}>
          <Input 
            onChange={handleNewTaskChange}
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
          <List 
            list={taskList} 
            onRemoveTask={handleRemoveTask} 
            onChangeCheck={handleChangeCheck}
          />
        </main>
      </div>
    </>
  )
}

export default App
