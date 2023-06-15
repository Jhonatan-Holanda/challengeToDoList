import styles from './List.module.css';
import { ItemList, ItemProps } from '../ItemList/ItemList';
import { useEffect, useState } from 'react';
import { EmptyList } from '../EmptyList/EmptyList';

interface ListProps {
  list: ItemProps[];
  onRemoveTask: (task: number) => void;
  onChangeCheck: (task: number) => void;
}

export function List({list, onRemoveTask, onChangeCheck}: ListProps){
  const [tasksCreated, setTaskCreated] = useState(0);
  const [tasksComplete, setTaskCompleted] = useState(0);

  useEffect(() => {
    const countTasksCreated = list.length;
    const countTasksComplete = list.filter(task =>{
      return task.check == true;
    }).length

    setTaskCompleted(countTasksComplete);
    setTaskCreated(countTasksCreated);

  }, [list]);

  return (
    <div>
      <div className={styles.headerList}>
        <div>
          <strong className={styles.taskCreated}>Tarefas criadas </strong><span>{tasksCreated}</span>
        </div>
        <div>
          <strong className={styles.taskComplete}>Concluídas </strong><span>{tasksComplete} de {tasksCreated}</span>
        </div>
      </div>

      <div>
        {
          (list.length != 0) 
            ?
              list.map((task) => {
                return <ItemList key={task.id} item={task} onRemoveTask={onRemoveTask} onChangeCheck={onChangeCheck}/>
              })
            :
              <EmptyList />
        }
      </div>
    </div>
  );
}