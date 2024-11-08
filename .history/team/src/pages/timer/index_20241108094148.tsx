import { useState } from "react";
import styles from '@/styles/timer/index.module.css'

export default function timer(){
  return (
    <>
      <div className={styles.content}>
    <span className={styles.timer}>JS Timer </span>
	    <p> <span className={styles.min}>00</span>:<span className={styles.sec}>00</span>:<span className={styles.dsec}>00</span></p>
	    <button id="start"> Start </button>
	    <button id="stop"> Stop </button>
	    <button id="restart"> Restart </button>
          

      </div>
    </>
  )
}