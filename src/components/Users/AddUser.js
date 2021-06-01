import React, { useState } from 'react'
import { Button } from '../UI/Button'
import { Card } from '../UI/Card'
import { ErrorModal } from '../UI/ErrorModal'
import styles from './AddUser.module.scss'
export const AddUser = props => {

  const [userName, setUserName] = useState('')
  const [userAge, setUserAge] = useState('')

  const addUserHandler = (e) => {
    e.preventDefault()
    if (userName.trim().length === 0 || userAge.trim().length === 0) {
      return
    }
    if (+userAge < 1) {
      return
    }
    props.onAddUser(userName, userAge)
    setUserName('')
    setUserAge('')
  }

  const changeHandler = (e) => {
    switch (e.target.name) {
      case "username":
        setUserName(e.target.value)
        break
      case "age":
        setUserAge(e.target.value)
        break
    }
  }

  return (
    <div>
      <ErrorModal title="An Error Occurd" message="somthing went wrong"/>
      <Card className={styles.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">User Name</label>
          <input
            id="username"
            name="username"
            type="text"
            onChange={changeHandler}
            value={userName}
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            name="age"
            onChange={changeHandler}
            value={userAge}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  )
}