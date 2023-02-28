import React from 'react'
import styles from "./footer.module.css"

const Footer = () => {
  return (
    <div className={styles.footer_body}>
      <p className={styles.footer_txt}> <span className={styles.copy_txt}> Copyright </span> ©️ </p>
    </div>
  )
}

export default Footer