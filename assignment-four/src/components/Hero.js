import React from 'react'
import styles from "./hero.module.css"
import Header from './Header'

const Hero = () => {
  return (
    <>
      <div className={styles.body}>
        <Header />
        <div className={styles.main_container}>
          <img className={styles.hero_img} src="https://images.squarespace-cdn.com/content/v1/5a327bb28fd4d2bd424f9c57/1514900889214-22ZWUTWU90BA5PXPSSF2/upload.jpg" alt="African Sunset" />
          <h1 className={styles.hero_title}>This website is awesome</h1>
          <p className={styles.hero_txt}>
            This website has some subtext that goes here under the <br/> 
            main title. It is a smaller font and the color is lower <br/>
            contrast.
          </p>
          <button className={styles.hero_btn}> Sign up </button>
        </div>
      </div>
    </>
  )
}

export default Hero