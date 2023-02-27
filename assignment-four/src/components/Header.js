import React from 'react'
import styles from "./header.module.css"

const Header = () => {
  return (
    <div className={styles.body}>
      <h1 className={styles.header_logo}> Header Logo </h1>
      <div className={styles.header_links_list}>
        <a href="www.google.com" target="_blank" className={styles.header_link}> Header link one </a>
        <a href="www.google.com" target="_blank" className={styles.header_link}> Header link two </a>
        <a href="www.google.com" target="_blank" className={styles.header_link}> Header link three </a>
      </div>  
    </div>
  )
}

export default Header