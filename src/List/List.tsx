import { useState } from 'react';
import styles from './List.module.css';
import { ItemList, ItemProps } from '../ItemList/ItemList';

interface ListProps {
  list: ItemProps[];
}

export function List({list}: ListProps){
  const [countTaskCreated, setTaskCreated] = useState(0);
  const [countTaskComplete, setTaskCompleted] = useState(0);

  return (
    <div className={styles.list}>
      <div className={styles.headerList}>
        <div>
          <strong className={styles.taskCreated}>Tarefas criadas </strong><span>{countTaskCreated}</span>
        </div>
        <div>
          <strong className={styles.taskComplete}>Concluídas </strong><span>{countTaskComplete} de {countTaskCreated}</span>
        </div>
      </div>

      <div className={styles.list}>
        {list.map((item) => {
          return <ItemList key={item.id} item={item}/>
        })}
      </div>
    </div>
  );
}