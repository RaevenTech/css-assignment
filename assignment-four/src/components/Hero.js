import React from 'react'
import styles from "./hero.module.css"
import Header from './Header'

const Hero = () => {
  return (
    <>
      <div className={styles.body}>
        <Header />
        <h1 className={styles.h1}>Hero</h1>
      </div>
    </>
  )
}

export default Hero