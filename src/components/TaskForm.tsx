import React, {useState, ChangeEvent, FormEvent, useEffect} from 'react';

import styles from './TaskForm.module.css';

import { ITask } from '../interfaces/Task';

export interface ITaskFormProps {
  btnText: string
  taskList: ITask[]
  setTaskList?: React.Dispatch<React.SetStateAction<ITask[]>>
  task?: ITask | null
  handleUpdate?: (id: number, title: string, difficulty: number) => void
}
export function TaskForm({ btnText, taskList, setTaskList, task, handleUpdate }: ITaskFormProps) {

  const [id, setId] = useState<number>(0);
  const [title, setTitle] = useState<string>("");
  const [difficulty, setDifficulty] = useState<number>(0);

  useEffect(() => {
    if (task) {
      setId(task.id)
      setTitle(task.title)
      setDifficulty(task.difficulty)
    }
  }, [task])

  const addTaskHandler = (e: FormEvent<HTMLFormElement>) => {

    e.preventDefault();

    if (handleUpdate) {
      handleUpdate(id, title, difficulty)
    }

    else {
      const id = Math.floor(Math.random() * 1000)
      const newTask: ITask = { id, title, difficulty }

      setTaskList!([...taskList, newTask])
      setTitle("")
      setDifficulty(0)
    }

  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.target.type === "text"
    ? setTitle(e.target.value)
    : setDifficulty(parseInt(e.target.value))
  }

  return (
    <>
      <form onSubmit={addTaskHandler} className={styles.form}>
        <div className={styles.input_container}>
          <label htmlFor="title">
            Título:
          </label>
          <input
            type="text"
            name="title"
            placeholder="Título da tarefa"
            onChange={handleChange}
            value={title} />
        </div>

        <div className={styles.input_container}>
          <label htmlFor="difficulty">
            Dificuldade:
          </label>
          <input
          type="number"
          name="difficulty"
          placeholder="Nível de dificuldade"
          onChange={handleChange}
          value={difficulty}/>
        </div>
        <input type="submit" value={btnText} />
      </form>
    </>
  );
}
