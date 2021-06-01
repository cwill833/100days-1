import React, { useState } from 'react'
import { Button } from '../UI/Button'
import { Card } from '../UI/Card'
import styles from './AddUser.module.scss'
export const AddUser = props => {

  const [userName, setUserName] = useState('')
  const [userAge, setUserAge] = useState('')

  const addUserHandler = (e) => {
    e.preventDefault()

  }

  const changeHandler =(e) => {
    switch(e.target.name){
      case "username":
        setUserName(e.target.value)
        break
      case "age":
        setUserAge(e.target.value)
        break
    }
  }

  return(
    <Card className={styles.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">User Name</label>
        <input id="username" name="username" type="text" onChange={changeHandler}/>
        <label htmlFor="age">Age (Years)</label>
        <input id="age" type="number" name="age" onChange={changeHandler}/>
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  )
}