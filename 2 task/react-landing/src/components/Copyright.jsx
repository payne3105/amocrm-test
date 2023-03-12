import React from 'react'
import styles from '../style/copyright.module.css'

export default function Copyright() {
  return (
    <div className={styles.copyright_container}>
        <p>©WELBEX 2022. Все права защищены.</p>
        <a href='#'>Политика конфиденциальности</a>
    </div>
  )
}
