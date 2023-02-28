import React from 'react'
import styles from "./quote.module.css"

const Quote = () => {
  return (
    <div className={styles.quote_body}>
      <p className={styles.quote_txt}><i>
        This is an inspiring qoute, or testimonial from a<br/>
        customer.Maybe it's just filling up space, or maybe<br/>
        people will actully read it. Who knows? all i know <br/>
        is that it looks nice.<span className={styles.quote_quoter}><b> - Thor </b></span>
        </i></p>
    </div>
  )
}

export default Quote