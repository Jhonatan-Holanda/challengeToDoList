import { useEffect, useState } from 'react';
import styles from './List.module.css';
import { ItemList, ItemProps } from '../ItemList/ItemList';

interface ListProps {
  list: ItemProps[];
  onRemoveTask: (task: number) => void;
}

export function List({list, onRemoveTask}: ListProps){
  const [taskCreated, setTaskCreated] = useState(0);
  const [taskComplete, setTaskCompleted] = useState(0);

  useEffect(() => {
    const countTaskCreated = list.length;
    const countTaskComplete = list.filter(item =>{
      return item.check == true;
    }).length

    setTaskCompleted(countTaskComplete);
    setTaskCreated(countTaskCreated);

  }, [taskCreated, taskComplete]);

  return (
    <div className={styles.list}>
      <div className={styles.headerList}>
        <div>
          <strong className={styles.taskCreated}>Tarefas criadas </strong><span>{taskCreated}</span>
        </div>
        <div>
          <strong className={styles.taskComplete}>Concluídas </strong><span>{taskComplete} de {taskCreated}</span>
        </div>
      </div>

      <div className={styles.list}>
        {list.map((item) => {
          return <ItemList key={item.id} item={item} onRemoveTask={onRemoveTask}/>
        })}
      </div>
    </div>
  );
}