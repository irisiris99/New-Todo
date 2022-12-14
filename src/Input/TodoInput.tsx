import { ChangeEvent, FormEvent } from 'react'
import { RiChatNewLine } from 'react-icons/ri'
import styles from './TodoInput.module.css'

interface TodoInputProps {
  text: string
  onTextChange: (text:string) => void
  onSubmit: () => void
}

const TodoInput = (props:TodoInputProps) => {
  const handleInputChanged = (event:ChangeEvent<HTMLInputElement>) => {
    props.onTextChange(event.target.value)
  }

  const handleSubmit = (event:FormEvent) => {
    event.preventDefault();
    props.onSubmit();
  }

  
  return (
    <div className={styles.container}>
      <form className={styles.formContainer} onSubmit={handleSubmit}>
        <input className={styles.input} placeholder={'해야할 Todo'}
        value={props.text}
        onChange={handleInputChanged}/>
        <button type='submit' className={styles.enter}><RiChatNewLine /></button>
      </form>
    </div>
  )
}

export default TodoInput;