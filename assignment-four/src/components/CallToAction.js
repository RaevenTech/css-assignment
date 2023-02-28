import React from 'react'
import styles from "./callToAction.module.css"

const CallToAction = () => {
  return (
    <div className={styles.action_body}>
      <div className={styles.action_container}>
        <div className={styles.action_txt}>
          <h3 className={styles.action_title}> Call to action! It's time! </h3>
          <p className={styles.action_subtxt}>
            Sign up for our products by clicking the button right over there!
          </p>
        </div>
      <button className={styles.action_btn}> Sign up </button>
      </div>
    </div>
  )
}

export default CallToAction