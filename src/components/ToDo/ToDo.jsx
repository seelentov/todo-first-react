/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable react/react-in-jsx-scope */

import { useState } from 'react'
import './ToDo.css'
import { useGetTaskQuery, useCreateTaskMutation, useDeleteTaskMutation, useUpdateStatusMutation } from '../../store/api/todo.api'

const ToDoForm = () => {
  const [input, setInput] = useState('')

  const [createTask] = useCreateTaskMutation()

  const handleSubmit = (e) => {
    e.preventDefault()
    createTask({ text: input, status: 'active', author: 'admin' }).then(() => setInput(''))
  }
  return (
      <form onSubmit={(e) => handleSubmit(e)} className='todo__form'>
        <label htmlFor="">
          Новая:
          <input type="text" name='task' value={input} onChange={(e) => setInput(e.target.value)}/>
          <input disabled={input === ''}type="submit" value='Добавить' />
        </label>
      </form>
  )
}

const ToDoItem = ({ id, text, status }) => {
  const [deleteTask] = useDeleteTaskMutation()
  const handleDelete = (e, id) => {
    e.preventDefault()
    deleteTask(id)
  }

  const [updateStatus] = useUpdateStatusMutation()
  const handleStatus = (e, id) => {
    e.preventDefault()
    updateStatus({ taskId: id, status: status === 'active' ? 'ready' : 'active' })
  }

  return (
      <tr className='todo__item todo-item'>
              <td className='todo-item__text'>{text}</td>
              <td className='todo-item__status'>{status === 'active' ? 'Активная' : 'Выполнено'}</td>
              <td className='todo-item__actions'>
                <button onClick={(e) => handleDelete(e, id)} className='todo-item__actions-delete'>Удалить</button>
                <button onClick={(e) => handleStatus(e, id)} className={`${'todo-item__actions'}${status === 'active' ? '-toggle' : '-ready'}`}>{status === 'active' ? 'Отметить' : 'Готово'}</button>
              </td>
      </tr>
  )
}

export const ToDo = () => {
  const { isLoading, data } = useGetTaskQuery()

  return (
      <div className='todo'>
        <h1>To Do List</h1>
        <ToDoForm />
        <table className='todo__items'>
          <thead className='todo__head'>
            <tr>
              <th className='todo__head-text'>Названия</th>
              <th className='todo__head-status'>Статус</th>
              <th className='todo__head-actions'>Действия</th>
            </tr>
          </thead>
          <tbody>
            {isLoading
              ? 'Loading...'
              : data
                ? data.map(({ id, text, status }) => (
                  <ToDoItem key={id} id={id} text={text} status={status}/>
                ))
                : 'Not found'}
          </tbody>
        </table>
      </div>
  )
}
