import React, {useState, ChangeEvent, FormEvent, useEffect} from 'react';

import styles from './TaskForm.module.css';

import { ITask } from '../interfaces/Task';

export interface ITaskFormProps {
  btnText: string
  taskList: ITask[]
  setTaskList?: React.Dispatch<React.SetStateAction<ITask[]>>
}
export function TaskForm({ btnText, taskList, setTaskList }: ITaskFormProps) {

  const [id, setId] = useState<number>(0);
  const [title, setTitle] = useState<string>("");
  const [difficulty, setDifficulty] = useState<number>(0);

  const addTaskHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const id = Math.floor(Math.random() * 1000)
    const newTask: ITask = { id, title, difficulty }

    setTaskList!([...taskList, newTask])
    setTitle("")
    setDifficulty(0)

    console.log(taskList)
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
