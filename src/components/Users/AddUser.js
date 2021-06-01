import React from 'react'
import { Card } from '../UI/Card'
import styles from './AddUser.module.scss'
export const AddUser = props => {

  const addUserHandler = (e) => {
    e.preventDefault()

  }

  return(
    <Card className={styles.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">User Name</label>
        <input id="username" type="text"/>
        <label htmlFor="age">Age (Years)</label>
        <input id="age" type="number"/>
        <button type="submit">Add User</button>
      </form>
    </Card>
  )
}