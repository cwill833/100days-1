import React from 'react'
import styles from './Card.module.scss'
export const Card = props => (

  <div className={`${styles.card} ${props.className}`}>
    {props.children}
  </div>
)