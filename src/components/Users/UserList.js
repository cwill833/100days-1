import React from 'react'
import { Card } from '../UI/Card'
import styles from './UserList.module.scss'

export const UserList = props => {
  return (
    <Card className={styles.users}>
      <ul>
        {props.users.map(user => <li key={`${user.name} ${user.age}`}>{user.name} ({user.age})</li>)}
      </ul>
    </Card>
  )
}