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
          <h1>This website is awesome</h1>
          <p>
            This website has some subtext that goes here under the main title. 
            It is a smaller font and the color is lower
          </p>
          <button> Sighn up </button>
        </div>
      </div>
    </>
  )
}

export default Hero