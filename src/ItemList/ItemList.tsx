import styles from './ItemList.module.css';
import { Trash, Check , Circle } from 'phosphor-react';

export interface ItemProps {
  id: number;
  check: boolean;
  description: string;
}

interface Item {
  item: ItemProps,
  onRemoveTask: (task: number) => void;
  onChangeCheck: (task: number) => void;
}

export function ItemList({ item, onRemoveTask, onChangeCheck }: Item ){
  return(
    <div className={styles.item}>
      <div className={styles.check}>
        {(item.check) ?
          <button onClick={() => onChangeCheck(item.id)}>
            <Check className={styles.checkedCircle} weight='bold'/>
          </button>
        :
          <button onClick={() => onChangeCheck(item.id)}>
            <Circle className={styles.unCheckCircle} weight='bold'/>
          </button>
        }
      </div>
      <div className={(item.check)? styles.taskComplete : styles.taskUnChecked}>
        <p>{item.description}</p>
      </div>
      <div className={styles.trash}>
        <button onClick={ () => onRemoveTask(item.id) }>
          <Trash  />
        </button>
      </div>
    </div>
  )
}