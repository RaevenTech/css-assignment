import React from 'react'
import styles from "./infoSection.module.css"

const InfoSection = () => {
  return (
    <div className={styles.info_body}>
      <h1 className={styles.info_h1}>Some random infomation</h1>
      <div className={styles.info_items}>
        <div className={styles.info_item}>
          <img  class={styles.info_img} src="" alt="" />
          <p className={styles.info_txt}> This is some subtext under an illustration or image</p>
        </div>
        <div className={styles.info_item}>
          <img  class={styles.info_img} src="" alt="" />
          <p className={styles.info_txt}> This is some subtext under an illustration or image</p>
        </div>
        <div className={styles.info_item}>
          <img  class={styles.info_img} src="" alt="" />
          <p className={styles.info_txt}> This is some subtext under an illustration or image</p>
        </div>
        <div className={styles.info_item}>
          <img  class={styles.info_img} src="" alt="" />
          <p className={styles.info_txt}> This is some subtext under an illustration or image</p>
        </div>
      </div>
    </div>
    
  )
}

export default InfoSection